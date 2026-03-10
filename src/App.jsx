import React from 'react';
import SplitText from './components/TextAnimations/SplitText/SplitText';
import Squares from './components/Backgrounds/Squares/Squares';

function App() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-[#060010]">
      {/* Background Decorator */}
      <div className="absolute inset-0 z-0">
        <Squares
          speed={0.5}
          squareSize={40}
          direction='diagonal' // up, down, left, right, diagonal
          borderColor='#333'
          hoverFillColor='#222'
        />
      </div>

      <div className="z-10 text-center space-y-6">
        <div className="text-6xl md:text-8xl font-black mb-6">
          <SplitText
            text="My Portfolio"
            className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400 drop-shadow-[0_0_15px_rgba(34,211,238,0.5)]"
            delay={50}
            duration={1}
            from={{ opacity: 0, y: 50 }}
            to={{ opacity: 1, y: 0 }}
          />
        </div>
        <p className="text-xl md:text-2xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
          I'm a creative developer testing out cool animations with <span className="text-cyan-400 font-semibold">React Bits</span>.
        </p>
        <div className="mt-12 flex items-center justify-center gap-6">
          <button className="px-8 py-3 rounded-full bg-cyan-500 hover:bg-cyan-400 text-zinc-900 font-bold transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(34,211,238,0.4)]">
            View Projects
          </button>
          <button className="px-8 py-3 rounded-full border border-cyan-500/30 hover:border-cyan-400 text-cyan-400 font-medium transition-all hover:bg-cyan-950/30">
            Contact Me
          </button>
        </div>
      </div>
    </main>
  );
}

export default App;
