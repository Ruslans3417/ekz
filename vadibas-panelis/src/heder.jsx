import React, { useState } from 'react';
import { MenuOutlined } from '@ant-design/icons';
import './all.css/heder.css';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'; // Импортируем компонент Routes

import MainShop from './mainshop'; // Импортируем компонент MainShop из соответствующего файла
import Contact from './contact';
import Karzina from './karzina';
import Main from './main';
import Dostavka from './dostavka';
import Blog from './blog';
import Reg from './reg';
import Login from './login';


function Header() {
  const [showMenu, setShowMenu] = useState(false);

  function toggleMenu() {
    setShowMenu(!showMenu);
  }

  return (
    <header>
      <Router>
        <nav className={`navbar ${showMenu ? 'show' : ''}`}>
        <a href="/main" className="logo">
            Cristal
            </a>
          <div className="navbar-menu">
            <ul>
              
              <li style={{ display: 'inline-block', paddingRight: '0.5cm' }}>
                <a href="/mainshop">Каталог</a> {/* Изменили ссылку на /mainshop */}
              </li>

              <li style={{ display: 'inline-block', paddingRight: '0.5cm' }}>
                <a href="/reg">reg</a> {/* Изменили ссылку на /mainshop */}
              </li>
              <li style={{ display: 'inline-block', paddingRight: '0.5cm' }}>
                <a href="/login">login</a> {/* Изменили ссылку на /mainshop */}
              </li>

              <li style={{ display: 'inline-block', paddingRight: '0.5cm' }}>
                <a href="/blog">Процедуры</a>
              </li>
              <li style={{ display: 'inline-block', paddingRight: '0.5cm' }}>
              <a href="/contact">Контакты</a> {/* Добавляем эту строку */}
              </li>
              <li style={{ display: 'inline-block', paddingRight: '0.5cm' }}>
                <a href="/karzina">Карзина</a>
              </li>
              <li style={{ display: 'inline-block', paddingRight: '0.5cm' }}>
              <a href="/dostavka">Доставка</a> {/* Изменяем ссылку на /dostavka */}
              </li>
            </ul>
          </div>
          <button className="menu-toggle" onClick={toggleMenu}>
            <MenuOutlined />
          </button>
        </nav>
        <Routes> {/* Добавляем компонент Routes */}
        <Route exact path="/reg" element={<Reg />} /> {/* Изменяем компонент MainShop на элемент */}
        <Route exact path="/login" element={<Login />} /> {/* Изменяем компонент MainShop на элемент */}


        <Route exact path="/main" element={<Main />} /> {/* Изменяем компонент MainShop на элемент */}
        <Route exact path="/blog" element={<Blog />} /> {/* Изменяем компонент MainShop на элемент */}
        <Route exact path="/dostavka" element={<Dostavka />} /> {/* Добавляем маршрут для /dostavka */}
        <Route exact path="/contact" element={<Contact />} /> {/* Добавляем эту строку */}
        <Route exact path="/karzina" element={<Karzina />} /> {/* Изменяем компонент MainShop на элемент */}
        <Route exact path="/mainshop" element={<MainShop />} /> {/* Изменяем компонент MainShop на элемент */}
        </Routes>
      </Router>
    </header>
  );
}



export default Header;
