"use client";

import React, { useState } from 'react';
import { Play, ShoppingCart, Menu, X, ArrowRight, Check, Star, Send } from 'lucide-react';

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    if (formData.name && formData.email && formData.message) {
      setFormSubmitted(true);
      setTimeout(() => setFormSubmitted(false), 5000);
      setFormData({ name: '', email: '', message: '' });
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-lg z-50 border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold text-lg">B</span>
              </div>
              <div>
                <span className="text-2xl font-light tracking-wide">THE BENDER</span>
                <div className="text-xs text-neutral-400 font-light tracking-widest">BY COATS MUSIC</div>
              </div>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('features')} className="text-neutral-300 hover:text-white transition-colors text-sm font-medium">FEATURES</button>
              <button onClick={() => scrollToSection('demo')} className="text-neutral-300 hover:text-white transition-colors text-sm font-medium">DEMO</button>
              <button onClick={() => scrollToSection('specs')} className="text-neutral-300 hover:text-white transition-colors text-sm font-medium">SPECS</button>
              <button onClick={() => scrollToSection('contact')} className="text-neutral-300 hover:text-white transition-colors text-sm font-medium">CONTACT</button>
              <a href="#" className="bg-white text-black px-6 py-3 rounded-sm hover:bg-neutral-200 transition-colors font-medium text-sm tracking-wide">
                ORDER NOW
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black border-t border-neutral-800">
            <div className="px-6 py-6 space-y-4">
              <button onClick={() => scrollToSection('features')} className="block w-full text-left text-neutral-300 hover:text-white font-medium">FEATURES</button>
              <button onClick={() => scrollToSection('demo')} className="block w-full text-left text-neutral-300 hover:text-white font-medium">DEMO</button>
              <button onClick={() => scrollToSection('specs')} className="block w-full text-left text-neutral-300 hover:text-white font-medium">SPECS</button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left text-neutral-300 hover:text-white font-medium">CONTACT</button>
              <a href="#" className="bg-white text-black px-6 py-3 rounded-sm hover:bg-neutral-200 transition-colors font-medium text-sm tracking-wide inline-block">
                ORDER NOW
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center px-4 py-2 bg-neutral-900 rounded-full text-sm text-neutral-300">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                  Now Available
                </div>
                <h1 className="text-5xl lg:text-7xl font-light leading-tight tracking-tight">
                  Redefine Your 
                  <span className="block text-transparent bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text">
                    Sound
                  </span>
                </h1>
                <p className="text-xl text-neutral-400 leading-relaxed max-w-lg">
                  The world's first non-invasive multi-string guitar bender. 
                  Engineered for professionals who demand perfection.
                </p>
              </div>
              
              <div className="flex items-center space-x-8">
                <div className="space-y-1">
                  <div className="text-4xl font-light">$490</div>
                  <div className="text-sm text-neutral-500 uppercase tracking-wide">Professional Edition</div>
                </div>
                <a href="#" className="group bg-white text-black px-8 py-4 rounded-sm hover:bg-neutral-200 transition-all flex items-center font-medium">
                  ORDER NOW
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
              
              <div className="flex items-center space-x-6 pt-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-500 text-amber-500" />
                  ))}
                  <span className="ml-3 text-neutral-400 text-sm">5.0 • 127 reviews</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-2xl p-12 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-24 h-24 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full mx-auto flex items-center justify-center">
                    <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
                      <div className="w-6 h-6 bg-white rounded-full"></div>
                    </div>
                  </div>
                  <div className="text-neutral-500 text-sm">Product visualization</div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-600 rounded-full"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-400 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 px-6 lg:px-8 bg-neutral-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-light mb-6">Engineered for Excellence</h2>
            <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
              Every component designed and tested to meet the exacting standards of professional musicians
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="group p-8 rounded-lg bg-neutral-900/50 hover:bg-neutral-900 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg flex items-center justify-center mb-6">
                <div className="w-6 h-6 border-2 border-white rounded-sm"></div>
              </div>
              <h3 className="text-xl font-medium mb-3">Non-Invasive Installation</h3>
              <p className="text-neutral-400 leading-relaxed">
                Zero modifications to your instrument. Install in minutes with precision-engineered clamps that protect your guitar's finish.
              </p>
            </div>
            
            <div className="group p-8 rounded-lg bg-neutral-900/50 hover:bg-neutral-900 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg flex items-center justify-center mb-6">
                <div className="flex space-x-1">
                  <div className="w-1 h-6 bg-white rounded-full"></div>
                  <div className="w-1 h-6 bg-white rounded-full"></div>
                  <div className="w-1 h-6 bg-white rounded-full"></div>
                </div>
              </div>
              <h3 className="text-xl font-medium mb-3">Multi-String Capability</h3>
              <p className="text-neutral-400 leading-relaxed">
                Simultaneous bending of multiple strings opens new creative possibilities previously impossible with traditional techniques.
              </p>
            </div>
            
            <div className="group p-8 rounded-lg bg-neutral-900/50 hover:bg-neutral-900 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg flex items-center justify-center mb-6">
                <div className="w-6 h-6 border-2 border-white rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
              </div>
              <h3 className="text-xl font-medium mb-3">Professional Durability</h3>
              <p className="text-neutral-400 leading-relaxed">
                Aerospace-grade aluminum construction tested to withstand the rigors of professional touring and studio use.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section id="demo" className="py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-light mb-6">See It In Action</h2>
            <p className="text-xl text-neutral-400">Watch professionals demonstrate The Bender's capabilities</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="group relative overflow-hidden rounded-lg bg-neutral-900 aspect-video cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-blue-400/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="flex items-center justify-center h-full">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                    <Play className="h-6 w-6 text-black ml-1" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium">Installation Guide</h3>
                    <p className="text-sm text-neutral-400">Step-by-step professional installation</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-lg bg-neutral-900 aspect-video cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-blue-400/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="flex items-center justify-center h-full">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                    <Play className="h-6 w-6 text-black ml-1" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium">Performance Demo</h3>
                    <p className="text-sm text-neutral-400">Professional musicians showcase advanced techniques</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specifications Section */}
      <section id="specs" className="py-24 px-6 lg:px-8 bg-neutral-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-light mb-6">Technical Specifications</h2>
            <p className="text-xl text-neutral-400">Precision engineering meets uncompromising quality</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="border-b border-neutral-800 pb-6">
                  <h4 className="text-sm text-neutral-500 uppercase tracking-wide mb-2">Compatibility</h4>
                  <p className="text-lg">Universal fit for electric guitars</p>
                </div>
                <div className="border-b border-neutral-800 pb-6">
                  <h4 className="text-sm text-neutral-500 uppercase tracking-wide mb-2">Installation</h4>
                  <p className="text-lg">Tool-free setup in under 30 minutes</p>
                </div>
                <div className="border-b border-neutral-800 pb-6">
                  <h4 className="text-sm text-neutral-500 uppercase tracking-wide mb-2">Weight</h4>
                  <p className="text-lg">450g (0.99 lbs)</p>
                </div>
              </div>
              
              <div className="space-y-8">
                <div className="border-b border-neutral-800 pb-6">
                  <h4 className="text-sm text-neutral-500 uppercase tracking-wide mb-2">Construction</h4>
                  <p className="text-lg">CNC-machined aluminum alloy</p>
                </div>
                <div className="border-b border-neutral-800 pb-6">
                  <h4 className="text-sm text-neutral-500 uppercase tracking-wide mb-2">Bend Range</h4>
                  <p className="text-lg">Up to 2 full semitones</p>
                </div>
                <div className="border-b border-neutral-800 pb-6">
                  <h4 className="text-sm text-neutral-500 uppercase tracking-wide mb-2">Warranty</h4>
                  <p className="text-lg">2-year comprehensive coverage</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-light mb-6">Get In Touch</h2>
            <p className="text-xl text-neutral-400">Questions? We're here to help</p>
          </div>
          
          <div className="max-w-2xl mx-auto">
            {formSubmitted && (
              <div className="mb-8 p-4 bg-green-900/20 border border-green-800 rounded-lg">
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-green-400 mr-2" />
                  <span className="text-green-400">Message sent successfully. We'll respond within 24 hours.</span>
                </div>
              </div>
            )}
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-neutral-300 mb-3">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-4 bg-neutral-900 border border-neutral-800 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-neutral-300 mb-3">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-4 bg-neutral-900 border border-neutral-800 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-neutral-300 mb-3">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={6}
                  className="w-full px-4 py-4 bg-neutral-900 border border-neutral-800 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              
              <button
                onClick={handleSubmit}
                className="w-full bg-white text-black px-8 py-4 rounded-lg hover:bg-neutral-200 transition-all font-medium flex items-center justify-center group"
              >
                <Send className="h-5 w-5 mr-2 group-hover:translate-x-1 transition-transform" />
                Send Message
              </button>
            </div>
            
            <div className="mt-16 text-center space-y-4">
              <div className="text-neutral-500 text-sm uppercase tracking-wide">Direct Contact</div>
              <div className="space-y-2">
                <p className="text-lg">info@coatsmusic.com</p>
                <p className="text-lg">+1 (555) 123-4567</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 lg:px-8 border-t border-neutral-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold text-sm">B</span>
              </div>
              <div>
                <span className="text-lg font-light">THE BENDER</span>
                <div className="text-xs text-neutral-500">BY COATS MUSIC</div>
              </div>
            </div>
            
            <div className="flex space-x-8">
              <a href="#" className="text-neutral-400 hover:text-white transition-colors text-sm">Privacy Policy</a>
              <a href="#" className="text-neutral-400 hover:text-white transition-colors text-sm">Terms of Service</a>
              <a href="#" className="text-neutral-400 hover:text-white transition-colors text-sm">Support</a>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-neutral-800 text-center">
            <p className="text-neutral-500 text-sm">
              © 2024 Coats Music. All rights reserved. The Bender™ is a registered trademark.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;