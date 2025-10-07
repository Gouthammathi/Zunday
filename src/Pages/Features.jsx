import React from 'react'
import bgImage from '../assets/bg.webp'
import phone1 from '../assets/phone1.webp'
import phone2 from '../assets/phone2.webp'
import phone3 from '../assets/phone3.webp'
import phone4 from '../assets/phone4.webp'
import phone5 from '../assets/phone5.webp'
import phone6 from '../assets/phone6.webp'

const Features = () => {
  return (
    <section className="relative py-24 overflow-hidden" style={{ backgroundColor: '#4B3DBF' }}>
      {/* decorative background like hero */}
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

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-9">
        {/* Heading */}
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-4 mb-3">
            <span className="hidden md:block flex-1 max-w-[240px] h-px border-t border-dashed border-[#FDD621]/80" style={{borderWidth: '1px', borderImage: 'repeating-linear-gradient(to right, #FDD621 0px, #FDD621 8px, transparent 8px, transparent 12px) 1'}}></span>
            <h2 className="font-urbanist text-white text-2xl md:text-3xl tracking-widest font-bold">
              EXPLORE OUR <span className="text-[#FDD621]">FEATURES</span>
            </h2>
            <span className="hidden md:block flex-1 max-w-[240px] h-px border-t border-dashed border-[#FDD621]/80" style={{borderWidth: '1px', borderImage: 'repeating-linear-gradient(to right, #FDD621 0px, #FDD621 8px, transparent 8px, transparent 12px) 1'}}></span>
          </div>
          <p className="font-urbanist text-[#FDD621] italic font-extrabold text-sm md:text-base">
            Fresh Groceries Delivered To Your Doorstep
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Phones placeholder area (user will provide screenshots) */}
          <div className="flex justify-center gap-6">
            <div className="w-64 max-w-[280px] aspect-[9/19] rounded-[2.5rem] bg-white/10 border border-white/20 backdrop-blur-sm overflow-hidden">
              <img src={phone1} alt="App screen 1" className="w-full h-full object-cover select-none" />
            </div>
            <div className="w-64 max-w-[280px] aspect-[9/19] rounded-[2.5rem] bg-white/10 border border-white/20 backdrop-blur-sm overflow-hidden">
              <img src={phone2} alt="App screen 2" className="w-full h-full object-cover select-none" />
            </div>
          </div>

          {/* Right feature pills */}
          <div className="space-y-6">
            <div className="rounded-2xl px-6 py-5 bg-white/15 backdrop-blur-md text-white">
              <h3 className="font-urbanist text-lg md:text-xl font-semibold mb-1">Quick Delivery</h3>
              <p className="text-white/80 text-sm md:text-base">Get essentials delivered in under 60 minutes.</p>
            </div>
            <div className="rounded-2xl px-6 py-5 bg-white/15 backdrop-blur-md text-white">
              <h3 className="font-urbanist text-lg md:text-xl font-semibold mb-1">Wide Range Of Products</h3>
              <p className="text-white/80 text-sm md:text-base">Fruits, Vegetables, Snacks, And Beverages.</p>
            </div>
            <div className="rounded-2xl px-6 py-5 bg-white/15 backdrop-blur-md text-white">
              <h3 className="font-urbanist text-lg md:text-xl font-semibold mb-1">Smart Reordering</h3>
              <p className="text-white/80 text-sm md:text-base">Easily reorder your favorites with one tap.</p>
            </div>
          </div>
        </div>
      </div>
      {/* Second block - Meals context */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* decorative background like hero for this block */}
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
        {/* Heading */}
        <div className="relative z-10 text-center mb-10">
          <div className="flex items-center justify-center gap-4 mb-3">
            <span className="hidden md:block flex-1 max-w-[240px] h-px border-t border-dashed border-[#FDD621]/80" style={{borderWidth: '1px', borderImage: 'repeating-linear-gradient(to right, #FDD621 0px, #FDD621 8px, transparent 8px, transparent 12px) 1'}}></span>
            <h2 className="font-urbanist text-white text-2xl md:text-3xl tracking-widest font-bold">
              EXPLORE OUR <span className="text-[#FDD621]">FEATURES</span>
            </h2>
            <span className="hidden md:block flex-1 max-w-[240px] h-px border-t border-dashed border-[#FDD621]/80" style={{borderWidth: '1px', borderImage: 'repeating-linear-gradient(to right, #FDD621 0px, #FDD621 8px, transparent 8px, transparent 12px) 1'}}></span>
          </div>
          <p className="font-urbanist text-[#FDD621] italic font-extrabold text-sm md:text-base">
            Fresh Groceries Delivered To Your Doorstep
          </p>
        </div>

        {/* Content */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Phones placeholder area (user will provide screenshots) */}
          <div className="flex justify-center gap-6">
            <div className="w-64 max-w-[280px] aspect-[9/19] rounded-[2.5rem] bg-white/10 border border-white/20 backdrop-blur-sm overflow-hidden">
              <img src={phone3} alt="App screen 1" className="w-full h-full object-cover select-none" />
            </div>
            <div className="w-64 max-w-[280px] aspect-[9/19] rounded-[2.5rem] bg-white/10 border border-white/20 backdrop-blur-sm overflow-hidden">
              <img src={phone4} alt="App screen 2" className="w-full h-full object-cover select-none" />
            </div>
          </div>

          {/* Right feature pills */}
          <div className="space-y-6">
            <div className="rounded-2xl px-6 py-5 bg-white/15 backdrop-blur-md text-white">
              <h3 className="font-urbanist text-lg md:text-xl font-semibold mb-1">Quick Delivery</h3>
              <p className="text-white/80 text-sm md:text-base">Get essentials delivered in under 60 minutes.</p>
            </div>
            <div className="rounded-2xl px-6 py-5 bg-white/15 backdrop-blur-md text-white">
              <h3 className="font-urbanist text-lg md:text-xl font-semibold mb-1">Wide Range Of Products</h3>
              <p className="text-white/80 text-sm md:text-base">Fruits, Vegetables, Snacks, And Beverages.</p>
            </div>
            <div className="rounded-2xl px-6 py-5 bg-white/15 backdrop-blur-md text-white">
              <h3 className="font-urbanist text-lg md:text-xl font-semibold mb-1">Smart Reordering</h3>
              <p className="text-white/80 text-sm md:text-base">Easily reorder your favorites with one tap.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative mt-24" style={{ backgroundColor: '#000000' }}>
        {/* bg layer */}
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
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-24">
          {/* Heading */}
          <div className="relative z-10 text-center mb-10">
            <div className="flex items-center justify-center gap-4 mb-3">
              <span className="hidden md:block flex-1 max-w-[240px] h-px border-t border-dashed border-[#FDD621]/80" style={{borderWidth: '1px', borderImage: 'repeating-linear-gradient(to right, #FDD621 0px, #FDD621 8px, transparent 8px, transparent 12px) 1'}}></span>
              <h2 className="font-urbanist text-white text-2xl md:text-3xl tracking-widest font-bold">
                EXPLORE OUR <span className="text-[#FDD621]">FEATURES</span>
              </h2>
              <span className="hidden md:block flex-1 max-w-[240px] h-px border-t border-dashed border-[#FDD621]/80" style={{borderWidth: '1px', borderImage: 'repeating-linear-gradient(to right, #FDD621 0px, #FDD621 8px, transparent 8px, transparent 12px) 1'}}></span>
            </div>
            <p className="font-urbanist text-[#FDD621] italic font-extrabold text-sm md:text-base">
              Reserve Tables At Your Favorite Restaurants!
            </p>
          </div>

          {/* Content */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Phones placeholder area */}
            <div className="flex justify-center gap-6">
              <div className="w-64 max-w-[280px] aspect-[9/19] rounded-[2.5rem] bg-white/10 border border-white/20 backdrop-blur-sm overflow-hidden">
                <img src={phone5} alt="App screen 1" className="w-full h-full object-cover select-none" />
              </div>
              <div className="w-64 max-w-[280px] aspect-[9/19] rounded-[2.5rem] bg-white/10 border border-white/20 backdrop-blur-sm overflow-hidden">
                <img src={phone6} alt="App screen 2" className="w-full h-full object-cover select-none" />
              </div>
            </div>

            {/* Right feature pills */}
            <div className="space-y-6">
              <div className="rounded-2xl px-6 py-5 bg-white/15 backdrop-blur-md text-white">
                <h3 className="font-urbanist text-lg md:text-xl font-semibold mb-1">Reservations</h3>
                <p className="text-white/80 text-sm md:text-base">Book Your Table Instantly At Your Favorite Restaurants.</p>
              </div>
              <div className="rounded-2xl px-6 py-5 bg-white/15 backdrop-blur-md text-white">
                <h3 className="font-urbanist text-lg md:text-xl font-semibold mb-1">Discounts</h3>
                <p className="text-white/80 text-sm md:text-base">Unlock Exclusive Deals And Offers Only On The App.</p>
              </div>
              <div className="rounded-2xl px-6 py-5 bg-white/15 backdrop-blur-md text-white">
                <h3 className="font-urbanist text-lg md:text-xl font-semibold mb-1">Reviews</h3>
                <p className="text-white/80 text-sm md:text-base">Read Verified Diner Reviews To Choose The Best Spot.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features