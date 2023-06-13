import React from 'react';
import { Link } from 'react-router-dom';
import './all.css/blog.css';
import img1 from "./corusel/1.png";
import img2 from "./corusel/2.png";
import img3 from "./corusel/3.png";
import img4 from "./corusel/4.png";
import img5 from "./corusel/5.png";
import img6 from "./corusel/6.png";
import img7 from "./corusel/7.png";
import img8 from "./corusel/8.png";
import img9 from "./corusel/9.png";
import img10 from "./corusel/10.png";
import img11 from "./corusel/11.png";
import img12 from "./corusel/12.png";
import img13 from "./corusel/1.png";
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
