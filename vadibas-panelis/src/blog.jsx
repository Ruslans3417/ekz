import React from 'react';
import { Link } from 'react-router-dom';
import './all.css/blog.css';

const Box = ({ imageSrc, link }) => {
  return (
    <div className="box">
      <img src={imageSrc} alt="Box Image" />
      <Link to={link}>Reģistrēties</Link>
    </div>
  );
};

const BoxContainer = () => {
  return (
    <div className="box-container">
      <Box
        imageSrc={require('./corusel/1.png')}
        link="/zap"
      />
      <Box
        imageSrc={require('./corusel/2.png')}
        link="/zap"
      />
      <Box
        imageSrc={require('./corusel/3.png')}
        link="/zap"
      />
      <Box
        imageSrc={require('./corusel/4.png')}
        link="/zap"
      />
      <Box
        imageSrc={require('./corusel/5.png')}
        link="/zap"
      />

            <Box
        imageSrc={require('./corusel/7.png')}
        link="/zap"
      />
            <Box
        imageSrc={require('./corusel/8.png')}
        link="/zap"
      />
            <Box
        imageSrc={require('./corusel/9.png')}
        link="/zap"
      />
            <Box
        imageSrc={require('./corusel/10.png')}
        link="/zap"
      />
            <Box
        imageSrc={require('./corusel/11.png')}
        link="/zap"
      />
            <Box
        imageSrc={require('./corusel/12.png')}
        link="/zap"
      />
            <Box
        imageSrc={require('./corusel/13.png')}
        link="/zap"
      />

    </div>
  );
};

export default BoxContainer;
