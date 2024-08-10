import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <div className='custom-container'>
      <hr className='custom-hr' />

      <Container className="footer-container">
        <div className="footer-content">
          <div className="footer-logo">
            <h1>WARPVPN</h1>
            <p>
              We are the bridge that connects hearts and minds globally. Through
              seamless video communication.
            </p>
          </div>

          <div className="footer-links">
            <Link to={'/faq'}>FAQ</Link>
            <Link to={'/service'}>Terms of Service</Link>
            <Link to={'/policy'}>Privacy Policy</Link>
            <Link to={'/purge'}>Purge Cache</Link>
          </div>
        </div>
      </Container>

      <hr className='custom-hr' />

      <p className='text-end cpr'>
        Copyright © 2024 WARPVPN, Inc. All rights reserved
      </p>
    </div>
  );
};
