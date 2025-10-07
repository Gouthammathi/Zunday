import React, { useState } from 'react';

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

  return (
    <div className="bg-white py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-600">
            Everything you need to know about Zunday. Can't find what you're looking for?{' '}
            <a href="/contact" className="text-blue-600 hover:text-blue-700">
              Contact us
            </a>
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
              >
                <span className="text-lg font-semibold text-gray-900">
                  {faq.question}
                </span>
                <svg
                  className={`w-6 h-6 text-blue-600 transform transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-5">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-16 text-center bg-blue-50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Still have questions?
          </h2>
          <p className="text-gray-600 mb-6">
            Our team is here to help. Get in touch and we'll respond as soon as possible.
          </p>
          <button className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
            Contact Support
          </button>
        </div>
      </div>
    </div>
  );
};

export default FAQ;