import React from "react"
import Layout from "../components/layout"
import { Container, Row, Col, Image } from "react-bootstrap"
import { Link } from "gatsby"
import Footer from "../components/Footer"
import NavBar from "../components/NavBar"
import ContactForm from "../components/ContactForm"
import OurValue from "../components/OurValue"
import innovapost from "../assets/Customers/innovapost.png"
import worldvision from "../assets/Customers/worldvision.png"
import nrt from "../assets/Customers/nrt.png"
import community from "../assets/Customers/community.png"
import wordjack from "../assets/Customers/wordjack.png"
import xcg from "../assets/Customers/xcg.png"
import fortinet from "../assets/About/fortinet.png"
import tca from "../assets/About/tca.jpeg"
import dh from "../assets/About/dh.png"
import nwplus from "../assets/About/nwplus.png"
import h1 from "../assets/About/h1.png"
import xiaoju from "../assets/About/xiaoju.png"
import immuniweb from "../assets/About/immuniweb.png"
import huawei from "../assets/About/huawei.png"
import docker from "../assets/About/docker.png"
import housecall from "../assets/About/housecall.png"
import nicejob from "../assets/About/nicejob.png"
import armor from "../assets/About/armor.png"
import arcsight from "../assets/About/arcsight.png"
import enterasys from "../assets/About/enterasys.jpeg"
import altor from "../assets/About/altor.png"
import art from "../assets/About/art.png"
import KeepInformed from "../components/KeepInformed"
import security from "../assets/Homepage/security.svg"

const About = () => {
  return (
    <>
      <NavBar />
      <header className="header">
        <Container className="header__container">
          <Row className="header__row">
            <Col className="header__left-col">
              <div className="header-wrapper">
                <div className="main-sub-heading">
                  Grow Your Business and Risk Less with
                </div>
                <div className="main-heading">#MoreSecure</div>
                <KeepInformed />
              </div>
            </Col>
            <Col className="header__right-col">
              <Image src={security} fluid={true} />
            </Col>
          </Row>
          <div className="space-4"></div>
          <div className="space-4"></div>
          <div className="space-4"></div>
        </Container>
        <svg
          className="header__svg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#fff"
            fill-opacity="1"
            d="M0,96L60,90.7C120,85,240,75,360,90.7C480,107,600,149,720,149.3C840,149,960,107,1080,101.3C1200,96,1320,128,1380,144L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </header>
      <section className="about">
        <Container className="about__container">
          <Row className="about__row">
            <Col className="about__col">
              <div className="heading">Customers Proudly Served</div>
            </Col>
          </Row>
          <Row>
            <Col className="about__col--logos">
              <Image className="about__logo" src={innovapost} fluid={true} />
              <Image className="customers__logo" src={fortinet} fluid={true} />
              <Image className="about__logo" src={community} fluid={true} />
              <Image className="customers__logo" src={tca} fluid={true} />
            </Col>
            <Col className="about__col--logos">
              <Image className="about__logo" src={worldvision} fluid={true} />
              <Image className="about__logo" src={dh} fluid={true} />
              <Image className="about__logo" src={xcg} fluid={true} />
              <Image className="about__logo" src={nwplus} fluid={true} />
            </Col>
            <Col className="about__col--logos">
              <Image className="about__logo" src={h1} fluid={true} />
              <Image className="about__logo" src={nrt} fluid={true} />
              <Image className="about__logo" src={wordjack} fluid={true} />
              <Image className="about__logo" src={xiaoju} fluid={true} />
            </Col>
          </Row>
          <Row className="about__row">
            <Col className="about__col">
              <div className="heading">Partners</div>
            </Col>
          </Row>
          <Row>
            <Col className="about__col--logos">
              <Image className="about__logo" src={immuniweb} fluid={true} />
              <Image className="customers__logo" src={huawei} fluid={true} />
            </Col>
            <Col className="about__col--logos">
              <Image className="about__logo" src={docker} fluid={true} />
              <Image className="about__logo" src={housecall} fluid={true} />
            </Col>
            <Col className="about__col--logos">
              <Image className="about__logo" src={nicejob} fluid={true} />
              <Image className="about__logo" src={armor} fluid={true} />
            </Col>
          </Row>
          <Row className="about__row">
            <Col className="about__col">
              <div className="heading">Honored Partners</div>
            </Col>
          </Row>
          <Row className="about__row">
            <Col className="about__col-mid">
              <div className="about__text-wrapper">
                <div className="about__text-sub">
                  Proud to be partners of these companies which got successful
                  M&A:
                </div>
              </div>
              <div className="about__text-wrapper">
                <div className="about__logo-wrapper">
                  <Image className="about__logo" src={arcsight} fluid={true} />
                </div>
                <div className="about__text">
                  ArcSight: SIEM partner acquired by HP for 1.5B USD
                </div>
              </div>
              <div className="about__text-wrapper">
                <div className="about__logo-wrapper">
                  <Image className="about__logo" src={enterasys} fluid={true} />
                </div>
                <div className="about__text">
                  Enterasys: network security partner acquired by Extreme
                  Networks for 180M USD
                </div>
              </div>
              <div className="about__text-wrapper">
                <div className="about__logo-wrapper">
                  <Image className="about__logo" src={altor} fluid={true} />
                </div>
                <div className="about__text">
                  AltoNetworks: virtualization firewall partner acquired by
                  Juniper Networks for 95M USD
                </div>
              </div>
              <div className="about__text-wrapper">
                <div className="about__logo-wrapper">
                  <Image className="about__logo" src={art} fluid={true} />
                </div>
                <div className="about__text">
                  Art Of Defence: distributed web application firewall partner
                  acquired by Zeus
                </div>
              </div>
            </Col>
          </Row>
          <Row className="about__row">
            <Col className="about__col">
              <div className="heading">About US</div>
            </Col>
          </Row>
          <Row className="about__row">
            <Col xl={12} className="about__col-left">
              <div className="text-wrapper">
                <div className="dot-wrapper">
                  <div className="dot" />
                </div>
                <div className="text">
                  More Secure Computing promotes open source technologies to
                  help customers win more business in the new online economy,
                  improve operation efficiency, reduce cost, and raise security
                  maturity level.
                </div>
              </div>
              <div className="text-wrapper">
                <div className="dot-wrapper">
                  <div className="dot" />
                </div>
                <div className="text">
                  We have been providing end-to-end IT infrastructure and
                  security services since 2005, we adopted digital
                  transformation technologies for ourselves and for our
                  customers.
                </div>
              </div>
              <div className="text-wrapper">
                <div className="dot-wrapper">
                  <div className="dot" />
                </div>
                <div className="text">
                  We are a group of seasoned industry professionals from IT
                  management, implementation, operation, development, and
                  auditing areas.
                </div>
              </div>
              <div className="text-wrapper">
                <div className="dot-wrapper">
                  <div className="dot" />
                </div>
                <div className="text">
                  Our innovation has helped our customers build state of art IT
                  infrastructure, improve efficiencies, and do more with less.
                </div>
              </div>
              <div className="text-wrapper">
                <div className="dot-wrapper">
                  <div className="dot" />
                </div>
                <div className="text">
                  Our strict yet flexible security best practice approach has
                  also helped our customers achieve compliance and regulatory
                  auditing successfully.
                </div>
              </div>
              <div className="text-wrapper">
                <div className="dot-wrapper">
                  <div className="dot" />
                </div>
                <div className="text">
                  By leveraging our unique skill set and great customer service,
                  we want to be your trusted partner and help you address your
                  ever-growing IT challenges.
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <OurValue />
      <ContactForm />
      <Footer />
    </>
  )
}

export default About
