import React, { useState } from 'react';
import bgImage from '../assets/bg.webp';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'What is Zunday?',
      answer: 'Zunday is an all-in-one business platform that helps you streamline operations, connect with vendors, and grow your business efficiently. We provide tools for collaboration, analytics, automation, and more.',
    },
    {
      question: 'How much does Zunday cost?',
      answer: 'We offer flexible pricing plans to suit businesses of all sizes. Start with our free 14-day trial, no credit card required. After that, plans start from $29/month for small businesses to custom enterprise solutions.',
    },
    {
      question: 'Is there a free trial available?',
      answer: 'Yes! We offer a 14-day free trial with full access to all features. No credit card is required to start your trial, and you can cancel anytime.',
    },
    {
      question: 'How secure is my data?',
      answer: 'Security is our top priority. We use enterprise-grade encryption, regular security audits, automated backups, and comply with industry standards including GDPR and SOC 2.',
    },
    {
      question: 'Can I integrate Zunday with other tools?',
      answer: 'Absolutely! Zunday offers seamless integration with popular tools through our robust API. We support integrations with CRM systems, accounting software, communication tools, and more.',
    },
    {
      question: 'What kind of support do you offer?',
      answer: 'We provide 24/7 customer support via email, chat, and phone. Premium plans include dedicated account managers and priority support. We also have extensive documentation and video tutorials.',
    },
    {
      question: 'Can I change my plan later?',
      answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we\'ll prorate any charges or credits to your account.',
    },
    {
      question: 'Do you offer training for my team?',
      answer: 'Yes! We provide comprehensive onboarding sessions, training materials, and webinars. Enterprise customers receive personalized training sessions for their teams.',
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const leftFaqs = faqs.filter((_, i) => i % 2 === 0);
  const rightFaqs = faqs.filter((_, i) => i % 2 === 1);

  return (
    <section className="relative py-20" style={{ backgroundColor: '#4B3DBF' }}>
      {/* Background */}
      <div aria-hidden className="absolute top-0 inset-x-0 mx-auto" style={{ width: '100%', maxWidth: '80rem' }}>
        <img src={bgImage} alt="" className="block pointer-events-none select-none" style={{ width: '80rem', height: 'auto', mixBlendMode: 'luminosity' }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-4 mb-3">
            <span className="hidden md:block flex-1 max-w-[240px] h-px border-t border-dashed border-[#FDD621]/80" style={{ borderWidth: '1px', borderImage: 'repeating-linear-gradient(to right, #FDD621 0px, #FDD621 8px, transparent 8px, transparent 12px) 1' }}></span>
            <h2 className="font-urbanist text-white text-2xl md:text-3xl tracking-widest font-bold">FAQS</h2>
            <span className="hidden md:block flex-1 max-w-[240px] h-px border-t border-dashed border-[#FDD621]/80" style={{ borderWidth: '1px', borderImage: 'repeating-linear-gradient(to right, #FDD621 0px, #FDD621 8px, transparent 8px, transparent 12px) 1' }}></span>
          </div>
        </div>

        {/* FAQ Columns - independent heights to avoid cross-stretching */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          {[leftFaqs, rightFaqs].map((col, colIdx) => (
            <div key={colIdx} className="flex flex-col gap-6">
              {col.map((faq, localIdx) => {
                const globalIndex = colIdx === 0 ? localIdx * 2 : localIdx * 2 + 1;
                const isOpen = openIndex === globalIndex;
                return (
                  <div key={globalIndex} className={`rounded-2xl backdrop-blur-md text-white transition-colors ${isOpen ? 'bg-white/15' : 'bg-white/10'}`}>
                    <button onClick={() => toggleFAQ(globalIndex)} aria-expanded={isOpen} className="w-full px-6 py-5 text-left flex items-center gap-3">
                      <span className={`flex items-center justify-center w-8 h-8 rounded-full shrink-0 transition-colors ${isOpen ? 'bg-[#FDD621] text-[#141414]' : 'bg-white/20 text-white'}`}>+
                      </span>
                      <span className="font-urbanist font-medium">{faq.question}</span>
                    </button>
                    <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-40 px-6 pb-5 mt-3 opacity-100' : 'max-h-0 px-6 pb-0 mt-0 opacity-0'}`}>
                      <p className="pl-5 md:pl-11 text-white/80 text-sm">{faq.answer}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;