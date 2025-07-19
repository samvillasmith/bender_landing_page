"use client";

import React, { useState } from 'react';
import {
  Play,
  Menu,
  X,
  ArrowRight,
  Check,
  Star,
  Send,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import Image from 'next/image';

/* ────────────────────────────────
   Carousel component
   ──────────────────────────────── */
const carouselImages = [
  '/images/gallery1.jpg',
  '/images/gallery2.jpg',
  '/images/gallery3.jpg',
];

const Carousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () =>
    setCurrentIndex((currentIndex - 1 + carouselImages.length) % carouselImages.length);
  const nextSlide = () =>
    setCurrentIndex((currentIndex + 1) % carouselImages.length);

  return (
    <div className="relative w-full aspect-square overflow-hidden rounded-2xl">
      <Image
        src={carouselImages[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover transition-all duration-700 ease-in-out"
        priority
      />

      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/60 p-2 rounded-full"
      >
        <ChevronLeft className="text-white w-5 h-5" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/60 p-2 rounded-full"
      >
        <ChevronRight className="text-white w-5 h-5" />
      </button>
    </div>
  );
};

/* ────────────────────────────────
   Home page
   ──────────────────────────────── */
const Home: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  type FormData = { name: string; email: string; message: string };
  const [formData, setFormData] = useState<FormData>({ name: '', email: '', message: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = () => {
    if (formData.name && formData.email && formData.message) {
      setFormSubmitted(true);
      setTimeout(() => setFormSubmitted(false), 5000);
      setFormData({ name: '', email: '', message: '' });
    }
  };

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* ───────────── Navigation ───────────── */}
      <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-lg z-50 border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <div className="w-10 h-10 mr-3">
                <Image
                  src="/icon-coats.png"
                  alt="Coats Music Logo"
                  width={40}
                  height={40}
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="text-2xl font-light tracking-wide">THE BENDER</span>
                <div className="text-xs text-neutral-400 font-light tracking-widest">
                  BY COATS MUSIC
                </div>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {['features', 'demo', 'specs', 'contact'].map((link) => (
                <button
                  key={link}
                  onClick={() => scrollToSection(link)}
                  className="text-neutral-300 hover:text-white transition-colors text-sm font-medium uppercase"
                >
                  {link}
                </button>
              ))}
              <a
                href="#"
                className="bg-white text-black px-6 py-3 rounded-sm hover:bg-neutral-200 transition-colors font-medium text-sm tracking-wide"
              >
                ORDER NOW
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black border-t border-neutral-800">
            <div className="px-6 py-6 space-y-4">
              {['features', 'demo', 'specs', 'contact'].map((link) => (
                <button
                  key={link}
                  onClick={() => scrollToSection(link)}
                  className="block w-full text-left text-neutral-300 hover:text-white font-medium uppercase"
                >
                  {link}
                </button>
              ))}
              <a
                href="#"
                className="bg-white text-black px-6 py-3 rounded-sm hover:bg-neutral-200 transition-colors font-medium text-sm tracking-wide inline-block"
              >
                ORDER NOW
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* ───────────── Hero Section ───────────── */}
      <section className="pt-32 pb-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text block */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center px-4 py-2 bg-neutral-900 rounded-full text-sm text-neutral-300">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-2" />
                  Now Available
                </div>

                <h1 className="text-5xl lg:text-7xl font-light leading-tight tracking-tight">
                  Redefine Your
                  <span className="block text-transparent bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text">
                    Sound
                  </span>
                </h1>

                <p className="text-xl text-neutral-400 leading-relaxed max-w-lg">
                  The world&apos;s first non-invasive multi-string guitar bender.&nbsp;
                  Engineered for professionals who demand perfection.
                </p>
              </div>

              <div className="flex items-center space-x-8">
                <div className="space-y-1">
                  <div className="text-4xl font-light">$490</div>
                  <div className="text-sm text-neutral-500 uppercase tracking-wide">
                    Professional Edition
                  </div>
                </div>
                <a
                  href="#"
                  className="group bg-white text-black px-8 py-4 rounded-sm hover:bg-neutral-200 transition-all flex items-center font-medium"
                >
                  ORDER NOW
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

              <div className="flex items-center space-x-6 pt-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-500 text-amber-500" />
                  ))}
                  <span className="ml-3 text-neutral-400 text-sm">
                    5.0 • 127 reviews
                  </span>
                </div>
              </div>
            </div>

            {/* Carousel replaces static visualization */}
            <Carousel />
          </div>
        </div>
      </section>

      {/* ───────────── What Makes It Different ───────────── */}
      <section className="py-24 px-6 lg:px-8 bg-neutral-950">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-light mb-8">
            What Makes The Bender Different
          </h2>
          <p className="text-xl text-neutral-300 leading-relaxed mb-8">
            Traditional string bending techniques limit musicians to single‑string
            manipulation, often requiring awkward hand positions and compromising other
            fretwork. The Bender revolutionizes this approach through its patented
            multi‑string mechanism that allows simultaneous bending of up to three
            strings with precise control.
          </p>
          <p className="text-lg text-neutral-400 leading-relaxed">
            Unlike invasive modifications or bulky attachments, our aerospace‑grade
            aluminum construction integrates seamlessly with your instrument&apos;s natural
            resonance. The result? Unprecedented creative possibilities without
            sacrificing tone, comfort, or the integrity of your guitar.
          </p>
        </div>
      </section>

      {/* ───────────── Features Section ───────────── */}
      <section id="features" className="py-24 px-6 lg:px-8 bg-neutral-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-light mb-6">
              Engineered for Excellence
            </h2>
            <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
              Every component designed and tested to meet the exacting standards of
              professional musicians
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Feature cards */}
            <div className="group p-8 rounded-lg bg-neutral-900/50 hover:bg-neutral-900 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg flex items-center justify-center mb-6">
                <div className="w-6 h-6 border-2 border-white rounded-sm" />
              </div>
              <h3 className="text-xl font-medium mb-3">Non-Invasive Installation</h3>
              <p className="text-neutral-400 leading-relaxed">
                Zero modifications to your instrument. Install in minutes with
                precision‑engineered clamps that protect your guitar&apos;s finish.
              </p>
            </div>

            <div className="group p-8 rounded-lg bg-neutral-900/50 hover:bg-neutral-900 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg flex items-center justify-center mb-6">
                <div className="flex space-x-1">
                  <div className="w-1 h-6 bg-white rounded-full" />
                  <div className="w-1 h-6 bg-white rounded-full" />
                  <div className="w-1 h-6 bg-white rounded-full" />
                </div>
              </div>
              <h3 className="text-xl font-medium mb-3">Multi-String Capability</h3>
              <p className="text-neutral-400 leading-relaxed">
                Simultaneous bending of multiple strings opens new creative possibilities
                previously impossible with traditional techniques.
              </p>
            </div>

            <div className="group p-8 rounded-lg bg-neutral-900/50 hover:bg-neutral-900 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg flex items-center justify-center mb-6">
                <div className="w-6 h-6 border-2 border-white rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full" />
                </div>
              </div>
              <h3 className="text-xl font-medium mb-3">Professional Durability</h3>
              <p className="text-neutral-400 leading-relaxed">
                Aerospace‑grade aluminum construction tested to withstand the rigors of
                professional touring and studio use.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────── Demo Section ───────────── */}
      <section id="demo" className="py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-light mb-6">See It In Action</h2>
            <p className="text-xl text-neutral-400">
              Watch professionals demonstrate The Bender&apos;s capabilities
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Video placeholder cards */}
            {[
              { title: 'Installation Guide', subtitle: 'Step-by-step professional installation' },
              { title: 'Performance Demo', subtitle: 'Professional musicians showcase advanced techniques' },
            ].map(({ title, subtitle }) => (
              <div
                key={title}
                className="group relative overflow-hidden rounded-lg bg-neutral-900 aspect-video cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-blue-400/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="flex items-center justify-center h-full">
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                      <Play className="h-6 w-6 text-black ml-1" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg font-medium">{title}</h3>
                      <p className="text-sm text-neutral-400">{subtitle}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────── Specifications Section ───────────── */}
      <section id="specs" className="py-24 px-6 lg:px-8 bg-neutral-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-light mb-6">
              Technical Specifications
            </h2>
            <p className="text-xl text-neutral-400">
              Precision engineering meets uncompromising quality
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Column 1 */}
              <div className="space-y-8">
                {[
                  { label: 'Compatibility', value: 'Universal fit for electric guitars' },
                  { label: 'Installation', value: 'Tool‑free setup in under 30 minutes' },
                  { label: 'Weight', value: '450 g (0.99 lbs)' },
                ].map((item) => (
                  <div key={item.label} className="border-b border-neutral-800 pb-6">
                    <h4 className="text-sm text-neutral-500 uppercase tracking-wide mb-2">
                      {item.label}
                    </h4>
                    <p className="text-lg">{item.value}</p>
                  </div>
                ))}
              </div>

              {/* Column 2 */}
              <div className="space-y-8">
                {[
                  { label: 'Construction', value: 'CNC‑machined aluminum alloy' },
                  { label: 'Bend Range', value: 'Up to 2 full semitones' },
                  { label: 'Warranty', value: '2‑year comprehensive coverage' },
                ].map((item) => (
                  <div key={item.label} className="border-b border-neutral-800 pb-6">
                    <h4 className="text-sm text-neutral-500 uppercase tracking-wide mb-2">
                      {item.label}
                    </h4>
                    <p className="text-lg">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────── Contact Section ───────────── */}
      <section id="contact" className="py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-light mb-6">Get In Touch</h2>
            <p className="text-xl text-neutral-400">Questions? We&apos;re here to help</p>
          </div>

          <div className="max-w-2xl mx-auto">
            {formSubmitted && (
              <div className="mb-8 p-4 bg-green-900/20 border border-green-800 rounded-lg">
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-green-400 mr-2" />
                  <span className="text-green-400">
                    Message sent successfully. We&apos;ll respond within 24&nbsp;hours.
                  </span>
                </div>
              </div>
            )}

            {/* Form */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSubmit();
              }}
              className="space-y-6"
            >
              {([
                { label: 'Name', type: 'text', name: 'name', placeholder: 'Your name' },
                { label: 'Email', type: 'email', name: 'email', placeholder: 'your@email.com' },
              ] as const).map((field) => (
                <div key={field.name}>
                  <label className="block text-sm font-medium text-neutral-300 mb-3">
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    name={field.name}
                    value={formData[field.name]}
                    onChange={handleInputChange}
                    placeholder={field.placeholder}
                    className="w-full px-4 py-4 bg-neutral-900 border border-neutral-800 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  />
                </div>
              ))}

              <div>
                <label className="block text-sm font-medium text-neutral-300 mb-3">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={6}
                  placeholder="How can we help you?"
                  className="w-full px-4 py-4 bg-neutral-900 border border-neutral-800 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-white text-black px-8 py-4 rounded-lg hover:bg-neutral-200 transition-all font-medium flex items-center justify-center group"
              >
                <Send className="h-5 w-5 mr-2 group-hover:translate-x-1 transition-transform" />
                Send Message
              </button>
            </form>

            {/* Direct contact */}
            <div className="mt-16 text-center space-y-4">
              <div className="text-neutral-500 text-sm uppercase tracking-wide">
                Direct Contact
              </div>
              <div className="space-y-2">
                <p className="text-lg">info@coatsmusic.com</p>
                <p className="text-lg">+1&nbsp;(555)&nbsp;123‑4567</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────── Footer ───────────── */}
      <footer className="py-12 px-6 lg:px-8 border-t border-neutral-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
            <div className="flex items-center">
              <div className="w-8 h-8 mr-3">
                <Image
                  src="/icon-coats.png"
                  alt="Coats Music Logo"
                  width={32}
                  height={32}
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="text-lg font-light">THE BENDER</span>
                <div className="text-xs text-neutral-500">BY COATS MUSIC</div>
              </div>
            </div>

            <div className="flex space-x-8">
              {['Privacy Policy', 'Terms of Service', 'Support'].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-neutral-400 hover:text-white transition-colors text-sm"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-neutral-800 text-center">
            <p className="text-neutral-500 text-sm">
              © 2025 Coats Music. All rights reserved. The Bender™ is a registered
              trademark.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;