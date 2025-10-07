import React, { useState } from 'react';
import bgImage from '../assets/bg.webp';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <section className="relative py-20" style={{ backgroundColor: '#4B3DBF' }}>
      <div aria-hidden className="absolute top-0 inset-x-0 mx-auto" style={{ width: '100%', maxWidth: '80rem' }}>
        <img src={bgImage} alt="" className="block pointer-events-none select-none" style={{ width: '80rem', height: 'auto', mixBlendMode: 'luminosity' }} />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-3">
            <span className="hidden md:block flex-1 max-w-[240px] h-px border-t border-dashed border-[#FDD621]/80" style={{ borderWidth: '1px', borderImage: 'repeating-linear-gradient(to right, #FDD621 0px, #FDD621 8px, transparent 8px, transparent 12px) 1' }}></span>
            <h2 className="font-urbanist text-white text-2xl md:text-3xl tracking-widest font-bold">CONTACT <span className="text-[#FDD621]">US</span></h2>
            <span className="hidden md:block flex-1 max-w-[240px] h-px border-t border-dashed border-[#FDD621]/80" style={{ borderWidth: '1px', borderImage: 'repeating-linear-gradient(to right, #FDD621 0px, #FDD621 8px, transparent 8px, transparent 12px) 1' }}></span>
          </div>
          <p className="text-white text-2xl md:text-3xl opacity-90">Get in touch with us. We're here to assist you.</p>
        </div>

        <form onSubmit={handleSubmit} className="text-white">
          {/* Top row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-2">Your Name</label>
              <input id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full bg-transparent border-0 border-b border-white/40 focus:border-white/80 focus:ring-0 placeholder-white/50" placeholder="" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-2">Email Address</label>
              <input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required className="w-full bg-transparent border-0 border-b border-white/40 focus:border-white/80 focus:ring-0 placeholder-white/50" placeholder="" />
            </div>
            <div>
              <label htmlFor="company" className="block text-sm font-medium text-white/80 mb-2">Phone Number (optional)</label>
              <input id="company" name="company" value={formData.company} onChange={handleChange} className="w-full bg-transparent border-0 border-b border-white/40 focus:border-white/80 focus:ring-0 placeholder-white/50" placeholder="" />
            </div>
          </div>

          {/* Message */}
          <div className="mt-8">
            <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-2">Message</label>
            <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows="3" required className="w-full bg-transparent border-0 border-b border-white/40 focus:border-white/80 focus:ring-0 placeholder-white/50" placeholder=""></textarea>
          </div>

          <button type="submit" className="mt-8 px-6 py-3 bg-[#FDD621] text-[#141414] font-semibold rounded-full hover:brightness-95">MESSAGE US</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;