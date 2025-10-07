import React from 'react';
import bgImage from '../assets/bg.webp';
import phone7 from '../assets/phone7.webp';

const Vendors = () => {
  return (
    <section className="relative pt-0 pb-20 -mt-12 md:-mt-16" style={{ backgroundColor: '#4B3DBF' }}>
      {/* Decorative background like other sections */}
      <div
        aria-hidden
        className="absolute top-0 inset-x-0 mx-auto"
        style={{ width: '100%', maxWidth: '80rem' }}
      >
        <img
          src={bgImage}
          alt=""
          className="block pointer-events-none select-none"
          style={{ width: '80rem', height: 'auto', mixBlendMode: 'luminosity' }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-3">
            <span className="hidden md:block flex-1 max-w-[240px] h-px border-t border-dashed border-[#FDD621]/80" style={{ borderWidth: '1px', borderImage: 'repeating-linear-gradient(to right, #FDD621 0px, #FDD621 8px, transparent 8px, transparent 12px) 1' }}></span>
            <h2 className="font-urbanist text-white text-2xl md:text-3xl tracking-widest font-bold">
              PARTNER WITH <span className="text-[#FDD621]">ZUNDAY</span>
            </h2>
            <span className="hidden md:block flex-1 max-w-[240px] h-px border-t border-dashed border-[#FDD621]/80" style={{ borderWidth: '1px', borderImage: 'repeating-linear-gradient(to right, #FDD621 0px, #FDD621 8px, transparent 8px, transparent 12px) 1' }}></span>
          </div>
          <p className="font-urbanist text-[#FDD621] italic font-extrabold text-sm md:text-base">
            Partner With Zunday & Grow Your Business
          </p>
        </div>

        {/* Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left - phone mock and CTA */}
          <div className="flex flex-col items-center lg:items-center gap-6 pl-6 lg:pl-28">
            <div className="w-64 max-w-[280px] aspect-[9/19] rounded-[2.5rem] bg-white/10 border border-white/20 backdrop-blur-sm overflow-hidden shadow-2xl">
              <img src={phone7} alt="Vendor app preview" className="w-full h-full object-cover select-none" />
            </div>
            <button className="px-8 py-3 rounded-full text-sm font-semibold bg-[#FDD621] text-[#141414] shadow-md hover:brightness-95 self-center">
              JOIN AS VENDOR
            </button>
          </div>

          {/* Right - steps vertical timeline */}
          <div className="relative">
            {/* vertical line with yellow accent at top */}
            <div className="absolute left-3 top-0 bottom-0 w-[2px] bg-white/25" />
            <div className="absolute left-[11px] top-3 h-12 w-[6px] rounded bg-[#FDD621]" />
            <div className="pl-12 space-y-12">
              {/* Step 1 */}
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-full bg-[#FDD621] flex items-center justify-center shadow-lg">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 7L9 18l-5-5" stroke="#141414" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="font-urbanist text-white font-semibold uppercase tracking-wide">REGISTER: EASY SIGN-UP PROCESS</h3>
              </div>

              {/* Step 2 */}
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-full bg-white/10 border border-white/30 flex items-center justify-center">
                  <div className="w-7 h-7 rounded-full border border-white/60 flex items-center justify-center">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 7L9 18l-5-5" stroke="#ffffff" strokeOpacity="0.9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
                <h3 className="font-urbanist text-white font-semibold uppercase tracking-wide">MANAGE: ADD PRODUCTS OR SERVICES</h3>
              </div>

              {/* Step 3 */}
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-full bg-white/10 border border-white/30 flex items-center justify-center">
                  <div className="w-7 h-7 rounded-full border border-white/60 flex items-center justify-center">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3 12h4l3 8 4-16 3 8h4" stroke="#ffffff" strokeOpacity="0.9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
                <h3 className="font-urbanist text-white font-semibold uppercase tracking-wide">TRACK: ORDERS, EARNINGS, AND ANALYTICS</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vendors;