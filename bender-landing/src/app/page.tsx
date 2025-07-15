"use client";

import React, { useState } from 'react';
import { Play, ShoppingCart, Menu, X, Guitar, Zap, Shield, Star, Send } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';

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
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-sm z-50 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Guitar className="h-8 w-8 text-blue-500 mr-2" />
              <span className="text-xl font-bold">The Bender</span>
              <span className="text-sm text-gray-400 ml-2">by Coats Music</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('features')} className="hover:text-blue-400 transition">Features</button>
              <button onClick={() => scrollToSection('demo')} className="hover:text-blue-400 transition">Demo</button>
              <button onClick={() => scrollToSection('specs')} className="hover:text-blue-400 transition">Specs</button>
              <button onClick={() => scrollToSection('contact')} className="hover:text-blue-400 transition">Contact</button>
              <a href="#" className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 transition flex items-center">
                <ShoppingCart className="h-4 w-4 mr-2" />
                Buy Now
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
          <div className="md:hidden bg-gray-800 border-t border-gray-700">
            <div className="px-4 py-4 space-y-3">
              <button onClick={() => scrollToSection('features')} className="block w-full text-left hover:text-blue-400">Features</button>
              <button onClick={() => scrollToSection('demo')} className="block w-full text-left hover:text-blue-400">Demo</button>
              <button onClick={() => scrollToSection('specs')} className="block w-full text-left hover:text-blue-400">Specs</button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left hover:text-blue-400">Contact</button>
              <a href="#" className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 transition flex items-center justify-center">
                <ShoppingCart className="h-4 w-4 mr-2" />
                Buy Now
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Revolutionary Multi-String 
                <span className="text-blue-500"> Guitar Bender</span>
              </h1>
              <p className="text-xl text-gray-300">
                Transform your sound with The Bender&#39;s innovative non-invasive design. 
                Professional-grade quality meets unmatched versatility.
              </p>
              <div className="flex items-center space-x-6">
                <div>
                  <p className="text-3xl font-bold text-blue-500">$490</p>
                  <p className="text-sm text-gray-400">Professional Edition</p>
                </div>
                <a href="#" className="bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-700 transition flex items-center text-lg">
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  Order Now
                </a>
              </div>
              <div className="flex space-x-4 pt-4">
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-yellow-500 fill-current" />
                  <Star className="h-5 w-5 text-yellow-500 fill-current" />
                  <Star className="h-5 w-5 text-yellow-500 fill-current" />
                  <Star className="h-5 w-5 text-yellow-500 fill-current" />
                  <Star className="h-5 w-5 text-yellow-500 fill-current" />
                  <span className="ml-2 text-gray-300">5.0 (127 reviews)</span>
                </div>
              </div>
            </div>
            <div className="bg-gray-700 rounded-lg h-96 flex items-center justify-center">
              <div className="text-center">
                <Guitar className="h-24 w-24 mx-auto mb-4 text-gray-500" />
                <p className="text-gray-400">Product Image Placeholder</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Choose The Bender?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-700/50 p-6 rounded-lg">
              <Zap className="h-12 w-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Non-Invasive Installation</h3>
              <p className="text-gray-300">No drilling or permanent modifications required. Install in minutes, not hours.</p>
            </div>
            <div className="bg-gray-700/50 p-6 rounded-lg">
              <Guitar className="h-12 w-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Multi-String Capability</h3>
              <p className="text-gray-300">Bend multiple strings simultaneously for unprecedented creative possibilities.</p>
            </div>
            <div className="bg-gray-700/50 p-6 rounded-lg">
              <Shield className="h-12 w-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Professional Durability</h3>
              <p className="text-gray-300">Tour-ready construction built to withstand the demands of professional musicians.</p>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mt-8">
            <div className="bg-gray-700/50 p-6 rounded-lg">
              <div className="h-12 w-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🎸</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Integrated Stand</h3>
              <p className="text-gray-300">Built-in guitar stand functionality for added convenience during practice and performance.</p>
            </div>
            <div className="bg-gray-700/50 p-6 rounded-lg">
              <div className="h-12 w-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Smooth Operation</h3>
              <p className="text-gray-300">Precision-engineered mechanism ensures consistent, reliable bending action every time.</p>
            </div>
            <div className="bg-gray-700/50 p-6 rounded-lg">
              <div className="h-12 w-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Universal Fit</h3>
              <p className="text-gray-300">Compatible with most electric guitar models without the need for custom modifications.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section id="demo" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">See It In Action</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-700 rounded-lg h-64 flex items-center justify-center cursor-pointer hover:bg-gray-600 transition group">
              <div className="text-center">
                <div className="relative">
                  <Play className="h-16 w-16 mx-auto mb-4 text-gray-400 group-hover:text-blue-400 transition" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="h-20 w-20 bg-blue-500/20 rounded-full animate-ping"></div>
                  </div>
                </div>
                <p className="text-gray-300 font-medium">Installation Tutorial</p>
                <p className="text-sm text-gray-500 mt-1">Learn how to install in under 30 minutes</p>
              </div>
            </div>
            <div className="bg-gray-700 rounded-lg h-64 flex items-center justify-center cursor-pointer hover:bg-gray-600 transition group">
              <div className="text-center">
                <div className="relative">
                  <Play className="h-16 w-16 mx-auto mb-4 text-gray-400 group-hover:text-blue-400 transition" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="h-20 w-20 bg-blue-500/20 rounded-full animate-ping"></div>
                  </div>
                </div>
                <p className="text-gray-300 font-medium">Performance Demo</p>
                <p className="text-sm text-gray-500 mt-1">Watch professional musicians showcase The Bender</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specifications Section */}
      <section id="specs" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Technical Specifications</h2>
          <div className="max-w-3xl mx-auto">
            <div className="bg-gray-700/50 rounded-lg p-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="border-b border-gray-600 pb-4">
                    <h4 className="text-sm text-gray-400 uppercase mb-1">Compatibility</h4>
                    <p className="text-lg">Universal fit for most electric guitars</p>
                  </div>
                  <div className="border-b border-gray-600 pb-4">
                    <h4 className="text-sm text-gray-400 uppercase mb-1">Installation Time</h4>
                    <p className="text-lg">Under 30 minutes</p>
                  </div>
                  <div className="border-b border-gray-600 pb-4">
                    <h4 className="text-sm text-gray-400 uppercase mb-1">Weight</h4>
                    <p className="text-lg">Less than 1 lb (450g)</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="border-b border-gray-600 pb-4">
                    <h4 className="text-sm text-gray-400 uppercase mb-1">Materials</h4>
                    <p className="text-lg">Aircraft-grade aluminum</p>
                  </div>
                  <div className="border-b border-gray-600 pb-4">
                    <h4 className="text-sm text-gray-400 uppercase mb-1">Bend Range</h4>
                    <p className="text-lg">Up to 2 full steps</p>
                  </div>
                  <div className="border-b border-gray-600 pb-4">
                    <h4 className="text-sm text-gray-400 uppercase mb-1">Warranty</h4>
                    <p className="text-lg">2-year manufacturer warranty</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Product Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-gray-700 rounded-lg h-48 flex items-center justify-center hover:bg-gray-600 transition cursor-pointer">
              <p className="text-gray-400">Front View</p>
            </div>
            <div className="bg-gray-700 rounded-lg h-48 flex items-center justify-center hover:bg-gray-600 transition cursor-pointer">
              <p className="text-gray-400">Side View</p>
            </div>
            <div className="bg-gray-700 rounded-lg h-48 flex items-center justify-center hover:bg-gray-600 transition cursor-pointer">
              <p className="text-gray-400">In Action</p>
            </div>
            <div className="bg-gray-700 rounded-lg h-48 flex items-center justify-center hover:bg-gray-600 transition cursor-pointer">
              <p className="text-gray-400">Close-up</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Get In Touch</h2>
          <div className="max-w-2xl mx-auto">
            {formSubmitted && (
              <Alert className="mb-6 bg-green-600/20 border-green-600">
                <AlertDescription className="text-green-400">
                  Thank you for your message! We&#39;ll get back to you soon.
                </AlertDescription>
              </Alert>
            )}
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 bg-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 bg-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-2 bg-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  placeholder="Tell us about your needs..."
                ></textarea>
              </div>
              <button
                onClick={handleSubmit}
                className="w-full bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-700 transition text-lg font-medium flex items-center justify-center"
              >
                <Send className="h-5 w-5 mr-2" />
                Send Message
              </button>
            </div>
            <div className="mt-12 text-center">
              <p className="text-gray-400 mb-4">Or reach out directly:</p>
              <p className="text-lg">info@coatsmusic.com</p>
              <p className="text-lg">1-800-BENDER-1</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-gray-700">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <Guitar className="h-6 w-6 text-blue-500 mr-2" />
              <span className="text-gray-400">© 2024 Coats Music. All rights reserved.</span>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white transition">Support</a>
            </div>
          </div>
          <p className="text-center text-sm text-gray-500 mt-4">The Bender™ is a trademark of Coats Music</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;