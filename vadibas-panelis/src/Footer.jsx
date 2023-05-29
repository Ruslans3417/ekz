import React from 'react';
import { Row, Col } from 'antd';
import { InstagramOutlined, FacebookOutlined, WhatsAppOutlined } from '@ant-design/icons';
import './all.css/footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="block">
          <h3 className="footer-heading"style={{marginTop: "50px"}}>Компания</h3>
          <div className="footer-section-content">
          <ul className="footer-contact-list">
            <p>Мы - компания, которая предлагает косметику высокого качества по доступным ценам.</p>
            </ul>
          </div>
        </div>
        <div className="block">
          <h3 className="footer-heading"style={{marginTop: "50px"}}>Контакты</h3>
          <div className="footer-section-content">
            <ul className="footer-contact-list">
              <p>Телефон: +371 20061409</p>
              <p>Email: crystalino.shop@gmail.com</p>
              <p>Адрес: Graudu iela 27</p>
            </ul>
          </div>
        </div>
        <div className="block">
          <h3 className="footer-heading"style={{marginTop: "50px"}}>Социальные сети</h3>
          <div className="footer-section-content">
            <ul className="footer-social-list">
              <p>
                <a href="https://www.facebook.com/crystalino.shop">
                  <FacebookOutlined />
                  facebook
                </a>
              </p>
              <p>
                <a href="https://www.instagram.com/crystalino.beauty/">
                  <InstagramOutlined />
                  instagram
                </a>
              </p>
              <p>
                <a href="https://api.whatsapp.com/send?phone=37120061409&text=Labdien%21%0AV%C4%93los%20pierakst%C4%ABties%20uz%20proced%C5%ABru">
                  <WhatsAppOutlined />
                  whatsapp
                </a>
              </p>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023. Все права защищены.</p>
      </div>
    </footer>
  );
}

export default Footer;
