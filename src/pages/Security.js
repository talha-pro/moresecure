import React from "react"
import Footer from "../components/Footer"
import Customers from "../components/Customers"
import OurValue from "../components/OurValue"
import ContactForm from "../components/ContactForm"
import NavBar from "../components/NavBar"
import { Container, Row, Col } from "react-bootstrap"

const Security = () => {
  return (
    <>
      <NavBar />
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
            <Col xl={5} className="security__col-left"></Col>
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
            <Col xl={12} className="security__col-right">
              PIC HERE
            </Col>
          </Row>
          <Row className="security__row">
            <Col className="security__col">
              <div className="heading">Why Choose More Secure Computing</div>
            </Col>
          </Row>
          <Row className="security__row">
            <Col xl={6} className="security__col-left"></Col>
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
