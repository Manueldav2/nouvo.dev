'use client';

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Target, ArrowRight, CheckCircle, Star, Eye, TrendingUp, Users, Trophy } from "lucide-react"
import { FaRocket, FaCode, FaPalette, FaMobile, FaSearch, FaChartLine, FaUser, FaPhone, FaEnvelope } from "react-icons/fa"
import { BsArrowUpRight, BsCheck2Circle } from "react-icons/bs"
import { HiOutlineLightBulb } from "react-icons/hi"
import Image from "next/image"
import Link from "next/link"
import { AnimatedSection, AnimatedElement } from "./components/AnimatedSection"
import { WebsiteIdeaGenerator } from "./components/WebsiteIdeaGenerator"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { 
  ParallaxSection, 
  ScrollFade, 
  HoverScale, 
  SmoothScroll, 
  TextReveal, 
  ImageParallax, 
  StickySection,
  AnimatedBackground
} from "./components/WebflowEffects";
import { LoadingScreen } from "./components/LoadingScreen";
import { ContactForm } from './components/ContactForm';
import RotatingText from "./components/RotatingText"
import CalendlyWidget from './components/CalendlyWidget'

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    const offset = 80; // Adjust this value based on your header height
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  }
};

export default function HomePage() {
  return (
    <>
      <LoadingScreen />
      <AnimatedBackground />
      <SmoothScroll>
        <div className="flex flex-col min-h-screen max-w-[1920px] mx-auto">
          {/* Header */}
          <AnimatedSection className="px-4 lg:px-6 h-16 flex items-center border-b border-[#22333b]/20 bg-[#f2f4f3]/95 backdrop-blur supports-[backdrop-filter]:bg-[#f2f4f3]/60 sticky top-0 z-50">
            <div className="w-full max-w-7xl mx-auto flex items-center justify-between">
              <Link href="/" className="flex items-center justify-center group">
                <AnimatedElement className="w-8 h-8 bg-[#22333b] rounded-lg flex items-center justify-center">
                  <span className="text-[#f2f4f3] font-bold text-sm">N</span>
                </AnimatedElement>
                <span className="ml-2 text-xl font-bold text-[#0a0908] group-hover:text-[#5e503f] transition-colors">nouvo</span>
              </Link>
              <nav className="hidden md:flex items-center gap-4 sm:gap-6">
                {[
                  { name: "Services", href: "services" },
                  { name: "Portfolio", href: "portfolio" },
                  { name: "Contact", href: "contact" },
                  { name: "About", href: "about" }
                ].map((item) => (
                  <AnimatedElement key={item.name}>
                    <button 
                      onClick={() => scrollToSection(item.href)}
                      className="text-sm font-medium text-[#22333b] hover:text-[#5e503f] transition-colors"
                    >
                      {item.name}
                    </button>
                  </AnimatedElement>
                ))}
                <AnimatedElement>
                  <button 
                    onClick={() => scrollToSection("website-idea-generator")}
                    className="inline-flex items-center justify-center rounded-md bg-[#a9927d] px-4 py-2 text-sm font-medium text-[#f2f4f3] shadow transition-colors hover:bg-[#5e503f] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#a9927d]"
                  >
                    Create Website Idea
                  </button>
                </AnimatedElement>
              </nav>
              <button 
                className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-[#22333b] hover:text-[#5e503f] transition-colors"
                onClick={() => {
                  const mobileMenu = document.getElementById('mobile-menu');
                  if (mobileMenu) {
                    mobileMenu.classList.toggle('hidden');
                  }
                }}
              >
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </AnimatedSection>
          <div id="mobile-menu" className="hidden md:hidden bg-[#f2f4f3]/95 backdrop-blur supports-[backdrop-filter]:bg-[#f2f4f3]/60 border-b border-[#22333b]/20">
            <nav className="flex flex-col p-4 space-y-4">
              {[
                { name: "Services", href: "services" },
                { name: "Portfolio", href: "portfolio" },
                { name: "Contact", href: "contact" },
                { name: "About", href: "about" }
              ].map((item) => (
                <button 
                  key={item.name}
                  onClick={() => {
                    scrollToSection(item.href);
                    const mobileMenu = document.getElementById('mobile-menu');
                    if (mobileMenu) {
                      mobileMenu.classList.add('hidden');
                    }
                  }}
                  className="text-sm font-medium text-[#22333b] hover:text-[#5e503f] transition-colors text-left"
                >
                  {item.name}
                </button>
              ))}
              <button 
                onClick={() => {
                  scrollToSection("website-idea-generator");
                  const mobileMenu = document.getElementById('mobile-menu');
                  if (mobileMenu) {
                    mobileMenu.classList.add('hidden');
                  }
                }}
                className="inline-flex items-center justify-center rounded-md bg-[#a9927d] px-4 py-2 text-sm font-medium text-[#f2f4f3] shadow transition-colors hover:bg-[#5e503f] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#a9927d]"
              >
                Create Website Idea
              </button>
            </nav>
          </div>

          <main className="flex-1">
            {/* Hero Section */}
            <ParallaxSection className="w-full py-16 bg-gradient-to-br from-[#f2f4f3] via-[#a9927d]/10 to-[#5e503f]/5">
              <AnimatedSection className="w-full">
                <div className="container mx-auto px-4 md:px-6 max-w-7xl">
                  <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-8 text-center">
                    <AnimatedSection delay={0.2} className="space-y-4 max-w-3xl mx-auto">
                      <Badge variant="secondary" className="mb-4 bg-[#a9927d]/20 text-[#5e503f] border-[#a9927d]/30">
                        <FaRocket className="mr-2 inline-block" />
                        Custom Websites That Drive Results
                      </Badge>
                      <TextReveal className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-[#0a0908] hero-title">
                        We Build{" "}
                        <RotatingText
                          texts={[
                            "Business Websites",
                            "Athletic Portfolios",
                            "Resume Websites",
                            "Career Success",
                            "Digital Solutions",
                            "Innovative Brands",
                            "Online Presence"
                          ]}
                          splitBy="words"
                          rotationInterval={3000}
                          mainClassName="text-[#5e503f]"
                          transition={{ type: "spring", damping: 20, stiffness: 250 }}
                        />
                      </TextReveal>
                      <TextReveal className="text-[#22333b] text-2xl font-semibold">
                        That Drive Results
                      </TextReveal>
                      <TextReveal className="mx-auto text-[#22333b] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed hero-description">
                        From athlete portfolios and interactive resumes to business websites and personal brands, we create custom digital experiences that showcase your unique story and drive real results.
                      </TextReveal>
                    </AnimatedSection>
                    <AnimatedSection delay={0.4} className="flex flex-col sm:flex-row gap-4 hero-buttons">
                      <HoverScale>
                        <button 
                          onClick={() => scrollToSection("contact")}
                          className="inline-flex items-center justify-center rounded-md bg-[#22333b] px-6 py-3 text-sm font-medium text-[#f2f4f3] shadow transition-colors hover:bg-[#0a0908] group"
                        >
                          Start Your Project
                          <BsArrowUpRight className="ml-2 h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </button>
                      </HoverScale>
                      <HoverScale>
                        <button 
                          onClick={() => scrollToSection("portfolio")}
                          className="inline-flex items-center justify-center rounded-md border border-[#22333b] px-6 py-3 text-sm font-medium text-[#22333b] shadow transition-colors hover:bg-[#22333b] hover:text-[#f2f4f3] group"
                        >
                          View Our Work
                          <BsArrowUpRight className="ml-2 h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </button>
                      </HoverScale>
                    </AnimatedSection>
                    <AnimatedSection delay={0.6} className="flex items-center gap-4 text-sm text-[#5e503f] mt-8">
                      {[
                        { icon: FaPalette, text: "Custom Design" },
                        { icon: FaChartLine, text: "Results-Driven" },
                        { icon: FaCode, text: "Professional Service" }
                      ].map((item, index) => (
                        <AnimatedElement key={index} delay={index * 0.1}>
                          <div className="flex items-center gap-1">
                            <item.icon className="h-4 w-4 text-[#a9927d]" />
                            <span>{item.text}</span>
                          </div>
                        </AnimatedElement>
                      ))}
                    </AnimatedSection>
                  </div>
                </div>
              </AnimatedSection>
            </ParallaxSection>

            {/* Services Section */}
            <ScrollFade className="w-full py-12 border-t border-[#e5e5e5]/60">
              <AnimatedSection id="services" className="w-full">
                <div className="container mx-auto px-4 md:px-6 max-w-7xl">
                  <AnimatedSection className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2 max-w-3xl mx-auto">
                      <Badge variant="outline" className="border-[#a9927d] text-[#5e503f]">
                        <HiOutlineLightBulb className="mr-2 inline-block" />
                        Our Services
                      </Badge>
                      <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-[#0a0908]">
                        Digital Solutions That Drive Growth
                      </h2>
                      <p className="text-[#22333b] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                        Whether you're an athlete showcasing your achievements, a business looking to increase sales, or a professional seeking career advancement, we create websites that deliver measurable results.
                      </p>
                    </div>
                  </AnimatedSection>
                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mx-auto max-w-5xl mt-8">
                    {[
                      {
                        icon: Trophy,
                        title: "Athletic Portfolios",
                        description: "Stand out to recruiters and coaches with a dynamic showcase of your athletic achievements.",
                        features: [
                          "Game highlights and statistics",
                          "Performance metrics tracking",
                          "Recruitment contact forms",
                          "Media galleries and video integration"
                        ]
                      },
                      {
                        icon: TrendingUp,
                        title: "Business Websites",
                        description: "Grow your business with a professional website that converts visitors into customers.",
                        features: [
                          "Custom design and branding",
                          "Mobile-responsive layouts",
                          "SEO optimization",
                          "Lead generation forms"
                        ]
                      },
                      {
                        icon: Users,
                        title: "Professional Resume Websites",
                        description: "Transform your resume into an interactive portfolio that gets you noticed.",
                        features: [
                          "Interactive work history",
                          "Skill visualization",
                          "Project showcases",
                          "Professional bio pages"
                        ]
                      }
                    ].map((service, index) => (
                      <AnimatedSection key={index} delay={index * 0.2}>
                        <Card className="group hover:shadow-lg transition-all duration-300 border-[#a9927d]/20 hover:border-[#a9927d]/40 h-full service-card">
                          <CardHeader>
                            <AnimatedElement className="w-12 h-12 bg-[#a9927d]/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                              <service.icon className="h-6 w-6 text-[#5e503f]" />
                            </AnimatedElement>
                            <CardTitle className="text-[#0a0908] group-hover:text-[#5e503f] transition-colors">
                              {service.title}
                            </CardTitle>
                            <CardDescription className="text-[#22333b]">
                              {service.description}
                            </CardDescription>
                          </CardHeader>
                          <CardContent>
                            <ul className="space-y-2 text-sm text-[#5e503f]">
                              {service.features.map((feature, i) => (
                                <AnimatedElement key={i} delay={i * 0.1}>
                                  <li className="flex items-center gap-2">
                                    <BsCheck2Circle className="h-4 w-4 text-[#a9927d]" />
                                    {feature}
                                  </li>
                                </AnimatedElement>
                              ))}
                            </ul>
                          </CardContent>
                        </Card>
                      </AnimatedSection>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            </ScrollFade>

            {/* Stats Section */}
            <ParallaxSection className="w-full py-12 bg-[#f2f4f3] border-t border-[#e5e5e5]/60">
              <AnimatedSection className="w-full">
                <div className="container mx-auto px-4 md:px-6 max-w-7xl">
                  <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-4 lg:gap-12">
                    {[
                      { icon: Star, value: "98%", label: "Project Completion" },
                      { icon: Users, value: "9.8/10", label: "Customer Service" },
                      { icon: Target, value: "9.5/10", label: "Realistic Pricing" },
                      { icon: CheckCircle, value: "97%", label: "Customer Satisfaction" }
                    ].map((stat, index) => (
                      <AnimatedSection key={index} delay={index * 0.1}>
                        <div className="flex flex-col items-center justify-center space-y-2 text-center">
                          <AnimatedElement className="w-12 h-12 bg-[#a9927d]/20 rounded-lg flex items-center justify-center">
                            <stat.icon className="h-6 w-6 text-[#5e503f]" />
                          </AnimatedElement>
                          <div className="space-y-1">
                            <h3 className="text-3xl font-bold text-[#0a0908]">{stat.value}</h3>
                            <p className="text-sm text-[#22333b]">{stat.label}</p>
                          </div>
                        </div>
                      </AnimatedSection>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            </ParallaxSection>

            {/* Website Idea Generator Section */}
            <ScrollFade className="w-full py-12 border-t border-[#e5e5e5]/60">
              <AnimatedSection id="website-idea-generator" className="w-full">
                <WebsiteIdeaGenerator />
              </AnimatedSection>
            </ScrollFade>

            {/* Portfolio Section */}
            <ScrollFade className="w-full py-12 border-t border-[#e5e5e5]/60">
              <AnimatedSection id="portfolio" className="w-full">
                <div className="container mx-auto px-4 md:px-6 max-w-7xl">
                  <AnimatedSection className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2 max-w-3xl mx-auto">
                      <Badge variant="outline" className="border-[#a9927d] text-[#5e503f]">
                        <Eye className="mr-2 inline-block h-4 w-4" />
                        Our Portfolio
                      </Badge>
                      <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-[#0a0908]">
                        Recent Projects
                      </h2>
                      <p className="text-[#22333b] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                        Explore our latest work showcasing professional resumes and athletic portfolios.
                      </p>
                    </div>
                  </AnimatedSection>

                  <div className="grid gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
                    {/* Kate Phillips Resume Website */}
                    <AnimatedSection delay={0.1}>
                      <Card className="overflow-hidden group">
                        <div className="aspect-[16/10] relative overflow-hidden">
                          <Image
                            src="/nouvo_example_photos/kate_phillips_resume_website_photo.png"
                            alt="Kate Phillips Resume Website"
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                            priority
                          />
                        </div>
                        <CardContent className="p-4">
                          <Badge variant="secondary" className="mb-2 bg-[#a9927d]/20 text-[#5e503f] border-[#a9927d]/30">
                            Resume Website
                          </Badge>
                          <h3 className="text-xl font-semibold text-[#0a0908] mb-2">Kate Phillips</h3>
                          <p className="text-[#22333b] text-sm mb-4">
                            Professional resume website for a Biological Science Major showcasing academic excellence and leadership experience.
                          </p>
                          <Link 
                            href="https://kateephillips.com" 
                            target="_blank"
                            className="inline-flex items-center text-[#5e503f] hover:text-[#22333b] transition-colors"
                          >
                            View Website <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </CardContent>
                      </Card>
                    </AnimatedSection>

                    {/* Manuel David Resume Website */}
                    <AnimatedSection delay={0.2}>
                      <Card className="overflow-hidden group">
                        <div className="aspect-[16/10] relative overflow-hidden">
                                                      <Image
                              src="/nouvo_example_photos/manuel_david.dev.png"
                              alt="Manuel David Developer Portfolio"
                              fill
                              className="object-cover transition-transform duration-300 group-hover:scale-105"
                              priority
                            />
                        </div>
                        <CardContent className="p-4">
                          <Badge variant="secondary" className="mb-2 bg-[#a9927d]/20 text-[#5e503f] border-[#a9927d]/30">
                            Developer Portfolio
                          </Badge>
                          <h3 className="text-xl font-semibold text-[#0a0908] mb-2">Manuel David</h3>
                          <p className="text-[#22333b] text-sm mb-4">
                            Full-stack developer portfolio highlighting technical skills, projects, and professional experience.
                          </p>
                          <Link 
                            href="https://manueldavid.dev" 
                            target="_blank"
                            className="inline-flex items-center text-[#5e503f] hover:text-[#22333b] transition-colors"
                          >
                            View Website <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </CardContent>
                      </Card>
                    </AnimatedSection>

                    {/* Rush Bradley Sports Portfolio */}
                    <AnimatedSection delay={0.3}>
                      <Card className="overflow-hidden group">
                        <div className="aspect-[16/10] relative overflow-hidden">
                          <Image
                            src="/nouvo_example_photos/rush_bradley_sports_web_photo.png"
                            alt="Rush Bradley Baseball Portfolio"
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                            priority
                          />
                        </div>
                        <CardContent className="p-4">
                          <Badge variant="secondary" className="mb-2 bg-[#a9927d]/20 text-[#5e503f] border-[#a9927d]/30">
                            Sports Portfolio
                          </Badge>
                          <h3 className="text-xl font-semibold text-[#0a0908] mb-2">Rush Bradley</h3>
                          <p className="text-[#22333b] text-sm mb-4">
                            Baseball athlete portfolio showcasing stats, highlights, and achievements for college recruitment.
                          </p>
                          <Link 
                            href="https://rushbradley.com" 
                            target="_blank"
                            className="inline-flex items-center text-[#5e503f] hover:text-[#22333b] transition-colors"
                          >
                            View Website <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </CardContent>
                      </Card>
                    </AnimatedSection>

                    {/* Bella Bland Resume Website */}
                    <AnimatedSection delay={0.4}>
                      <Card className="overflow-hidden group">
                        <div className="aspect-[16/10] relative overflow-hidden">
                          <Image
                            src="/resume_website.png"
                            alt="Bella Bland Resume Website"
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                        </div>
                        <CardContent className="p-4">
                          <Badge variant="secondary" className="mb-2 bg-[#a9927d]/20 text-[#5e503f] border-[#a9927d]/30">
                            Resume Website
                          </Badge>
                          <h3 className="text-xl font-semibold text-[#0a0908] mb-2">Bella Bland</h3>
                          <p className="text-[#22333b] text-sm mb-4">
                            Professional resume website for Business Marketing major, showcasing achievements and experience.
                          </p>
                          <Link 
                            href="https://bellakbland.com/" 
                            target="_blank"
                            className="inline-flex items-center text-[#5e503f] hover:text-[#22333b] transition-colors"
                          >
                            View Website <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </CardContent>
                      </Card>
                    </AnimatedSection>

                    {/* Addi Reed Dance Portfolio */}
                    <AnimatedSection delay={0.5}>
                      <Card className="overflow-hidden group">
                        <div className="aspect-[16/10] relative overflow-hidden">
                          <Image
                            src="/portfoli_pic.png"
                            alt="Addi Reed Dance Portfolio"
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                        </div>
                        <CardContent className="p-4">
                          <Badge variant="secondary" className="mb-2 bg-[#a9927d]/20 text-[#5e503f] border-[#a9927d]/30">
                            Dance Portfolio
                          </Badge>
                          <h3 className="text-xl font-semibold text-[#0a0908] mb-2">Addi Reed</h3>
                          <p className="text-[#22333b] text-sm mb-4">
                            Dance portfolio showcasing performances, achievements, and videos for professional opportunities.
                          </p>
                          <Link 
                            href="https://addisonkreed.com" 
                            target="_blank"
                            className="inline-flex items-center text-[#5e503f] hover:text-[#22333b] transition-colors"
                          >
                            View Website <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </CardContent>
                      </Card>
                    </AnimatedSection>

                    {/* Blast & Beyond Business Website */}
                    <AnimatedSection delay={0.6}>
                      <Card className="overflow-hidden group">
                        <div className="aspect-[16/10] relative overflow-hidden">
                          <Image
                            src="/blast_beyond_png.png"
                            alt="Blast & Beyond Business Website"
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                        </div>
                        <CardContent className="p-4">
                          <Badge variant="secondary" className="mb-2 bg-[#a9927d]/20 text-[#5e503f] border-[#a9927d]/30">
                            Business Website
                          </Badge>
                          <h3 className="text-xl font-semibold text-[#0a0908] mb-2">Blast & Beyond</h3>
                          <p className="text-[#22333b] text-sm mb-4">
                            Business website for pressure washing and property maintenance services in Northwest Arkansas.
                          </p>
                          <Link 
                            href="https://blast-beyond.web.app/" 
                            target="_blank"
                            className="inline-flex items-center text-[#5e503f] hover:text-[#22333b] transition-colors"
                          >
                            View Website <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </CardContent>
                      </Card>
                    </AnimatedSection>
                  </div>
                </div>
              </AnimatedSection>
            </ScrollFade>

            {/* Testimonials Section */}
            <ScrollFade className="w-full py-12 border-t border-[#e5e5e5]/60">
              <AnimatedSection className="w-full">
                <div className="container mx-auto px-4 md:px-6 max-w-7xl">
                  <AnimatedSection className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2 max-w-3xl mx-auto">
                      <Badge variant="outline" className="border-[#a9927d] text-[#5e503f]">
                        <Star className="mr-2 inline-block" />
                        Testimonials
                      </Badge>
                      <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-[#0a0908]">
                        What Our Clients Say
                      </h2>
                      <p className="text-[#22333b] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                        Don't just take our word for it. Here's what our clients have to say about working with us.
                      </p>
                    </div>
                  </AnimatedSection>
                  <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-3 lg:gap-12">
                    {[
                      {
                        quote: "Working with nouvo was a game-changer for our cleaning business. Our new website has helped us increase bookings by 200% and expand our service area.",
                        author: "Ini & Aiden",
                        role: "CEOs, Blast and Beyond"
                      },
                      {
                        quote: "The team at nouvo transformed my resume into a stunning portfolio that helped me land my dream job.",
                        author: "Michael Chen",
                        role: "Software Engineer"
                      },
                      {
                        quote: "Professional, responsive, and results-driven. I couldn't be happier with the website they created for us.",
                        author: "Emily Rodriguez",
                        role: "Marketing Director"
                      }
                    ].map((testimonial, index) => (
                      <AnimatedSection key={index} delay={index * 0.2}>
                        <Card className="group hover:shadow-lg transition-all duration-300 border-[#a9927d]/20 hover:border-[#a9927d]/40 h-full">
                          <CardHeader>
                            <div className="flex items-center gap-2">
                              <Star className="h-5 w-5 text-[#a9927d]" />
                              <Star className="h-5 w-5 text-[#a9927d]" />
                              <Star className="h-5 w-5 text-[#a9927d]" />
                              <Star className="h-5 w-5 text-[#a9927d]" />
                              <Star className="h-5 w-5 text-[#a9927d]" />
                            </div>
                            <CardDescription className="text-[#22333b]">
                              "{testimonial.quote}"
                            </CardDescription>
                          </CardHeader>
                          <CardContent>
                            <div className="space-y-1">
                              <p className="font-medium text-[#0a0908]">{testimonial.author}</p>
                              <p className="text-sm text-[#5e503f]">{testimonial.role}</p>
                            </div>
                          </CardContent>
                        </Card>
                      </AnimatedSection>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            </ScrollFade>

            {/* Contact Section */}
            <ParallaxSection className="w-full py-12 bg-[#f2f4f3] border-t border-[#e5e5e5]/60">
              <AnimatedSection className="w-full">
                <div id="contact" className="container mx-auto px-4 md:px-6 max-w-7xl">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-white/90 rounded-xl shadow-lg p-8 flex flex-col md:flex-row gap-8 items-start justify-between">
                      <div className="flex-1 w-full">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#0a0908] mb-2 text-center md:text-left">Get in Touch</h2>
                        <p className="mb-6 text-center md:text-left text-[#22333b]">Ready to start your project? Contact us today for a free consultation.</p>
                        <ContactForm />
                      </div>
                      <div className="w-full md:w-64 flex flex-col items-center md:items-start gap-4 mt-8 md:mt-0">
                        <h3 className="text-xl font-semibold text-[#0a0908] mb-2">Contact Information</h3>
                        <div className="space-y-3 w-full">
                          <div className="flex items-center gap-2">
                            <FaUser className="text-[#a9927d]" />
                            <span className="text-[#22333b]">Manuel David</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <FaPhone className="text-[#a9927d]" />
                            <a href="tel:4792508678" className="text-[#22333b] hover:text-[#a9927d] transition-colors">
                              (479) 250-8678
                            </a>
                          </div>
                          <div className="flex items-center gap-2">
                            <FaEnvelope className="text-[#a9927d]" />
                            <a href="mailto:manuel@nouvo.dev" className="text-[#22333b] hover:text-[#a9927d] transition-colors">
                              manuel@nouvo.dev
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white/90 rounded-xl shadow-lg overflow-hidden">
                      <CalendlyWidget />
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </ParallaxSection>

            {/* About Section */}
            <ParallaxSection className="relative z-0 w-full py-12 bg-white border-t border-[#e5e5e5]/60">
              <AnimatedSection className="w-full">
                <div id="about" className="container mx-auto px-4 md:px-6 max-w-4xl bg-white/80 rounded-xl shadow-sm py-10">
                  <AnimatedSection className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
                    <div className="space-y-2 max-w-3xl mx-auto">
                      <Badge variant="outline" className="border-[#a9927d] text-[#5e503f]">
                        <FaUser className="mr-2 inline-block" />
                        About Nouvo
                      </Badge>
                      <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-[#0a0908]">
                        Where Your Future Meets Design
                      </h2>
                    </div>
                  </AnimatedSection>
                  <div className="space-y-8">
                    <AnimatedSection>
                      <div className="prose prose-lg max-w-none mx-auto">
                        <p className="text-[#22333b] leading-relaxed">
                          Hi, I'm Manuel David, a sophomore at Arizona State University majoring in Computer Information Systems. I launched Nouvo with one goal: to help people build powerful, standout digital identities through innovative and personalized websites.
                        </p>
                        <p className="text-[#22333b] leading-relaxed">
                          At Nouvo, we specialize in building sleek, high-quality websites for students, athletes, creatives, entrepreneurs, and businesses alike. Whether you're trying to land your dream internship, impress recruiters, promote your brand, or showcase your talents, we're here to make it happen—fast, clean, and effectively.
                        </p>
                        <p className="text-[#22333b] leading-relaxed">
                          We believe that everyone deserves a digital presence that reflects their value. That's why we create interactive resume websites, professional portfolios, and dynamic business sites that elevate your personal or professional brand. These aren't just websites—they're tools designed to open doors.
                        </p>
                      </div>
                    </AnimatedSection>
                    <AnimatedSection>
                      <div className="bg-[#f2f4f3] p-6 rounded-lg mx-auto max-w-3xl">
                        <h3 className="text-2xl font-semibold text-[#0a0908] mb-4">Why Resume Websites?</h3>
                        <div className="prose prose-lg max-w-none">
                          <p className="text-[#22333b] leading-relaxed">
                            Today's job market is more competitive than ever. Traditional PDF resumes often get filtered out by automated tracking systems (ATS), which scan for exact keywords. Resume websites break through that wall. They offer a visual and interactive alternative that stands out—literally.
                          </p>
                          <p className="text-[#22333b] leading-relaxed">
                            Recruiters are more likely to remember you when they see your face, your story, and your work, all laid out beautifully on a custom site. Employers take notice. Interviews get booked. Opportunities grow.
                          </p>
                          <p className="text-[#22333b] leading-relaxed">
                            Plus, some companies now allow applicants to submit a CSV file and a website link. That second option gives you a serious edge—it ensures a human reviews your application and shows that you're ahead of the curve.
                          </p>
                        </div>
                      </div>
                    </AnimatedSection>
                    <AnimatedSection>
                      <div className="grid gap-6 md:grid-cols-2 mx-auto max-w-4xl">
                        <Card className="border-[#a9927d]/20 hover:border-[#a9927d]/40 transition-all duration-300">
                          <CardHeader>
                            <CardTitle className="text-[#0a0908]">What We Do at Nouvo</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <ul className="space-y-3">
                              <li className="flex items-start gap-2">
                                <BsCheck2Circle className="h-5 w-5 text-[#a9927d] mt-1" />
                                <span className="text-[#22333b]">Resume Websites that are visually stunning, fully clickable, and uniquely personalized.</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <BsCheck2Circle className="h-5 w-5 text-[#a9927d] mt-1" />
                                <span className="text-[#22333b]">Professional Resume Creation that passes ATS filters and gets you noticed.</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <BsCheck2Circle className="h-5 w-5 text-[#a9927d] mt-1" />
                                <span className="text-[#22333b]">Portfolio Sites for athletes, creatives, and professionals—including media-rich pages with photos and videos.</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <BsCheck2Circle className="h-5 w-5 text-[#a9927d] mt-1" />
                                <span className="text-[#22333b]">Business Websites designed to drive traffic and communicate brand identity clearly and creatively.</span>
                              </li>
                            </ul>
                          </CardContent>
                        </Card>
                        <Card className="border-[#a9927d]/20 hover:border-[#a9927d]/40 transition-all duration-300">
                          <CardHeader>
                            <CardTitle className="text-[#0a0908]">Our Process</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p className="text-[#22333b] leading-relaxed">
                              You'll be involved every step of the way—from concept to mockups to deployment. Whether you already have a resume or need help building one from scratch, we'll turn it into something that represents you better than any one-page PDF ever could.
                            </p>
                            <div className="mt-4">
                              <p className="text-[#22333b] font-semibold">We're here to help you stand out.</p>
                              <p className="text-[#22333b] font-semibold">We're Nouvo—where your future meets design.</p>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </AnimatedSection>
                  </div>
                </div>
              </AnimatedSection>
            </ParallaxSection>

            {/* Tagline Section */}
            <ParallaxSection className="relative z-0 w-full py-12 bg-[#f2f4f3] border-t border-[#e5e5e5]/60 flex flex-col items-center justify-center text-center">
              <AnimatedSection className="w-full">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-[#0a0908]">
                  nouvo.dev
                </h2>
                <p className="text-[#22333b] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mt-4">
                  Let's create something extraordinary together
                </p>
              </AnimatedSection>
            </ParallaxSection>

            {/* Footer */}
            <ScrollFade className="flex flex-col gap-2 sm:flex-row py-10 w-full shrink-0 items-center px-4 md:px-6 border-t border-[#22333b]/20 bg-[#f2f4f3] mt-0">
              <div className="w-full max-w-7xl mx-auto flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <AnimatedElement className="w-6 h-6 bg-[#22333b] rounded flex items-center justify-center">
                    <span className="text-[#f2f4f3] font-bold text-xs">N</span>
                  </AnimatedElement>
                  <span className="text-sm font-semibold text-[#0a0908]">nouvo</span>
                </div>
                <p className="text-xs text-[#5e503f]">© {new Date().getFullYear()} Nouvo. All rights reserved.</p>
                <nav className="flex gap-4 sm:gap-6">
                  {[
                    { name: "Privacy Policy", href: "/privacy" },
                    { name: "Terms of Service", href: "/terms" },
                    { name: "Contact", href: "#contact" }
                  ].map((item) => (
                    <AnimatedElement key={item.name}>
                      <Link 
                        href={item.href} 
                        className="text-xs hover:underline underline-offset-4 text-[#5e503f]"
                        scroll={false}
                      >
                        {item.name}
                      </Link>
                    </AnimatedElement>
                  ))}
                </nav>
              </div>
            </ScrollFade>
          </main>
        </div>
      </SmoothScroll>
    </>
  )
}
