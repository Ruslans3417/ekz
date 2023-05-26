import React from 'react';
import { Link } from 'react-router-dom';
import './all.css/blog.css';
import image1 from './corusel/1.png'; // Import the image
import image2 from './corusel/2.png';
import image3 from './corusel/3.png';
import image4 from './corusel/4.png';
import image5 from './corusel/5.png';
import image7 from './corusel/7.png';
import image8 from './corusel/8.png';
import image9 from './corusel/9.png';
import image10 from './corusel/10.png';
import image11 from './corusel/11.png';
import image12 from './corusel/12.png';
import image13 from './corusel/13.png';


const Box = ({ imageSrc, link }) => {
  return (
    <div className="box">
      <img src={imageSrc} alt="Box Image" />
      <Link to={link} style={{ backgroundColor: 'purple' }}>Записаться</Link>
    </div>
  );
};

const BoxContainer = () => {
  return (
    <div className="box-container">
      <Box
        imageSrc={image1} // Use the imported image
        link="/zap"
      />
      <Box
        imageSrc={image2} // Use the imported image
        link="/zap"
      />
      <Box
        imageSrc={image3} // Use the imported images
          link="/zap"
      />
      <Box
        imageSrc={image4} // Use the imported images
        link="/zap"
      />
            <Box
        imageSrc={image5} // Use the imported images
        link="/zap"
      />

      <Box
        imageSrc={image7} // Use the imported images
        link="/zap"
      />
      <Box
        imageSrc={image8} // Use the imported images
        link="/zap"
      />
            <Box
        imageSrc={image9} // Use the imported images
        link="/zap"
      />
      <Box
        imageSrc={image10} // Use the imported images
        link="/zap"
      />
      <Box
        imageSrc={image11} // Use the imported images
        link="/zap"
      />
      <Box
        imageSrc={image12} // Use the imported images
        link="/zap"
      />
            <Box
        imageSrc={image13} // Use the imported images
        link="/zap"
      />

    </div>
  );
};

export default BoxContainer;