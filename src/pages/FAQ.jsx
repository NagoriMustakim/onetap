import React from 'react'
import Home7 from '../assets/home7.svg'
import { Accordion, AccordionBody, AccordionHeader, AccordionItem, Image } from 'react-bootstrap'
import { useLocation } from 'react-router-dom';
import ReactGA from 'react-ga';
import { useEffect } from "react"
export const FAQ = () => {
  ReactGA.initialize('G-NWWERD10E1')
  const location = useLocation();
  useEffect(() => {
    ReactGA.pageview(location.pathname + location.search);
  }, [location]);

  return (
    <div>
      <div className='faq-cont'>
        <div className='center'>
          <p className='sub-title2 faq'>Frequently Asked Questions</p>
        </div>

        <div className='display-col'>
          <Image src={Home7}></Image>
          <div className='accordian'>
            <Accordion defaultActiveKey="0">
              <AccordionItem eventKey="0">
                <AccordionHeader>
                  What is WARPVPN?
                </AccordionHeader>
                <AccordionBody>
                  When you request to visit an application like cloudflare.com, your computer needs to know which server to connect you to so that it can load the application. Computers don’t know how to do this name to address translation, so they ask a specialized server to do it for them.
                  This specialized server is called a DNS recursive resolver. The resolver’s job is to find the address for a given name, like 2400:cb00:2048:1::c629:d7a2 for cloudflare.com, and return it to the computer that asked for it.
                  Computers are configured to talk to specific DNS resolvers, identified by IP address. Usually, the configuration is managed by your ISP (like Comcast or AT&T) if you’re on your home or wireless internet, and by your network administrator if you’re connected to the office internet. You can also change the configured DNS resolver your computer talks to yourself.
                  What do DNS resolvers do?
                </AccordionBody>
              </AccordionItem>
              <AccordionItem eventKey="1">
                <AccordionHeader>
                  What do DNS resolvers do?
                </AccordionHeader>
                <AccordionBody>
                  DNS resolvers play a crucial role in the Domain Name System (DNS), which is essential for translating human-readable domain names (like www.example.com) into IP addresses that computers use to identify each other on the network
                </AccordionBody>
              </AccordionItem>
              <AccordionItem eventKey="2">
                <AccordionHeader>
                  Does WARPVPN have IPv6 support?
                </AccordionHeader>
                <AccordionBody>
                  Yes WARPVPN has full IPv6 support.
                </AccordionBody>
              </AccordionItem>
              <AccordionItem eventKey="3">
                <AccordionHeader>
                  How can I clear WARPVPN’s DNS cache?
                </AccordionHeader>
                <AccordionBody>
                  You can refresh WARPVPN DNS cache for domain names by using the purge cache tool. You have to enter the domain name, pick the DNS record type (or types) and hit the ‘Purge Cache’ button.
                </AccordionBody>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  )
}
