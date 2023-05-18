import React, { useState } from 'react';
import './all.css/App.css';
import Header from './heder';
import { Carousel, Card, Button, Typography } from 'antd';
import Footer from './Footer';
import './all.css/car.css';

const { Title } = Typography;
const { Meta } = Card;

function Main() {
  const itemsPerPage = 4;
  const totalItems = 12;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  

  return (
    <div className="Main">
        <div
          style={{
            paddingTop: '50px',
            paddingBottom: '50px',
            marginTop: '50px',
            marginBottom: '50px',
          }}
        >
          <Title
            level={1}
            style={{
              textAlign: 'center',
              fontSize: '2rem',
              fontWeight: 'bold',
              textShadow: '1px 1px #ccc',
            }}
       >
        
    <h1>Привет!</h1> 
    ‌Меня зовут Наталия. Я косметолог-эстетист из Лиепаи. Большинство меня знает, как Crystalino
    ‌Делаю счастливыми девушек, как у себя в кабинете, так и онлайн. 
    ‌
    ‌Предлагаю собрать ваш домашний уход, как из профессиональных линеек, так и из корейских средств.
    ‌
    ‌Я буду рада, если заботу о вашей красоте и здоровье кожи доверите именно мне!
    </Title>
        </div> 
      
      <main className="main-content">
      <div className="carousel-container">
  <h2 style={{ textAlign: 'center' }}>Ваши отзывы</h2>
  <Carousel autoplay>
    <div>
      <img src="https://via.placeholder.com/200x100" alt="review" style={{ width: '50%' }} />
    </div>
    <div>
      <img src="https://via.placeholder.com/200x100" alt="review" style={{ width: '50%' }} />
    </div>
    <div>
      <img src="https://via.placeholder.com/200x100" alt="review" style={{ width: '50%' }} />
    </div>
  </Carousel>
    </div>

    <div className="carousel-container">
  <h2 style={{ textAlign: 'center' }}>Продукты</h2>
  <Carousel autoplay dots dotPosition="top">
    <div>
      <img src="https://via.placeholder.com/100x50" alt="review" style={{ width: '50%' }} />
      <div style={{ backgroundColor: 'gray', height: '30px', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: '40px' }}>
        <p>Крема</p>
      </div>
    </div>
    <div>
      <img src="https://via.placeholder.com/100x50" alt="review" style={{ width: '50%' }} />
      <div style={{ backgroundColor: 'gray', height: '30px', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: '40px' }}>
        <p>Патчи</p>
      </div>
    </div>
    <div>
      <img src="https://via.placeholder.com/100x50" alt="review" style={{ width: '50%' }} />
      <div style={{ backgroundColor: 'gray', height: '30px', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: '40px' }}>
        <p>Пилинг и скраб</p>
      </div>
    </div>
  </Carousel>
  
</div>
     
      </main>

    </div>
  );
}

export default Main;