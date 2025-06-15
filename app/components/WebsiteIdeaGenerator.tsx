'use client';

import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AnimatedSection, AnimatedElement } from "./AnimatedSection";
import { FaLightbulb, FaSpinner, FaPhone, FaEnvelope } from "react-icons/fa";
import Link from 'next/link';

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

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (loading) {
      interval = setInterval(() => {
        setLoadingMessageIndex((prev) => (prev + 1) % loadingMessages.length);
      }, 2000);
    }
    return () => clearInterval(interval);
  }, [loading]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuggestion('');
    setLoadingMessageIndex(0);

    try {
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userInput }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to generate suggestion');
      }

      if (!data.suggestion) {
        throw new Error('No suggestion received from the server');
      }

      setSuggestion(data.suggestion);
    } catch (err) {
      console.error('Error generating website idea:', err);
      setError(err instanceof Error ? err.message : 'Failed to generate website idea. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatedSection className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <AnimatedSection className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2 max-w-3xl mx-auto">
            <Card className="border-[#a9927d]/20 hover:border-[#a9927d]/40 transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-[#0a0908]">
                  <FaLightbulb className="text-[#a9927d]" />
                  AI Website Idea Generator
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Input
                      id="userInput"
                      placeholder="Describe your business or website idea..."
                      value={userInput}
                      onChange={(e) => setUserInput(e.target.value)}
                      className="border-[#a9927d]/20"
                      required
                      minLength={10}
                    />
                  </div>
                  <AnimatedElement>
                    <Button 
                      type="submit" 
                      className="w-full bg-[#22333b] hover:bg-[#0a0908] text-[#f2f4f3]"
                      disabled={loading || !userInput.trim()}
                    >
                      {loading ? (
                        <div className="flex items-center justify-center gap-2">
                          <FaSpinner className="h-4 w-4 animate-spin" />
                          <span>{loadingMessages[loadingMessageIndex]}</span>
                        </div>
                      ) : (
                        'Generate Website Idea'
                      )}
                    </Button>
                  </AnimatedElement>
                </form>

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
              </CardContent>
            </Card>
          </div>
        </AnimatedSection>
      </div>
    </AnimatedSection>
  );
} 