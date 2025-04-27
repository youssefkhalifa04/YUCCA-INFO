import React from 'react';
import { BrowserRouter as Router, Routes, Route, Form } from 'react-router-dom';
import { NextUIProvider } from "@nextui-org/react";
import Landing from './pages/Landing.jsx';
import About from './pages/About.jsx';
import Services from './pages/Services.jsx';
import Formulaire from './pages/Form.jsx';
import Contact from './pages/Contact.jsx';
function App() {
  return (
    <NextUIProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/àpropos" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/form" element={<Formulaire />} />
          <Route path="/contact" element={<Contact />} />
          
          
          
        </Routes>
      </Router>
    </NextUIProvider>
  );
}

export default App;
