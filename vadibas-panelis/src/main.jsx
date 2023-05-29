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
              padding: '0 30px', // добавлено свойство padding
            }}
       >
        
    <h1>Sveiki!</h1> 
Mani sauc Natalija. Es esmu kosmetoloģe-estētiķe no Liepājas.
Lielākā daļa mani pazīst kā Crystalino. Es padaru meitenes laimīgas gan savā kabinetā, gan tiešsaistē. 
Piedāvāju veidot jūsu mājas kopšanu, izmantojot profesionālās līnijas un Korejas produktus. Būšu priecīga, 
ja jūs uzticēsiet man rūpes par jūsu skaistumu un ādas veselību!
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
