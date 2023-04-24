import React, { useState } from 'react';
import { MenuOutlined } from '@ant-design/icons';
import './all.css/heder.css';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'; // Импортируем компонент Routes

import MainShop from './mainshop'; // Импортируем компонент MainShop из соответствующего файла
import Contact from './contact';
import Karzina from './karzina';
import App from './App';
import Dostavka from './dostavka';

function Header() {
  const [showMenu, setShowMenu] = useState(false);

  function toggleMenu() {
    setShowMenu(!showMenu);
  }

  return (
    <header>
      <Router>
        <nav className={`navbar ${showMenu ? 'show' : ''}`}>
          <Link to="/" className="logo">
            Cristal
          </Link>
          <div className="navbar-menu">
            <ul>
              <li style={{ display: 'inline-block', paddingRight: '0.5cm' }}>
                <Link to="/App">Главная</Link> {/* Добавляем эту строку */}
              </li>
              <li style={{ display: 'inline-block', paddingRight: '0.5cm' }}>
                <Link to="/mainshop">Каталог</Link> {/* Изменили ссылку на /mainshop */}
              </li>
              <li style={{ display: 'inline-block', paddingRight: '0.5cm' }}>
                <Link to="/blog">Процедуры</Link>
              </li>
              <li style={{ display: 'inline-block', paddingRight: '0.5cm' }}>
              <Link to="/contact">Контакты</Link> {/* Добавляем эту строку */}
              </li>
              <li style={{ display: 'inline-block', paddingRight: '0.5cm' }}>
                <Link to="/karzina">Карзина</Link>
              </li>
              <li style={{ display: 'inline-block', paddingRight: '0.5cm' }}>
              <Link to="/dostavka">Доставка</Link> {/* Изменяем ссылку на /dostavka */}
              </li>
            </ul>
          </div>
          <button className="menu-toggle" onClick={toggleMenu}>
            <MenuOutlined />
          </button>
        </nav>
        <Routes> {/* Добавляем компонент Routes */}
        <Route exact path="/dostavka" element={<Dostavka />} /> {/* Добавляем маршрут для /dostavka */}
        <Route exact path="/App" element={<main />} /> {/* Добавляем эту строку */}
        <Route exact path="/contact" element={<Contact />} /> {/* Добавляем эту строку */}
        <Route exact path="/karzina" element={<Karzina />} /> {/* Изменяем компонент MainShop на элемент */}
          <Route exact path="/mainshop" element={<MainShop />} /> {/* Изменяем компонент MainShop на элемент */}
        </Routes>
      </Router>
    </header>
  );
}

export default Header;
