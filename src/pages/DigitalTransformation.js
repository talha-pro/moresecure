import React from "react"
import Footer from "../components/Footer"
import Customers from "../components/Customers"
import OurValue from "../components/OurValue"
import ContactForm from "../components/ContactForm"
import NavBar from "../components/NavBar"
import { Container, Row, Col, Image } from "react-bootstrap"
import KeepInformed from "../components/KeepInformed"
import social from "../assets/DigitalTransformation/social.svg"
import destination from "../assets/DigitalTransformation/destination.svg"
import mobile from "../assets/DigitalTransformation/mobile.webp"

const DigitalTransformation = () => {
  return (
    <>
      <NavBar />
      <header className="header">
        <Container className="header__container">
          <Row className="header__row">
            <Col className="header__left-col">
              <div className="header-wrapper">
                <div className="main-sub-heading">
                  Business Solutions with Focus on
                </div>
                <div className="main-heading">Sales/Marketing</div>
                <KeepInformed />
              </div>
            </Col>
            <Col className="header__right-col">
              <Image src={mobile} fluid={true} />
            </Col>
          </Row>
          <div className="space-4"></div>
          <div className="space-4"></div>
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
      <section className="digital">
        <div className="digital__blob-one"></div>
        <div className="digital__blob-two"></div>
        <div className="digital__blob-three"></div>
        <Container className="digital__container">
          <Row className="digital__row">
            <Col className="digital__col">
              <div className="heading">
                Is your business application working hard for you? Do they have
                these problems
              </div>
            </Col>
          </Row>
          <Row className="digital__row">
            <Col xl={6} className="digital__col-left">
              <div className="text-wrapper">
                <div className="dot-wrapper">
                  <div className="dot" />
                </div>
                <div className="text">Lack of sales/marketing automation</div>
              </div>
              <div className="text-wrapper">
                <div className="dot-wrapper">
                  <div className="dot" />
                </div>
                <div className="text">Proprietary solutions are expensive</div>
              </div>
              <div className="text-wrapper">
                <div className="dot-wrapper">
                  <div className="dot" />
                </div>
                <div className="text">
                  Vendor lock-in is blocking business growth
                </div>
              </div>
              <div className="text-wrapper">
                <div className="dot-wrapper">
                  <div className="dot" />
                </div>
                <div className="text">
                  Missing open access for better integration
                </div>
              </div>
            </Col>
            <Col xl={6} className="digital__col-right">
              <Image src={destination} fluid={true} />
            </Col>
          </Row>
          <Row className="digital__row">
            <Col className="digital__col">
              <div className="heading">
                Business Benefits from Digital Transformation
              </div>
            </Col>
          </Row>
          <Row className="digital__row">
            <Col xl={12} className="digital__col-left">
              <div className="text-wrapper">
                <div className="dot-wrapper">
                  <div className="dot" />
                </div>
                <div className="text">
                  The automated workflow can help your business nurture the
                  customers along their journey so your business works hard for
                  you, even when you are not.
                </div>
              </div>
              <div className="text-wrapper">
                <div className="dot-wrapper">
                  <div className="dot" />
                </div>
                <div className="text">
                  Blazing fast and Search Engine Optimized web site to help your
                  business target and convert prospects into your customers at
                  the right time, with the right content.
                </div>
              </div>
              <div className="text-wrapper">
                <div className="dot-wrapper">
                  <div className="dot" />
                </div>
                <div className="text">
                  Help you build sales funnel based on your business needs,
                  fully customized for your marketing and sales strategy.
                </div>
              </div>
              <div className="text-wrapper">
                <div className="dot-wrapper">
                  <div className="dot" />
                </div>
                <div className="text">
                  You can build a professional consistent brand image throughout
                  the customer life cycle.
                </div>
              </div>
              <div className="text-wrapper">
                <div className="dot-wrapper">
                  <div className="dot" />
                </div>
                <div className="text">
                  You can create a delightful customer experience to improve
                  customer loyalty.
                </div>
              </div>
              <div className="text-wrapper">
                <div className="dot-wrapper">
                  <div className="dot" />
                </div>
                <div className="text">
                  The prompt sales quote, invoicing and payment integration will
                  get your customer to get a crystal clear understanding of your
                  services and pay you faster.
                </div>
              </div>
            </Col>
          </Row>
          <Row className="digital__row">
            <Col className="digital__col-social">
              <Image src={social} fluid={true} />
            </Col>
          </Row>
          <Row className="digital__row">
            <Col className="digital__col">
              <div className="heading">Why Choose More Secure Computing</div>
            </Col>
          </Row>
          <Row className="digital__row">
            <Col xl={12} className="digital__col-left">
              <div className="text-wrapper">
                <div className="dot-wrapper">
                  <div className="dot" />
                </div>
                <div className="text">
                  Combined 20+ years of professional service experience in
                  digital transformation.
                </div>
              </div>
              <div className="text-wrapper">
                <div className="dot-wrapper">
                  <div className="dot" />
                </div>
                <div className="text">
                  Deep understanding and hands-on experience of online
                  marketing, sales, and operation tech stacks.
                </div>
              </div>
              <div className="text-wrapper">
                <div className="dot-wrapper">
                  <div className="dot" />
                </div>
                <div className="text">
                  We provide one-stop-shop services for all your tech stack
                  needs, your business is free to migrate seamlessly between
                  on-premise, cloud, and hybrid environments depend on your
                  growth strategy.
                </div>
              </div>
              <div className="text-wrapper">
                <div className="dot-wrapper">
                  <div className="dot" />
                </div>
                <div className="text">Focus on great customer service.</div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <OurValue />
      <Customers />
      <ContactForm />
      <Footer />
    </>
  )
}

export default DigitalTransformation
