import React from 'react';
import { Link } from 'react-router-dom';
import bgImage from '../assets/bg.webp';
import mobileImage from '../assets/mobile.webp';
import appStoreBadge from '../assets/App Store Black Border.svg';
import googlePlayBadge from '../assets/Google Play Black Border.svg';
import heroArrow from '../assets/arrow.svg';
import leftTick from '../assets/left-t.svg';
import leftBottom from '../assets/left-b.svg';
import rightTop from '../assets/right-t.svg';
import rightBottom from '../assets/right-b.svg';
import Features from './Features';

const Hero = () => {
  return (
    <div className="relative" style={{
      backgroundColor: '#4B3DBF'
    }}>
      {/* Decorative background image layer (top, not stretched) */}
      <div
        aria-hidden
        className=" top-0 inset-x-0 mx-auto"
        style={{
          width: '100%',
          maxWidth: '80rem',
          height: 700
        }}
      >
        <img
          src={bgImage}
          alt=""
          className="block pointer-events-none select-none"
          style={{
            height: 700,
            width: '80rem',
            mixBlendMode: 'luminosity'
          }}
        />
      </div>
      {/* Hero copy (centered just above the mobile image) */}
      <section className="absolute inset-x-0 text-center pointer-events-none" style={{ top: 170, zIndex: 10 }}>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="hidden sm:block absolute bottom-4 left-12 top-1/2 -translate-y-1/2 select-none">
            <img src={heroArrow} alt="" className="block" style={{ height: 80 }} />
          </div>
            {/* Left callout pill under the arrow */}
            <div
              className="hidden sm:flex items-center gap-3 absolute bott left-12 rounded-full shadow-lg"
              style={{
                top: 'calc(50% + 80px)',
                background: 'linear-gradient(90deg, #FDD621 0%, #FFC72C 100%)',
                padding: '10px 18px'
              }}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-shrink-0"
              >
                <path d="M12 3l7 4v5c0 5-3.5 8-7 9-3.5-1-7-4-7-9V7l7-4z" stroke="#141414" strokeWidth="1.5" fill="none"/>
                <path d="M9 12l2 2 4-4" stroke="#141414" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="font-urbanist text-[#141414] font-semibold tracking-wide">
                Local & Trusted
              </span>
            </div>
          <h1 className="font-urbanist text-white text-3xl md:text-5xl font-semibold leading-tight mb-3">
            Your City, Delivered <span className="text-[#FDD621]">in Minutes</span>
          </h1>
        </div>
        <p className="font-urbanist text-white/80 text-base md:text-xl max-w-3xl mx-auto">
          Groceries, Meals, and Dining Experiences — all from one super app.
        </p>
        <div className="mt-4 flex items-center justify-center gap-4 pointer-events-auto">
          <a href="#" aria-label="Download on the App Store">
            <img src={appStoreBadge} alt="App Store" style={{ height: 48 }} />
          </a>
          <a href="#" aria-label="Get it on Google Play">
            <img src={googlePlayBadge} alt="Google Play" style={{ height: 48 }} />
          </a>
        </div>
      </section>

      {/* Bottom device mockup: show only top half, centered at bottom */}
      <div
        aria-hidden
        className="absolute inset-x-0 mx-auto overflow-visible pointer-events-none flex justify-center relative z-20"
        style={{
          top: -300,
          height: 300,
          maxWidth: '80rem',
          width: '100%'
        }}
      >
        <div className="overflow-hidden" style={{ height: 300 }}>
          <img
            src={mobileImage}
            alt=""
            className="select-none block"
            style={{
              height: 600,
              width: 'auto'
            }}
          />
        </div>
        {/* Decorative left-top element near mobile */}
        <img
          src={leftTick}
          alt=""
          className="hidden sm:block absolute select-none"
          style={{
            left: '20rem',
            top: '0',
          }}
        />
        <img
          src={leftBottom}
          alt=""
          className="hidden sm:block absolute select-none"
          style={{
            left: '8rem',
            top: '11rem',
          }}
        />
        {/* Decorative right-top element near mobile */}
        <img
          src={rightTop}
          alt=""
          className="hidden sm:block absolute select-none"
          style={{
            right: '21rem',
            top: '-3rem',
          }}
        />
        <img
          src={rightBottom}
          alt=""
          className="hidden sm:block absolute select-none"
          style={{
            right: '16rem',
            top: '6rem',
          }}
        />
        {/* Right-side arrow next to mobile image */}
        <div className="hidden sm:block absolute right-26 bottom-30 select-none z-20">
          <img src={heroArrow} alt="" className="block transform rotate-180" style={{ height: 80 }} />
        </div>
        {/* Right callout pill above the bottom arrow */}
        <div
          className="hidden sm:flex items-center gap-3 absolute rounded-full shadow-lg z-20"
          style={{
            right: '3rem',
            bottom: '13rem',
            background: 'linear-gradient(90deg, #FDD621 0%, #FFC72C 100%)',
            padding: '10px 18px'
          }}
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="flex-shrink-0"
          >
            <circle cx="12" cy="12" r="9" stroke="#141414" strokeWidth="1.5" fill="none" />
            <path d="M12 7v5l3 2" stroke="#141414" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="font-urbanist text-[#141414] font-semibold tracking-wide">
            Delivery in 30 min
          </span>
        </div>
      </div>

      {/* Features section under hero - negative margin to eliminate gap */}
      <div id="features" style={{ marginTop: '-300px' }}>
        <Features />
      </div>
    </div>
  );
};

export default Hero;