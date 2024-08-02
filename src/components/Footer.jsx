import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export const Footer = () => {
  return (
    <div>

      <hr className='center w-25 ' />

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
            <Link to={'/FAQ'}>FAQ</Link>
            <Link to={'/services'}>Terms of Service</Link>
            <Link to={'/policy'}>Privacy Policy</Link>
            <Link to={'/cache'}>Purge Cache</Link>
          </div>
        </div>
      </Container>
      <hr className='center w-25 ' />
      <p className='text-end cpr'>Copyright © 2024 LookFront Video Communications, Inc. All rights reserved</p>
    </div>
  )
}
