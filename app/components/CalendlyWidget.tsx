'use client';

import { useEffect } from 'react';
import Script from 'next/script';

export default function CalendlyWidget() {
  useEffect(() => {
    // Ensure Calendly is loaded
    if ((window as any).Calendly) {
      (window as any).Calendly.initInlineWidget({
        url: 'https://calendly.com/manuel-nouvo/30min',
        parentElement: document.querySelector('.calendly-inline-widget'),
      });
    }
  }, []);

  return (
    <div className="w-full max-w-4xl mx-auto my-8 rounded-lg overflow-hidden shadow-xl bg-[#22333b]">
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />
      <div 
        className="calendly-inline-widget" 
        data-url="https://calendly.com/manuel-nouvo/30min"
        style={{ minWidth: '320px', height: '700px' }}
      />
    </div>
  );
} 