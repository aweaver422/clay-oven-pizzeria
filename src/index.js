import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from './Layout';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Specials from './pages/Specials';
import Order from './pages/Order';
import ContactUs from './pages/ContactUs';
import Careers from './pages/Careers';

export default function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="menu" element={<Menu />} />
          <Route path="specials" element={<Specials />} />
          <Route path="order" element={<Order />} />
          <Route path="contact-us" element={<ContactUs />} />
          <Route path="careers" element={<Careers />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
