import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Service from './Components/Service';
import Menu from './Components/Menu';
import Team from './Components/Team';
import Booking from './Components/Booking';
import Contact from './Components/Contact';
import Testimonal from './Components/Testimonal';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Card from './Components/Card';
// import PaymentForm from './Components/Checkout';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if user is logged in (implement this logic based on your requirements)
    // For demonstration purposes, you can set isLoggedIn to true or fetch from a context/api
    setIsLoggedIn(true);
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/card" element={<Card />} />
        <Route path="/team" element={<Team />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/testimonial" element={<Testimonal />} />
      </Routes>
    </Router>
  );
};

export default App;
