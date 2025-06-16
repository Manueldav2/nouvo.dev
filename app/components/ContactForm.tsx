'use client';

import { useForm, ValidationError } from '@formspree/react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { motion } from 'framer-motion';

export function ContactForm() {
  const [state, handleSubmit] = useForm("mwpbbrbj");

  if (state.succeeded) {
    return (
      <div className="text-center space-y-4">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-16 h-16 bg-[#a9927d]/20 rounded-lg flex items-center justify-center mx-auto">
            <svg className="w-8 h-8 text-[#5e503f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </motion.div>
        <h3 className="text-2xl font-bold text-[#0a0908]">Thank You!</h3>
        <p className="text-[#22333b]">We'll get back to you soon.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input 
            id="name" 
            name="name" 
            placeholder="Enter your name" 
            className="border-[#a9927d]/20" 
            required
          />
          <ValidationError prefix="Name" field="name" errors={state.errors} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input 
            id="email" 
            name="email" 
            type="email" 
            placeholder="Enter your email" 
            className="border-[#a9927d]/20" 
            required
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea 
          id="message" 
          name="message" 
          placeholder="Enter your message" 
          className="min-h-[100px] border-[#a9927d]/20" 
          required
        />
        <ValidationError prefix="Message" field="message" errors={state.errors} />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Button 
          type="submit" 
          disabled={state.submitting}
          className="w-full bg-[#22333b] hover:bg-[#0a0908] text-[#f2f4f3]"
        >
          {state.submitting ? 'Sending...' : 'Send Message'}
        </Button>
      </motion.div>
    </form>
  );
} 