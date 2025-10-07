import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout';
import Hero from './Pages/Hero';
import Features from './Pages/Features';
import Vendors from './Pages/Vendors';
import Team from './Pages/Team';
import Blogs from './Pages/Blogs';
import FAQ from './Pages/FAQ';
import Contact from './Pages/Contact';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Hero />} />
          <Route path="features" element={<Features />} />
          <Route path="vendors" element={<Vendors />} />
          <Route path="team" element={<Team />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;