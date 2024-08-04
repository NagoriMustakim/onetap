import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export const Footer = () => {
  return (
    <div style={{ marginTop: "25rem" }}>
      <hr
        style={{
          width: "1715.56px",
          background: "linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(80, 60, 130, 0.7) 47.1%, rgba(255, 255, 255, 0) 100%)",
          height: "2px",
        }}
      />
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
      <hr
        style={{
          width: "1715.56px",
          background: "linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(80, 60, 130, 0.7) 47.1%, rgba(255, 255, 255, 0) 100%)",
          height: "2px",
        }}
      />

      <p className='text-end cpr'>Copyright © 2024 WARPVPN, Inc. All rights reserved</p>
    </div>
  )
}
