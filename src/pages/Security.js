import React from "react"
import Footer from "../components/Footer"
import Customers from "../components/Customers"
import OurValue from "../components/OurValue"
import ContactForm from "../components/ContactForm"
import NavBar from "../components/NavBar"
import { Container, Row, Col, Image } from "react-bootstrap"
import KeepInformed from "../components/KeepInformed"
import security from "../assets/Homepage/security.svg"
import secure from "../assets/Security/secure.svg"
import marketing from "../assets/Security/marketing.svg"

const Security = () => {
  return (
    <>
      <NavBar />
      <header className="header">
        <Container className="header__container">
          <Row className="header__row">
            <Col className="header__left-col">
              <div className="header-wrapper">
                <div className="main-sub-heading">
                  Differentiate Your Business with
                </div>
                <div className="main-heading">Security</div>
                <KeepInformed />
              </div>
            </Col>
            <Col className="header__right-col">
              <Image className="homepage__header" src={security} fluid={true} />
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
      <section className="security">
        <Container className="security__container">
          <Row className="security__row">
            <Col className="security__col">
              <div className="heading">
                When Business Looks at Security as a Problem
              </div>
            </Col>
          </Row>
          <Row className="security__row">
            <Col xl={5} className="security__col-left">
              <Image src={marketing} fluid={true} />
            </Col>
            <Col xl={7} className="security__col-right">
              <div className="text-wrapper">
                <div className="dot-wrapper">
                  <div className="dot" />
                </div>
                <div className="text">Security cost becomes really high</div>
              </div>
              <div className="text-wrapper">
                <div className="dot-wrapper">
                  <div className="dot" />
                </div>
                <div className="text">
                  Business as an easy target for hackers
                </div>
              </div>
              <div className="text-wrapper">
                <div className="dot-wrapper">
                  <div className="dot" />
                </div>
                <div className="text">Always chasing compliance goals</div>
              </div>
              <div className="text-wrapper">
                <div className="dot-wrapper">
                  <div className="dot" />
                </div>
                <div className="text">
                  Security repels new business opportunities
                </div>
              </div>
              <div className="text-wrapper">
                <div className="dot-wrapper">
                  <div className="dot" />
                </div>
                <div className="text">High risk of permanent data lost</div>
              </div>
            </Col>
          </Row>
          <Row className="security__row">
            <Col className="security__col">
              <div className="heading">
                Leverage Security for Your Business Advantage
              </div>
            </Col>
          </Row>
          <Row className="security__row">
            <Col xl={12} className="security__col-left">
              <div className="text-wrapper">
                <div className="dot-wrapper">
                  <div className="dot" />
                </div>
                <div className="text">
                  Improve business resilience and productivity by providing safe
                  remote working capabilities and integrated security solutions
                  with automation.
                </div>
              </div>
              <div className="text-wrapper">
                <div className="dot-wrapper">
                  <div className="dot" />
                </div>
                <div className="text">
                  Automation based on open standard reduces the overall cost of
                  ownership.With an improved security posture, you naturally
                  reduce the risks of a data breach, increase response times,
                  and raise consumer confidence in your products and services.
                </div>
              </div>
              <div className="text-wrapper">
                <div className="dot-wrapper">
                  <div className="dot" />
                </div>
                <div className="text">
                  It's easier to achieve industry security compliance and stay
                  compliant.
                </div>
              </div>
              <div className="text-wrapper">
                <div className="dot-wrapper">
                  <div className="dot" />
                </div>
                <div className="text">
                  It's an industry trend to adopt security as a business
                  competitive advantage.
                </div>
              </div>
            </Col>
          </Row>
          <Row className="security__row">
            <Col className="security__col">
              <div className="heading">Why Choose More Secure Computing</div>
            </Col>
          </Row>
          <Row className="security__row">
            <Col xl={6} className="security__col-left">
              <Image src={secure} fluid={true} />
            </Col>
            <Col xl={6} className="security__col-right">
              <div className="text-wrapper">
                <div className="dot-wrapper">
                  <div className="dot" />
                </div>
                <div className="text">
                  Over 20 years of security practice with CISSSP(Certified
                  Information System Security Professional) since 2001.
                </div>
              </div>
              <div className="text-wrapper">
                <div className="dot-wrapper">
                  <div className="dot" />
                </div>
                <div className="text">
                  Deep understanding and hands-on experience of security
                  applications in both on-premise and cloud environments.
                </div>
              </div>
              <div className="text-wrapper">
                <div className="dot-wrapper">
                  <div className="dot" />
                </div>
                <div className="text">
                  Cutting edge technology to combine the ease of content
                  management with ultimate security improvement for your
                  website.
                </div>
              </div>
              <div className="text-wrapper">
                <div className="dot-wrapper">
                  <div className="dot" />
                </div>
                <div className="text">
                  Proven tracking record for open security technology
                  integration and automation for both large and small customers.
                </div>
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

export default Security
