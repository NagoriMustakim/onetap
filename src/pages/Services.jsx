import React from 'react'

export const Services = () => {
  return (
    <div className='d-flex flex-column mb-3 faq-cont faq-container'>
      <div className='faq-header'>
        <p className='last-updated'>Last updated: November 24, 2023</p>
        <h1 className='terms-title'>Terms of Service</h1>
      </div>

      <div className="outer-container">
        <div className="inner-container">
          <ol className="terms-list">
            <li>Acceptance of Terms
              <p>By using Lookfront, a Virtual Meeting Platform For Online Conference Video, you agree to comply with these Terms of Service.</p>
            </li>
            <li>Use of Services
              <p>You agree to use our services in accordance with all applicable laws and regulations. You are responsible for maintaining the confidentiality of your account information.</p>
            </li>
            <li>User Conduct
              <p>You agree not to engage in any conduct that may:</p>
              <ul>
                <li>Violate any laws or regulations</li>
                <li>Infringe upon the rights of others</li>
                <li>Disrupt the functionality or security of our services</li>
              </ul>
            </li>
            <li>Intellectual Property
              <p>All content and materials available on our website are protected by intellectual property laws. You may not use our content without permission.</p>
            </li>
            <li>Limitation of Liability
              <p>We are not liable for any damages or losses resulting from your use of our services.</p>
            </li>
            <li>Termination
              <p>We reserve the right to terminate or suspend your access to our services at our discretion, without notice.</p>
            </li>
            <li>Governing Law
              <p>These Terms of Service shall be governed by and construed in accordance with the laws of Australia.</p>
            </li>
          </ol>
          <p className="disclaimer">
            This content is a starting point and may need adjustments to fit the specific nature of your web app. It's highly recommended to consult with legal professionals to ensure compliance with relevant laws and regulations in your jurisdiction.
          </p>
        </div>
      </div>
    </div >
  )
}