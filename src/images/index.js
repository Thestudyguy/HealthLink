import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './components/navbar';
import Banner from '../components/banner';
import Features from '../components/features';
import Showcase from '../components/showcase';
import Department from '../components/department';
import "./styles/style.css";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <Banner />
    <Features />
    <Showcase />
    <Department />
  </React.StrictMode>
);
