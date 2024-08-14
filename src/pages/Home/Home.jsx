import React from 'react'
import { Download } from '../../components/Download'
import Home1 from '../../assets/home1.svg'
import Home2 from '../../assets/home2.svg'
import Home3 from '../../assets/home3.svg'
import Home4 from '../../assets/home4.svg'
import Home5 from '../../assets/home5.svg'
import Home6 from '../../assets/home6.svg'
import Home7 from '../../assets/home7.svg'
import Home8 from '../../assets/home8.svg'
import { Container, Image } from 'react-bootstrap'
import './styles.css'
export const Home = () => {
  return (
    <>
      <Download />
      <div>
        <Container className='d-flex flex-row'>
          <div className='safer'>
            <p className='safer-title'>
              You’re one tap away from a safer Internet.
            </p>
            <hr className="hr" />
            <p className='first-txt'>When the Internet was built, computers weren’t mobile. They sat in offices next to data centers. The Internet has changed but the assumptions made 30 years ago are making your experience slower and less secure.
              Warp with WarpVPN replaces the connection between your device and the Internet with a modern, optimized, protocol.</p>
            <button className='learn-btn'>Learn More</button>
          </div>

          <Image src={Home2} className='img-home2'></Image>
          <Image src={Home1} className='img-home1'></Image>
        </Container>
        <Container className='d-flex flex-row mt-12'>
          <Image src={Home3} className='img-home3'></Image>
          <div className='mt'>
            <p className='safer-title'>Fast. Free. Private.</p>
            <hr className="hr" />
            <p className='first-txt'>Your Internet service provider can see every site and app you use even if they’re encrypted. Some providers even sell this data, or use it to target you with ads.
              WarpVPN prevents anyone from snooping on you by encrypting more of the traffic leaving your device. We believe privacy is a right. We won't sell your data, ever.</p>
            <button className='learn-btn'>Share with twitter</button>
          </div>
        </Container>
        <Container className='d-flex flex-row'>
          <Image src={Home4} className='img-home4'></Image>
          <div className='safer'>
            <div className='safer-title'>
              <p>Use the Internet fast-lane</p>
              <hr className="hr" />
              <p className='first-txt'>In addition to the full WarpVPN service, WARPVPN+ subscribers get access to a larger network. More cities to connect to means you’re likely to be closer to a Cloudflare data center – which can reduce the latency between your device and Cloudflare and improve your browsing speed.</p>
            </div>
            <button className='learn-btn'>Learn More</button>
          </div>
          <Image src={Home2} className='img-home52'></Image>
          <Image src={Home5} className='img-home5'></Image>
        </Container>
        <Container className='d-flex flex-row'>
          <Image src={Home6} className='img-home6'></Image>
          <div className='left-txt'>
            <p className='safer-title'>Built on a massive network.</p>
            <hr className="hr" />
            <p className='first-txt'>
              WARPVPN the fastest DNS resolver on Earth.
              Your connection to WARPVPN is fast and reliable wherever you live and wherever you go.
            </p>

            <div className="container mt-4" style={{ fontFamily: 'Helvetica Neue' }}>
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
          </div>
        </Container>


        <Container className='d-flex flex-row'>
          <div className='safer available'>
            <p className='safer-title'>
              Now available for macOS and Windows
            </p>
            <hr className="hr" />
            <p className='first-txt'>Millions of people secure their phone Internet connections with the WARPVPN app today.
              We’ve extended the same protection to macOS and Windows.</p>
            <button className='learn-btn'>Learn More</button>
          </div>
          <Image src={Home7} className='img-home7'></Image>
        </Container>

        <Container className='d-flex flex-row'>
          <Image src={Home8} className='img-home8'></Image>
          <div className='fast'>
            <p className='safer-title'>New: use WARPVPN with your team</p>
            <hr className="hr" />
            <p className='first-txt'>Bring the power of WARPVPN to your business by integrating WARPVPN with Gateway. Enroll user devices in your organization and protect your remote workforce from threats online.</p>
            <button className='learn-btn'>Share with twitter</button>
          </div>
        </Container>
      </div>
    </>
  )
}
