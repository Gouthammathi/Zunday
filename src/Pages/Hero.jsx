import React from 'react';
import { Link } from 'react-router-dom';
import bgImage from '../assets/bg.png';
import mobileImage from '../assets/mobile.png';

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
        <h1 className="font-urbanist text-white text-3xl md:text-5xl font-semibold leading-tight mb-3">
          Your City, Delivered <span className="text-[#FDD621]">in Minutes</span>
        </h1>
        <p className="font-urbanist text-white/80 text-base md:text-xl max-w-3xl mx-auto">
          Groceries, Meals, and Dining Experiences — all from one super app.
        </p>
      </section>

      {/* Bottom device mockup: show only top half, centered at bottom */}
      <div
        aria-hidden
        className="absolute inset-x-0 mx-auto overflow-hidden pointer-events-none flex justify-center"
        style={{
          top: 'calc(700px - 300px)',
          height: 300,
          maxWidth: '80rem',
          width: '100%'
        }}
      >
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

      {/* Stats Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">10K+</div>
            <div className="text-gray-300">Active Users</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">500+</div>
            <div className="text-gray-300">Vendors</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">99.9%</div>
            <div className="text-gray-300">Uptime</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">24/7</div>
            <div className="text-gray-300">Support</div>
          </div>
        </div>
      </section>

      {/* Features Preview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Everything you need to succeed
          </h2>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Powerful features designed to help your business grow faster
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Lightning Fast</h3>
            <p className="text-gray-600">Optimized performance for seamless user experience</p>
          </div>

          {/* Feature 2 */}
          <div className="p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Secure & Safe</h3>
            <p className="text-gray-600">Enterprise-grade security to protect your data</p>
          </div>

          {/* Feature 3 */}
          <div className="p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Analytics</h3>
            <p className="text-gray-600">Real-time insights to make better decisions</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-blue-600 rounded-2xl p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to get started?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of businesses already using Zunday
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-all transform hover:scale-105">
              Start Free Trial
            </button>
            <Link to="/contact">
              <button className="px-8 py-4 bg-transparent text-white font-semibold rounded-lg border-2 border-white hover:bg-white hover:text-blue-600 transition-all">
                Contact Sales
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;