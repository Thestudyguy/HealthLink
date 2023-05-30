import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './components/navbar';
import Banner from './components/banner';
import Features from './components/features';
import Showcase from './components/showcase';
import Department from './components/department';
import Testimonies from './components/testimonies';
import Email from './components/email';
import Banner2 from './components/Staffs';
import About from './components/about';
import Footer from './components/footer';
import "./styles/style.css";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <Banner />
    <Features />
    <Showcase />
    <Department />
    <Testimonies />
    <Email />
    <Banner2 />
    <About />
    <Footer />
  </React.StrictMode>
);
