import React from 'react';
import { Link } from 'react-router-dom';
import './all.css/blog.css';

const Box = ({ imageSrc, link }) => {
  return (
    <div className="box">
      <img src={imageSrc} alt="Box Image" />
      <Link to={link}>Записаться</Link>
    </div>
  );
};

const BoxContainer = () => {
  return (
    <div className="box-container">
      <Box
        imageSrc="https://picsum.photos/id/237/200/300"
        link="/zap"
      />
      <Box
        imageSrc="https://picsum.photos/id/238/200/300"
        link="/zap"
      />
      <Box
        imageSrc="https://picsum.photos/id/239/200/300"
        link="/zap"
      />
      <Box
        imageSrc="https://picsum.photos/id/240/200/300"
        link="/zap"
      />
    </div>
  );
};

export default BoxContainer;