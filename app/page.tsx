"use client";
import { useState } from 'react';
import confetti from 'canvas-confetti';

type Track = {
  id: number;
  title: string;
  artist: string;
  note: string;
  spotifyId: string;
};

// Tu base de datos (puedes moverla a otro archivo después si quieres)
const playlist = [
  {
    id: 1,
    title: "Tus ojos",
    artist: "Los Cafres",
    note: "Para que estés alegre por si no tuviste un buen día",
    spotifyId: "6yyrsrci6u2nreFlhXSy3J"
  },
  {
    id: 2, // ¡Esta es la canción especial!
    title: "Ojitos Lindos",
    artist: "Bad Bunny & Bomba Estéreo",
    note: "Cómo me encantan tus ojitos",
    spotifyId: "3k3NWokhRRkEPhCzPmV8TW"
  },
  {
    id: 3,
    title: "Right here",
    artist: "Justin Bieber - Drake",
    note: "Tu gusto culposo t kiero",
    spotifyId: "2Rmuzh89p29BeTIF63Opwo"
  },
  {
    id: 4,
    title: "I wanna be yours",
    artist: "Arctic Monkeys",
    note: "Para que te acordes como me tenés",
    spotifyId: "5XeFesFbtLpXzIVDNQP22n"
  }
];
{/* <iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/2Rmuzh89p29BeTIF63Opwo?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe> */ }
{/* <iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/6yyrsrci6u2nreFlhXSy3J?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe> */ }
{/* <iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/5XeFesFbtLpXzIVDNQP22n?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe> */ }
{/* <iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/1H7ktqkQx1PIuPfNtqvaBs?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe> */ }
export default function VibePlayer() {
  const [currentTrack, setCurrentTrack] = useState(playlist[0]);

  const handlePlay = (track: Track) => {
    setCurrentTrack(track);

    // Si elige la canción con ID 2, lanzamos confeti con tonos rosas
    if (track.id === 2 || track.id === 1) {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#ff0000', '#ff69b4', '#ff1493'] // Rojo, HotPink, DeepPink
      });
    }
  };

  return (
    <div className="min-h-screen bg-neutral-900 flex flex-col items-center justify-center p-4 text-white font-sans">

      <div className="bg-neutral-800 rounded-3xl shadow-2xl p-6 w-full max-w-sm border border-neutral-700">

        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold tracking-wider text-pink-400">NUESTRA VIBE</h1>
          <p className="text-xs text-neutral-400 mt-1">v 1.0 - Solo para tus oídos</p>
        </div>

        <div className="mb-6 rounded-xl overflow-hidden shadow-lg">
          <iframe
            src={`https://open.spotify.com/embed/track/${currentTrack.spotifyId}?utm_source=generator&theme=0`}
            width="100%"
            height="152"
            frameBorder={0}
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy">
          </iframe>
        </div>

        <div className="bg-neutral-900 rounded-xl p-4 mb-6 border border-neutral-700/50 relative">
          <span className="absolute -top-3 left-4 bg-pink-500 text-white text-[10px] font-bold px-2 py-1 rounded-full">
            Nota de tu amorsote
          </span>
          <p className="text-sm text-neutral-300 italic text-center mt-2">
            &quot;{currentTrack.note}&quot;
          </p>
        </div>

        <div>
          <h3 className="text-xs font-bold text-neutral-500 uppercase tracking-widest mb-3 px-2">
            Tracklist
          </h3>
          <div className="space-y-2">
            {playlist.map((track) => (
              <button
                key={track.id}
                onClick={() => handlePlay(track)}
                className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 flex justify-between items-center ${currentTrack.id === track.id
                  ? 'bg-pink-500/20 border border-pink-500/50 text-pink-300'
                  : 'bg-neutral-800 hover:bg-neutral-700 text-neutral-400'
                  }`}
              >
                <div>
                  <p className={`text-sm font-semibold ${currentTrack.id === track.id ? 'text-pink-400' : 'text-white'}`}>
                    {track.title}
                  </p>
                  <p className="text-xs opacity-70">{track.artist}</p>
                </div>
                {currentTrack.id === track.id && (
                  <span className="flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500"></span>
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}