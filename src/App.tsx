/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './lib/i18n';
import Layout from './components/Layout';
import Home from './pages/Home';
import Classes from './pages/Classes';
import KidsClass from './pages/KidsClass';
import FamilyClass from './pages/FamilyClass';
import PrivateClass from './pages/PrivateClass';
import About from './pages/About';
import Booking from './pages/Booking';
import Contact from './pages/Contact';
import Faq from './pages/Faq';
import Gallery from './pages/Gallery';
import Blog from './pages/Blog';

export default function App() {
  return (
    <LanguageProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/classes" element={<Classes />} />
            <Route path="/classes/kids" element={<KidsClass />} />
            <Route path="/classes/family" element={<FamilyClass />} />
            <Route path="/classes/private" element={<PrivateClass />} />
            <Route path="/about" element={<About />} />
            <Route path="/us" element={<About />} />
            <Route path="/service" element={<Classes />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </Layout>
      </Router>
    </LanguageProvider>
  );
}
