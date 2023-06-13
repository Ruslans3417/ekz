import React, { useState } from 'react';
import { MenuOutlined } from '@ant-design/icons';
import './all.css/heder.css';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

import MainShop from './mainshop';
import Contact from './contact';
import Karzina from './karzina';
import Main from './main';
import Dostavka from './dostavka';
import Blog from './blog';
import Reg from './reg';
import Login from './login';
import Admin from './admin';
import Zap from './zap';

function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Состояние авторизации

  function toggleMenu() {
    setShowMenu(!showMenu);
  }

  function handleLogin() {
    // Логика для авторизации пользователя
    setIsLoggedIn(true);
  }

  function handleLogout() {
    // Логика для выхода пользователя
    setIsLoggedIn(false);
  }

  return (
    <header>
      <Router>
        <nav className={`navbar ${showMenu ? 'show' : ''}`}>
          <Link to="/main" className="logo">crystalino</Link>
          <div className="navbar-menu">
            <ul>
              <li style={{ display: 'inline-block', paddingRight: '0.5cm' }}>
                <Link to="/mainshop">Katalogs</Link>
              </li>
              <li style={{ display: 'inline-block', paddingRight: '0.5cm' }}>
                <Link to="/admin">Admin</Link>
              </li>
              <li style={{ display: 'inline-block', paddingRight: '0.5cm' }}>
                <Link to="/blog">Procedūras</Link>
              </li>
              <li style={{ display: 'inline-block', paddingRight: '0.5cm' }}>
                <Link to="/contact">Kontakti</Link>
              </li>
              <li style={{ display: 'inline-block', paddingRight: '0.5cm' }}>
                <Link to="/karzina">Grozs</Link>
              </li>
              <li style={{ display: 'inline-block', paddingRight: '0.5cm' }}>
                <Link to="/dostavka">Piegāde</Link>
              </li>
              {!isLoggedIn ? (
                <li style={{ display: 'inline-block', paddingRight: '0.5cm' }}>
                  <Link to="/reg">Registration</Link>
                </li>
              ) : null}
              {isLoggedIn ? (
                <li style={{ display: 'inline-block', paddingRight: '0.5cm' }}>
                  <button onClick={handleLogout}>Logout</button>
                </li>
              ) : null}
            </ul>
          </div>
          <button className="menu-toggle" onClick={toggleMenu}>
            <MenuOutlined />
          </button>
        </nav>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/reg" element={<Reg />} />
          <Route path="/zap" element={<Zap />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/main" element={<Main />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/dostavka" element={<Dostavka />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/karzina" element={<Karzina />} />
          <Route path="/mainshop" element={<MainShop />} />
        </Routes>
      </Router>
    </header>
  );
}

export default Header;
