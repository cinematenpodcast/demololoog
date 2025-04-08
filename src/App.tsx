import React, { useState } from 'react';
import { ChevronDown, Rss, Instagram, Facebook, YoutubeIcon, MessageCircle } from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [state, handleSubmit] = useForm("mgvapvry");

  return (
    <div className="min-h-screen bg-[#090C11] text-white">
      {/* Hero Section */}
      <section className="relative h-[50vh] md:h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-[url('/images/de-mololoog-header.webp')] bg-cover bg-center" />
        <div className="absolute bottom-0 h-32 w-full bg-gradient-to-b from-[#090C11]/0 to-[#090C11]" />
        <a href="#about" className="absolute bottom-8 hidden md:block animate-bounce">
          <ChevronDown size={32} className="text-[#59C1C7]" />
        </a>
      </section>

      {/* About Section */}
      <section id="about" className="pt-0 md:pt-20 pb-12 px-4 md:px-8 max-w-3xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold mb-8 text-[#59C1C7] text-center md:text-left">De leukste Vlaamse nabespreking podcast over De Mol van GoPlay!</h1>
        <p className="text-lg text-gray-300 mb-12 space-y-4 text-center md:text-left">
          <span className="block">Krijg je maar niet genoeg van De Mol 2024? Kan Café de Mol je honger naar theorieën en discussies maar niet stillen?</span>
          <span className="block">Ben je al fan van het programma vol saboteurs sinds de zender nog Vier of Play4 heette?</span>
          <span className="block font-semibold text-[#59C1C7]">Dan is De Mololoog dé podcast voor jou!</span>
          <span className="block">Maarten en Yorrick bespreken elke week de nieuwste aflevering van de vlaamse versie van De Mol.</span>
          <span className="block">Van de soms belachelijk ingewikkelde proeven tot hoe de productie (waarschijnlijk) alles controleert vanachter de schermen.</span>
          <span className="block">Wij hebben bijna altijd fout maar als we het dan eens juist hebben doen we alsof we de grootste psychologisch analytische experten zijn van gans Vlaanderen!</span>
        </p>
        
        {/* Spotify Player */}
        <div className="mb-12">
          <iframe 
            style={{borderRadius: "12px"}} 
            src="https://open.spotify.com/embed/show/1fU6DDJA7KJBE86XAlxQmn?utm_source=generator" 
            width="100%" 
            height="152" 
            frameBorder="0" 
            allowFullScreen 
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
            loading="lazy"
            title="De Mololoog Podcast Player"
          ></iframe>
        </div>
        
        {/* Platform Links */}
        <div className="max-w-lg mx-auto space-y-4">
          {/* Main Spotify Button */}
          <a 
            href="https://open.spotify.com/show/1fU6DDJA7KJBE86XAlxQmn" 
            className="flex items-center justify-center gap-2 bg-[#1DB954] hover:bg-[#1ed760] px-4 py-3 rounded-lg transition-colors w-full group"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="font-medium text-[#090C11]">Luister op Spotify</span>
          </a>

          {/* Other Platform Links */}
          <div className="grid grid-cols-4 gap-3">
            <a 
              href="https://podcasts.apple.com/us/podcast/de-mololoog/id1807142206" 
              className="flex flex-col items-center gap-0 bg-[#024D6C] hover:bg-[#035d84] px-4 py-2 rounded-lg transition-colors text-center group"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="text-base font-semibold whitespace-nowrap">Apple</span>
              <span className="text-base font-semibold whitespace-nowrap">Podcasts</span>
            </a>
            <a 
              href="https://pca.st/709ih5of" 
              className="flex flex-col items-center gap-0 bg-[#024D6C] hover:bg-[#035d84] px-4 py-2 rounded-lg transition-colors text-center group"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="text-base font-semibold whitespace-nowrap">Pocket</span>
              <span className="text-base font-semibold whitespace-nowrap">Casts</span>
            </a>
            <a 
              href="https://music.youtube.com/playlist?list=PLqUfKQeHXBR5iJ6OMdgXrUJBJWJCAShGp" 
              className="flex flex-col items-center gap-0 bg-[#024D6C] hover:bg-[#035d84] px-4 py-2 rounded-lg transition-colors text-center group"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="text-base font-semibold whitespace-nowrap">YouTube</span>
              <span className="text-base font-semibold whitespace-nowrap">Music</span>
            </a>
            <a 
              href="https://anchor.fm/s/1035d87f8/podcast/rss" 
              className="flex flex-col items-center gap-0 bg-[#024D6C] hover:bg-[#035d84] px-4 py-2 rounded-lg transition-colors text-center group"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="text-base font-semibold whitespace-nowrap">RSS</span>
              <span className="text-base font-semibold whitespace-nowrap">Feed</span>
            </a>
          </div>
        </div>
      </section>

      {/* Hosts Section */}
      <section className="pt-12 pb-12 px-4 md:px-8 max-w-5xl mx-auto">
        <div className="bg-slate-800/50 rounded-2xl p-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="w-[90%] ml-[2%] md:ml-0 md:w-3/4">
              <img 
                src="/images/De-Molologen.png"
                alt="Maarten & Yorrick van De Mololoog"
                className="rounded-xl w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="md:-mt-[20%] text-center md:text-left">
                <h2 className="text-2xl font-bold text-[#59C1C7] mb-12">
                  <span className="block">Krijg je maar niet genoeg</span>
                  <span className="block">van Yorrick & Maarten?</span>
                </h2>
                <div className="space-y-12 max-w-[300px] mx-auto md:mx-0">
                  <p className="text-gray-300">
                    In de Cinematen Podcast praten de jongens elke week over het laatste film en tv nieuws, bespreken ze de leukste series en reviewen ze de nieuwste films!
                  </p>
                  <a 
                    href="https://open.spotify.com/show/19O8JqKPSbQWek15vG3sig" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex w-full justify-center items-center gap-2 bg-[#024D6C] hover:bg-[#035d84] px-6 py-3 rounded-lg transition-colors text-white"
                  >
                    Ontdek de Cinematen Podcast
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="pt-12 pb-20 px-4 md:px-8 max-w-xl mx-auto">
        <h2 className="text-2xl font-bold mb-8 text-[#59C1C7]">Stuur ons jouw verdenkingen!</h2>
        {state.succeeded ? (
          <p className="text-[#59C1C7] text-center text-2xl font-bold">Bericht verstuurd!</p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Naam</label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#59C1C7]"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">E-mail</label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#59C1C7]"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
              <ValidationError prefix="Email" field="email" errors={state.errors} />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Bericht</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#59C1C7]"
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
              className="flex items-center justify-center gap-2 w-full bg-[#024D6C] hover:bg-[#035d84] px-6 py-3 rounded-lg transition-colors"
            >
              <MessageCircle size={20} />
              Verstuur Bericht
            </button>
          </form>
        )}
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 py-8 px-4">
        <div className="max-w-5xl mx-auto flex flex-col items-center gap-6">
          <div className="flex gap-6">
            <a href="https://www.instagram.com/cinematen_podcast" className="text-gray-400 hover:text-[#59C1C7] transition-colors" target="_blank" rel="noopener noreferrer" aria-label="Volg ons op Instagram">
              <Instagram size={24} />
            </a>
            <a href="https://www.facebook.com/cinematenpodcast/" className="text-gray-400 hover:text-[#59C1C7] transition-colors" target="_blank" rel="noopener noreferrer" aria-label="Volg ons op Facebook">
              <Facebook size={24} />
            </a>
            <a href="https://www.tiktok.com/@cinematen_podcast" className="text-gray-400 hover:text-[#59C1C7] transition-colors" target="_blank" rel="noopener noreferrer" aria-label="Volg ons op TikTok">
              <img src="/images/tiktok.svg" alt="TikTok" className="w-6 h-6 filter brightness-0 invert opacity-60 hover:opacity-100 transition-all" />
            </a>
            <a href="https://www.youtube.com/@Cinematen_podcast" className="text-gray-400 hover:text-[#59C1C7] transition-colors" target="_blank" rel="noopener noreferrer" aria-label="Volg ons op YouTube">
              <YoutubeIcon size={24} />
            </a>
          </div>
          <p className="text-gray-400">&copy; {new Date().getFullYear()} De Mololoog. Alle rechten voorbehouden.</p>
          <p className="text-gray-400 text-sm">Deze website is niet geassocieerd met GoPlay/Play Media.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;