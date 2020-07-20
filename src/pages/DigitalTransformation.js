import React from "react"
import Footer from "../components/Footer"
import Customers from "../components/Customers"
import OurValue from "../components/OurValue"
import ContactForm from "../components/ContactForm"
import NavBar from "../components/NavBar"
import { Container, Row, Col } from "react-bootstrap"

const DigitalTransformation = () => {
  return (
    <>
      <NavBar />
      <section className="digital">
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
            <Col xl={7} className="digital__col-left">
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
            <Col xl={5} className="digital__col-right"></Col>
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
            <Col xl={12} className="digital__col-right">
              PIC HERE
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
      <div className="space-4"></div>
      <div className="space-4"></div>
      <div className="space-4"></div>

      <Customers />
      <div className="space-4"></div>
      <div className="space-4"></div>
      <div className="space-4"></div>
      <ContactForm />
      <div className="space-4"></div>
      <div className="space-4"></div>
      <Footer />
    </>
  )
}

export default DigitalTransformation
