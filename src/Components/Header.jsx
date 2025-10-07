import React, { useEffect, useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState('Home');

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Features', path: '/features' },
    { name: 'Vendors', path: '/vendors' },
    { name: 'Team', path: '/team' },
    { name: 'Blog', path: '/' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contact', path: '/contact' },
  ];

  const handleNavLinkClick = (name, e, isMobile = false) => {
    e.preventDefault();
    const targetId = name === 'Features' ? 'features' : name === 'Vendors' ? 'vendors' : name === 'Team' ? 'team' : name === 'FAQ' ? 'faq' : name === 'Contact' ? 'contact' : 'top';
    const el = targetId === 'top' ? null : document.getElementById(targetId);
    const headerOffset = 64; // sticky header height
    const targetTop = targetId === 'top' ? 0 : el ? el.getBoundingClientRect().top + window.scrollY - headerOffset : 0;
    window.scrollTo({ top: targetTop, behavior: 'smooth' });
    if (isMobile) setIsMenuOpen(false);
    setActiveNav(name);
  };

  useEffect(() => {
    setActiveNav('Home');
  }, []);

  return (
    <header className="sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a href="#top" onClick={(e)=>handleNavLinkClick('Home', e, false)} className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-white">Zunday</div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActiveLink = activeNav === link.name;
              return (
                <button
                  key={link.path}
                  onClick={(e) => handleNavLinkClick(link.name, e, false)}
                  className={`text-sm font-medium transition-colors duration-200 ${isActiveLink ? 'text-[#FDD621]' : 'text-white hover:text-[#FDD621]'}`}
                >
                  {link.name}
                </button>
              );
            })}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            {/* <button className="px-4 py-2 text-sm font-medium text-white hover:text-[#FDD621] transition-colors">
              Sign In
            </button> */}
            <button onClick={(e)=>handleNavLinkClick('Contact', e, false)} className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors border-2 ${
              activeNav === 'Contact'
                ? 'bg-[#FDD621] border-[#FDD621] text-gray-900'
                : 'bg-transparent border-white text-white hover:bg-[#FDD621] hover:border-[#FDD621] hover:text-gray-900'
            }`}>
              Contact Us
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-white/20"
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/20">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => {
                const isActiveLink = activeNav === link.name;
                return (
                  <button
                    key={link.path}
                    onClick={(e) => handleNavLinkClick(link.name, e, true)}
                    className={`text-sm font-medium transition-colors duration-200 ${isActiveLink ? 'text-[#FDD621]' : 'text-white hover:text-[#FDD621]'}`}
                  >
                    {link.name}
                  </button>
                );
              })}
              <div className="pt-4 border-t border-white/20 space-y-2">
                <button onClick={(e)=>handleNavLinkClick('Contact', e, true)} className="w-full px-4 py-2 text-sm font-medium text-white bg-transparent border-2 border-white rounded-lg hover:bg-[#FDD621] hover:border-[#FDD621] hover:text-gray-900 transition-colors">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;