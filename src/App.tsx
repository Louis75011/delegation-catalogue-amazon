/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Catalogue from './pages/Catalogue';
import Objectif from './pages/Objectif';
import Contact from './pages/Contact';
import MentionsLegales from './pages/MentionsLegales';
import Product from './pages/Product';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-primary-bg">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nos-livres" element={<Catalogue />} />
          <Route path="/livre/:id" element={<Product />} />
          <Route path="/objectif" element={<Objectif />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/mentions-legales" element={<MentionsLegales />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

