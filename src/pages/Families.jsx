import React from 'react'
import Home9 from '../assets/home9.svg';
import Home1 from '../assets/home1.svg';
import fam2 from '../assets/fam2.svg';
import fam3 from '../assets/home6.svg';
import fam4 from '../assets/fam4.svg';
import fam5 from '../assets/fam5.svg';
import { Container, Image } from 'react-bootstrap';
export const Families = () => {
  return (
    <div>
      <h1 className='center title-home'>WARPVPN</h1>
      <div className='center'>
        <p className='sub-title'>Free protection for your home Internet.</p>
      </div>
      <Image src={Home9} style={{ marginLeft: "8rem" }} />

      <div className='d-flex flex-row'>
        <div className='pro'>
          <p className='safer-title'>
            Protecting home Internet connections from malware.
          </p>
          <hr className="hr" />
          <p className='first-txt'>With home Internet usage on the rise, it’s never been more important to protect your family from dangerous and malicious sites.
            Warp for Families is built on top of the same site categorization and filtering technology that powers Cloudflare’s enterprise products. It uses Cloudflare’s Internet intelligence to filter content on your home Internet network.</p>
        </div>

        <Image src={fam2} className='img-fam2'></Image>
        <Image src={Home1} className='img-fam1'></Image>
      </div>
      <div className='center'>
        <p className='sub-title2'>Built on a massive network</p>
      </div>
      <p className='sub-txt'>WARPVPN with Families uses the fastest public DNS resol
        on Earth to make your internet connection faster.
        <br />
        Don’t take our word for it. The independent DNS
        monitor DNSPerf ranks 1, Warp the fastest DNS servic
        the world. Since nearly everything you do on the
        Internet starts with a DNS request, choosing the fast
        DNS directory across all your devices will accelera
        almost everything you do online.</p>

      <div className="container mt-4" style={{ width: "500px" }}>
        <div className="row align-items-center mb-3">
          <div className="col-md-2">
            <span className="provider-name">WarpVPN</span>
          </div>
          <div className="col-md-8">
            <div className="progress" style={{ height: "10px" }}>
              <div className="progress-bar progress-bar-warpvpn" role="progressbar" style={{ width: "100%" }}></div>
            </div>
          </div>
          <div className="col-md-2">
            <span className="response-time">13.66ms</span>
          </div>
        </div>
        <div className="row align-items-center mb-3">
          <div className="col-md-2">
            <span className="provider-name">Google</span>
          </div>
          <div className="col-md-8">
            <div className="progress" style={{ height: "10px" }}>
              <div className="progress-bar progress-bar-google" role="progressbar" style={{ width: "90%" }}></div>
            </div>
          </div>
          <div className="col-md-2">
            <span className="response-time">22.78ms</span>
          </div>
        </div>
        <div className="row align-items-center mb-3">
          <div className="col-md-2">
            <span className="provider-name">OpenDNS</span>
          </div>
          <div className="col-md-8">
            <div className="progress" style={{ height: "10px" }}>
              <div className="progress-bar progress-bar-opendns" role="progressbar" style={{ width: "89%" }}></div>
            </div>
          </div>
          <div className="col-md-2">
            <span className="response-time">23.19ms</span>
          </div>
        </div>
      </div>

      <Container className='d-flex flex-row'>
        <Image src={fam3} className='img-fam3'></Image>
        <div className='adult-margin'>
          <p className='safer-title'>Adult content filtering.</p>
          <hr className="hr" />
          <p className='first-txt'>Keep adult content away from kids on your network with always-on content controls.</p>
        </div>
        <Image src={fam4} className='img-fam4' />
      </Container>

      <Container className='d-flex flex-row' style={{ marginTop: "12rem" }}>
        <div className='safer'>
          <p className='safer-title'>
            Automatic malware protection
          </p>
          <hr className="hr" />
          <p className='first-txt'>Attackers often hide harmful code in sites and emails that seem normal. These attacks can put your family’s private information in the wrong hands.
            Warp for Families adds a layer of malware protection to your home Wi-Fi, automatically blocking access to known malicious sites.</p>
        </div>
        <Image src={fam5} style={{ marginLeft: "10rem" }}></Image>
      </Container>

      <div className='center'>
        <p className='sub-title2'>Get Started Now</p>
      </div>
      <p className='sub-txt'>Warp for Families has two options: one that blocks only malware and another that blocks both malware and adult content. You can install it by changing the IP address settings on your home Internet router.</p>

      <Container className='d-flex justify-content-between' style={{ marginTop: "4rem" }}>
        <div style={{ border: '1px solid #000', borderRadius: '30px', padding: '50px', width: '45%' }}>
          <h3>Malware Blocking Only</h3>
          <p className='ft'>Change your router DNS to:</p>
          <ul>
            <li className='ft'>1.1.1.2</li>
            <li className='ft'>1.0.0.2</li>
          </ul>
          <p className='ft'>
            Ready to set it up? You’ll find an easy guide for every device in the
            <a href="#"> setup instructions</a> page.
          </p>
        </div>
        <div style={{ border: '1px solid #000', borderRadius: '30px', padding: '50px', width: '45%' }}>
          <h3>Malware and Adult Content Blocking Together</h3>
          <p className='ft'>Change your router DNS to:</p>
          <ul>
            <li className='ft'>1.1.1.3</li>
            <li className='ft'>1.0.0.3</li>
          </ul>
          <p className='ft'>
            Ready to set it up? You’ll find an easy guide for every device in the
            <a href="#"> setup instructions</a> page.
          </p>
        </div>
      </Container>
    </div>
  )
}
