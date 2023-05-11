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
      <Header />

     
     
      <Footer />
    </div>
  );
}

export default Main;