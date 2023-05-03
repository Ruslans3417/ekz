import React from 'react';
import { Typography, Divider } from 'antd';
import { InstagramOutlined, FacebookOutlined, WhatsAppOutlined } from '@ant-design/icons';
import './all.css/contact.css';

const { Title, Paragraph } = Typography;

const ContactPage = () => {
  return (
    <div style={{ padding: '24px', maxWidth: '800px', margin: '0 auto' }}>
      <Title style={{ textAlign: 'center' }}> </Title>
      <Divider />

      <Title level={2}>Our Location</Title>
      <Paragraph>
        123 Main Street, Suite 101 <br />
        Anytown, USA 12345
      </Paragraph>

      <Title level={2}>Contact Information</Title>
      <Paragraph>
        Phone: (123) 456-7890 <br />
        Email: info@cosmetics.com <br />
        <a href="https://www.instagram.com/your_instagram_profile" target="_blank" rel="noopener noreferrer">
          <InstagramOutlined /> Instagram
        </a>
        <br />
        <a href="https://www.facebook.com/your_facebook_profile" target="_blank" rel="noopener noreferrer">
          <FacebookOutlined /> Facebook
        </a>
        <br />
        <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
          <WhatsAppOutlined /> WhatsApp
        </a>
      </Paragraph>

      <Title level={2}>Business Hours</Title>
      <Paragraph>
        Monday - Friday: 9:00 AM - 5:00 PM <br />
        Saturday: 10:00 AM - 2:00 PM <br />
        Sunday: Closed
      </Paragraph>

      <Title level={2}>Map</Title>
      {/* Вставляем карту с указанием координат точки на Graudu iela 27 в Лиепае */}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1973.1241058794153!2d21.01009871573167!3d56.51336398013592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46ef42cfe08ff2e1%3A0x4a4ab4e6d2607756!2s27%20Graudu%20iela%2C%20Liep%C4%81ja%2C%20LV-3412!5e0!3m2!1sen!2slv!4v1654238835356!5m2!1sen!2slv"
        width="100%"
        height="400"
        frameBorder="0"
        style={{ border: 'none', borderRadius: '8px', marginTop: '16px' }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default ContactPage;