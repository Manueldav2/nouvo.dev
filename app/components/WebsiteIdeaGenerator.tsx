'use client';

import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AnimatedSection, AnimatedElement } from "./AnimatedSection";
import { FaLightbulb, FaSpinner, FaPhone, FaEnvelope } from "react-icons/fa";
import Link from 'next/link';
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const loadingMessages = [
  "Analyzing your business needs...",
  "Crafting the perfect website strategy...",
  "Designing innovative features...",
  "Optimizing for success...",
  "Almost there..."
];

export function WebsiteIdeaGenerator() {
  const [userInput, setUserInput] = useState('');
  const [suggestion, setSuggestion] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [loadingMessageIndex, setLoadingMessageIndex] = useState(0);

  const validateInput = (input: string) => {
    if (!input.trim()) {
      throw new Error('Please enter your website idea or business description');
    }
    if (input.length < 10) {
      throw new Error('Please provide more details about your website idea (minimum 10 characters)');
    }
    if (input.length > 500) {
      throw new Error('Please keep your description under 500 characters');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuggestion('');
    setLoadingMessageIndex(0);

    try {
      // Validate input before making the request
      validateInput(userInput);

      const response = await fetch('https://nouvo-ai-95cf2190cd12.herokuapp.com/api/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        mode: 'cors',
        credentials: 'include',
        body: JSON.stringify({ userInput }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ error: 'Failed to parse error response' }));
        if (response.status === 400) {
          throw new Error(errorData.error || 'Please check your input and try again');
        } else if (response.status === 500) {
          throw new Error('Our AI service is temporarily unavailable. Please try again in a few minutes.');
        } else if (response.status === 503) {
          throw new Error('Service temporarily unavailable. Please try again later.');
        } else {
          throw new Error(errorData.error || 'Something went wrong. Please try again.');
        }
      }

      const data = await response.json().catch(() => {
        throw new Error('Failed to parse response from server');
      });

      if (!data.suggestion || data.suggestion.trim() === '') {
        throw new Error('We received an empty response. Please try again with a different description.');
      }

      setSuggestion(data.suggestion);
    } catch (err) {
      console.error('Error generating website idea:', err);
      if (err instanceof Error) {
        if (err.message.includes('Failed to fetch') || err.message.includes('NetworkError')) {
          setError('Please check your internet connection and try again.');
        } else {
          setError(err.message);
        }
      } else {
        setError('An unexpected error occurred. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (loading) {
      interval = setInterval(() => {
        setLoadingMessageIndex((prev) => (prev + 1) % loadingMessages.length);
      }, 2000);
    }
    return () => clearInterval(interval);
  }, [loading]);

  return (
    <div className="w-full max-w-4xl mx-auto">
      <Card className="border-none shadow-lg bg-white/95 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center text-[#0a0908]">
            <div className="flex items-center justify-center gap-2">
              <FaLightbulb className="text-[#a9927d]" />
              Website Idea Generator
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="userInput" className="text-[#22333b]">
                Describe your website idea or business:
              </Label>
              <Textarea
                id="userInput"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                placeholder="e.g., I want to create an e-commerce website for handmade jewelry..."
                className="min-h-[100px] resize-none"
                disabled={loading}
              />
            </div>

            <Button 
              type="submit" 
              className="w-full bg-[#a9927d] hover:bg-[#5e503f] text-[#f2f4f3]"
              disabled={loading || !userInput.trim()}
            >
              {loading ? (
                <div className="flex items-center gap-2">
                  <FaSpinner className="animate-spin" />
                  {loadingMessages[loadingMessageIndex]}
                </div>
              ) : (
                'Generate Website Idea'
              )}
            </Button>

            {error && (
              <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-600 text-sm">{error}</p>
              </div>
            )}

            {suggestion && (
              <div className="mt-6 space-y-6">
                <div className="p-4 bg-[#f2f4f3] rounded-lg">
                  <h3 className="font-semibold text-[#0a0908] mb-2">Your Website Idea:</h3>
                  <p className="text-[#22333b] whitespace-pre-wrap">{suggestion}</p>
                </div>
                
                <div className="p-4 bg-[#22333b] rounded-lg text-[#f2f4f3]">
                  <h3 className="font-semibold mb-4">Ready to Build Your Website?</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <FaPhone className="text-[#a9927d]" />
                      <a href="tel:4792508678" className="hover:text-[#a9927d] transition-colors">
                        (479) 250-8678
                      </a>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaEnvelope className="text-[#a9927d]" />
                      <a href="mailto:manuel@nouvo.dev" className="hover:text-[#a9927d] transition-colors">
                        manuel@nouvo.dev
                      </a>
                    </div>
                    <Link href="#contact" className="block">
                      <Button className="w-full mt-4 bg-[#a9927d] hover:bg-[#5e503f] text-[#f2f4f3]">
                        Contact Us to Get Started
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </form>
        </CardContent>
      </Card>
    </div>
  );
} 