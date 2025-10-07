import React from 'react';
import bgImage from '../assets/bg.webp';
import teamPortrait from '../assets/team.webp';

const Team = () => {
  return (
    <section className="relative py-20" style={{ backgroundColor: '#4B3DBF' }}>
      {/* Background */}
      <div aria-hidden className="absolute top-0 inset-x-0 mx-auto" style={{ width: '100%', maxWidth: '80rem' }}>
        <img src={bgImage} alt="" className="block pointer-events-none select-none" style={{ width: '80rem', height: 'auto', mixBlendMode: 'luminosity' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-3">
            <span className="hidden md:block flex-1 max-w-[240px] h-px border-t border-dashed border-[#FDD621]/80" style={{ borderWidth: '1px', borderImage: 'repeating-linear-gradient(to right, #FDD621 0px, #FDD621 8px, transparent 8px, transparent 12px) 1' }}></span>
            <h2 className="font-urbanist text-white text-2xl md:text-3xl tracking-widest font-bold">
              MEET OUR <span className="text-[#FDD621]">TEAM</span>
            </h2>
            <span className="hidden md:block flex-1 max-w-[240px] h-px border-t border-dashed border-[#FDD621]/80" style={{ borderWidth: '1px', borderImage: 'repeating-linear-gradient(to right, #FDD621 0px, #FDD621 8px, transparent 8px, transparent 12px) 1' }}></span>
          </div>
        </div>

        {/* Content row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left - portrait */}
          <div className="flex justify-center lg:justify-start ml-6 lg:ml-20">
            <div className="w-[447px] h-[526px] rounded-[24px] bg-white/10 border border-white/20 shadow-xl overflow-hidden">
              <img src={teamPortrait} alt="Team member" className="w-full h-full object-cover select-none" style={{ objectPosition: 'center 45%', opacity: 1, transform: 'rotate(0deg)' }} />
            </div>
          </div>

          {/* Right - bio card */}
          <div className="pr-4">
            <h3 className="text-white font-semibold text-lg md:text-xl mb-1">Aarav Mehta</h3>
            <p className="text-white/80 mb-5 text-sm md:text-base">Founder & CEO, ZUNDAY</p>
            <p className="text-white/80 leading-7 md:leading-8 text-sm md:text-base mb-8">
              Aarav Mehta is the driving force behind ZUNDAY — a smart, all-in-one delivery app for food, dining, and groceries. With a strong vision for
              convenience and innovation, he leads ZUNDAY's mission to simplify everyday living through fast, reliable, and delightful delivery experiences.
            </p>
            <div className="bg-white/15 backdrop-blur-md rounded-xl px-6 py-5 text-white/90 shadow-md">
              <p className="text-white font-semibold mb-2 text-sm md:text-base">Aarav believes in a simple philosophy:</p>
              <p className="text-white/80 italic text-xs md:text-sm">
                "Convenience is not a luxury — it's a necessity. At ZUNDAY, we bring it to every doorstep."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;