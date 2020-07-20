import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import Footer from "../components/Footer"
import SEO from "../components/seo"
import Customers from "../components/Customers"
import OurValue from "../components/OurValue"
import ContactForm from "../components/ContactForm"
import NavBar from "../components/NavBar"
import { Container, Row, Col } from "react-bootstrap"
// import HomePage from "./Homepage"
// import About from "./About"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <NavBar />
    <section className="homepage">
      <Container className="homepage__container">
        <Row className="homepage__row">
          <Col className="homepage__col">
            <div className="heading">
              Traditional Business Application Problems for Digital
              Transformation
            </div>
          </Col>
        </Row>
        <Row className="homepage__row">
          <Col xl={5} className="homepage__col-left"></Col>
          <Col xl={7} className="homepage__col-right">
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
              <div className="text">Hard to adopt the cloud strategy</div>
            </div>
            <div className="text-wrapper">
              <div className="dot-wrapper">
                <div className="dot" />
              </div>
              <div className="text">Not remote working friendly</div>
            </div>
            <div className="text-wrapper">
              <div className="dot-wrapper">
                <div className="dot" />
              </div>
              <div className="text">Hacker has more opportunities</div>
            </div>
            <div className="text-wrapper">
              <div className="dot-wrapper">
                <div className="dot" />
              </div>
              <div className="text">Data security not in the consideration</div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="homepage__col">
            <div className="heading">
              More Secure Digital Transformation Platform Advantages
            </div>
          </Col>
        </Row>
        <Row className="homepage__row">
          <Col xl={6} className="homepage__col-left">
            <div className="sub-heading">Empower Modern Business</div>
            <div className="text-wrapper">
              <div className="dot-wrapper">
                <div className="dot" />
              </div>
              <div className="text">
                We provide full suite of Marketing, Sales, E-Commerce,
                Automation solution to increase your sales both Online and
                Offline.
              </div>
            </div>
            <div className="text-wrapper">
              <div className="dot-wrapper">
                <div className="dot" />
              </div>
              <div className="text">
                You can improve customer experience with the modern Customer
                Relationship Management solution.
              </div>
            </div>
            <div className="text-wrapper">
              <div className="dot-wrapper">
                <div className="dot" />
              </div>
              <div className="text">
                Your have more resillient business and your employees are more
                happy.
              </div>
            </div>
            <div className="text-wrapper">
              <div className="dot-wrapper">
                <div className="dot" />
              </div>
              <div className="text">
                Your business operation is more efficient than before.
              </div>
            </div>
          </Col>
          <Col className="homepage__col-right"></Col>
        </Row>
        <div className="space-4"></div>
        <Row>
          <Col className="homepage__col-left"></Col>
          <Col className="homepage__col-right">
            <div className="sub-heading">Open Technology</div>
            <div className="text-wrapper">
              <div className="dot-wrapper">
                <div className="dot" />
              </div>
              <div className="text">
                We provide Open Source Business Applications, Infrastructure and
                Security to make sure your business will never be locked in to a
                vendor, even to ourself.
              </div>
            </div>
            <div className="text-wrapper">
              <div className="dot-wrapper">
                <div className="dot" />
              </div>
              <div className="text">
                You have the choice to either use More Secure hosting or self
                hosting, we also help you get migration done seamlessly.
              </div>
            </div>
            <div className="text-wrapper">
              <div className="dot-wrapper">
                <div className="dot" />
              </div>
              <div className="text">
                With the open data platform, you own your precious data 100%.
              </div>
            </div>
            <div className="text-wrapper">
              <div className="dot-wrapper">
                <div className="dot" />
              </div>
              <div className="text">
                Your business applications can be hosted on premise, in the
                cloud or hybrid.
              </div>
            </div>
          </Col>
        </Row>
        <div className="space-4"></div>
        <Row>
          <Col className="homepage__col-left">
            <div className="sub-heading">Build in Security</div>
            <div className="text-wrapper">
              <div className="dot-wrapper">
                <div className="dot" />
              </div>
              <div className="text">
                We promote the ultimate security approach for comprehensive open
                source technologies, from infrastructure, automation, security,
                sales, marketing and the other business applications.
              </div>
            </div>
            <div className="text-wrapper">
              <div className="dot-wrapper">
                <div className="dot" />
              </div>
              <div className="text">
                We help you design the security to meet your business needs, so
                it’s hard for hackers and easier for compliance.
              </div>
            </div>
            <div className="text-wrapper">
              <div className="dot-wrapper">
                <div className="dot" />
              </div>
              <div className="text">
                Your business will have a complete security operation plan
                either with your own people, or with our help, or a combined
                approach.
              </div>
            </div>
          </Col>
          <Col className="homepage__col-right"></Col>
        </Row>
      </Container>
    </section>
    <div className="space-4"></div>
    <div className="space-4"></div>
    <div className="space-4"></div>
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
    {/* <h1>WELCOME TO MORE SECURE</h1>
    <HomePage />
    <div className="space-4"></div>
    <div className="space-4"></div>
    <div className="space-4"></div>
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
    <Footer /> */}
    {/* <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link> */}
  </Layout>
)

export default IndexPage
