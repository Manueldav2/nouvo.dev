'use client';

import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { PDFViewer } from "@/app/components/PDFViewer"
import { useState } from "react"

export default function PrivacyPolicy() {
  const [isPDFOpen, setIsPDFOpen] = useState(false);

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <Link href="/">
        <Button variant="ghost" className="mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Button>
      </Link>
      
      <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
      
      <div className="prose prose-lg max-w-none">
        <p>Last updated: {new Date().toLocaleDateString()}</p>
        
        <h2>1. Introduction</h2>
        <p>
          At Nouvo, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
        </p>

        <h2>2. Information We Collect</h2>
        <p>We may collect information about you in a variety of ways, including:</p>
        <ul>
          <li>Personal Data: Name, email address, phone number, and other contact information</li>
          <li>Usage Data: Information about how you use our website and services</li>
          <li>Device Data: Information about your device, browser, and IP address</li>
        </ul>

        <h2>3. How We Use Your Information</h2>
        <p>We use the information we collect to:</p>
        <ul>
          <li>Provide and maintain our services</li>
          <li>Improve and personalize your experience</li>
          <li>Communicate with you about our services</li>
          <li>Protect against unauthorized access</li>
        </ul>

        <h2>4. Data Security</h2>
        <p>
          We implement appropriate security measures to protect your personal information. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
        </p>

        <h2>5. Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us at:
        </p>
        <ul>
          <li>Email: manuel@nouvo.dev</li>
          <li>Phone: (479) 250-8678</li>
        </ul>

        <div className="mt-8">
          <Button 
            onClick={() => setIsPDFOpen(true)}
            className="bg-[#22333b] hover:bg-[#0a0908] text-[#f2f4f3]"
          >
            View Full Privacy Policy PDF
          </Button>
        </div>
      </div>

      <PDFViewer
        isOpen={isPDFOpen}
        onClose={() => setIsPDFOpen(false)}
        pdfUrl="/Privacy policy_nouvo.pdf"
        title="Privacy Policy"
      />
    </div>
  )
} 