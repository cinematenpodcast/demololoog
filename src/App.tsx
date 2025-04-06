import React, { useState } from 'react';
import { ChevronDown, AlignJustify as Spotify, Mic, Rss, PocketIcon, Instagram, Facebook, Youtube, MessageCircle } from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [state, handleSubmit] = useForm("mgvapvry");

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Hero Section */}
      <section className="relative h-[50vh] md:h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-[url('/images/de-mololoog-header.jpg')] bg-cover bg-center" />
        <a href="#about" className="absolute bottom-8 animate-bounce">
          <ChevronDown size={32} className="text-teal-400" />
        </a>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-teal-400">About De Mololoog</h2>
        <p className="text-lg text-gray-300 mb-12">
          De Mololoog is een unieke podcast die diep duikt in fascinerende verhalen en perspectieven. 
          Met onze karakteristieke stijl en tunnelvisie brengen we je verhalen die je nergens anders hoort.
        </p>
        
        {/* Platform Links */}
        <div className="max-w-lg mx-auto space-y-4 mb-20">
          {/* Main Spotify Button */}
          <a 
            href="#" 
            className="flex items-center justify-center gap-2 bg-[#1DB954] hover:bg-[#1ed760] px-4 py-2 rounded-lg transition-colors w-full group"
          >
            <Spotify className="w-5 h-5" />
            <span className="font-medium">Listen on Spotify</span>
          </a>

          {/* Other Platform Links */}
          <div className="grid grid-cols-3 gap-3">
            <a href="#" className="flex flex-col items-center gap-2 bg-slate-800 px-3 py-2 rounded-lg hover:bg-slate-700 transition-colors text-center group">
              <Mic className="w-4 h-4 text-teal-400 group-hover:text-teal-300" />
              <span className="text-xs">Apple Podcasts</span>
            </a>
            <a href="#" className="flex flex-col items-center gap-2 bg-slate-800 px-3 py-2 rounded-lg hover:bg-slate-700 transition-colors text-center group">
              <PocketIcon className="w-4 h-4 text-teal-400 group-hover:text-teal-300" />
              <span className="text-xs">Pocket Casts</span>
            </a>
            <a href="#" className="flex flex-col items-center gap-2 bg-slate-800 px-3 py-2 rounded-lg hover:bg-slate-700 transition-colors text-center group">
              <Rss className="w-4 h-4 text-teal-400 group-hover:text-teal-300" />
              <span className="text-xs">RSS Feed</span>
            </a>
          </div>
        </div>

        {/* Hosts and Cinematen Connection */}
        <div className="bg-slate-800/50 rounded-2xl p-8 mb-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1525493439964-a1e2b4c57e7f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Maarten & Yorrick"
                className="rounded-xl w-full h-full object-cover"
              />
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-teal-400 mb-3">Can't Get Enough of Maarten & Yorrick?</h3>
                <p className="text-gray-300">
                  Love our unique perspectives and engaging conversations? Then you'll be thrilled to know that we're also the hosts of the acclaimed Cinematen Podcast, where we dive deep into the world of film and TV!
                </p>
              </div>
              <a 
                href="https://cinematen.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-2 bg-teal-500/20 hover:bg-teal-500/30 px-6 py-3 rounded-lg transition-colors text-teal-400 hover:text-teal-300"
              >
                Discover Cinematen Podcast
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-teal-400">Get in Touch</h2>
          {state.succeeded ? (
            <p className="text-teal-400 text-center text-2xl font-bold">Bericht verstuurd!</p>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                />
                <ValidationError prefix="Message" field="message" errors={state.errors} />
              </div>
              {Array.isArray(state.errors) && state.errors.length > 0 && (
                <p className="text-red-500 text-center text-2xl font-bold">Het bericht is helaas niet verzonden, probeer later eens opnieuw.</p>
              )}
              <button
                type="submit"
                disabled={state.submitting}
                className="flex items-center justify-center gap-2 w-full bg-teal-500 hover:bg-teal-600 px-6 py-3 rounded-lg transition-colors"
              >
                <MessageCircle size={20} />
                Send Message
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 py-8 px-4">
        <div className="max-w-6xl mx-auto flex flex-col items-center gap-6">
          <div className="flex gap-6">
            <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
              <Instagram size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
              <Facebook size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
              <MessageCircle size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
              <Youtube size={24} />
            </a>
          </div>
          <p className="text-gray-400">&copy; {new Date().getFullYear()} De Mololoog. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;