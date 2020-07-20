import React from "react"
import Footer from "../components/Footer"
import Customers from "../components/Customers"
import OurValue from "../components/OurValue"
import ContactForm from "../components/ContactForm"
import NavBar from "../components/NavBar"
import { Container, Row, Col } from "react-bootstrap"

const Infrastructure = () => {
  return (
    <>
      <NavBar />
      <section className="infra">
        <Container className="infra__container">
          <Row className="infra__row">
            <Col className="infra__col">
              <div className="heading">
                Traditional Infrastructure Problems for Digital Transformation
              </div>
            </Col>
          </Row>
          <Row className="infra__row">
            <Col xl={5} className="infra__col-left"></Col>
            <Col xl={7} className="homepage__col-right">
              <div className="text-wrapper">
                <div className="dot-wrapper">
                  <div className="dot" />
                </div>
                <div className="text">Lack of standard process</div>
              </div>
              <div className="text-wrapper">
                <div className="dot-wrapper">
                  <div className="dot" />
                </div>
                <div className="text">Hard to maintain consistence</div>
              </div>
              <div className="text-wrapper">
                <div className="dot-wrapper">
                  <div className="dot" />
                </div>
                <div className="text">Expensive proprietary solutions</div>
              </div>
              <div className="text-wrapper">
                <div className="dot-wrapper">
                  <div className="dot" />
                </div>
                <div className="text">Vendor locked-in</div>
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
                <div className="text">Security is often after-thought</div>
              </div>
            </Col>
          </Row>
          <Row className="infra__row">
            <Col className="infra__col">
              <div className="heading">
                Kubernetes Benefit for Your Business
              </div>
            </Col>
          </Row>
          <Row className="infra__row">
            <Col xl={12} className="infra__col-left">
              <div className="text-wrapper">
                <div className="dot-wrapper">
                  <div className="dot" />
                </div>
                <div className="text">
                  Kubernetes is a portable, extensible, open-source platform for
                  managing containerized infrastructure from Google.
                </div>
              </div>
              <div className="text-wrapper">
                <div className="dot-wrapper">
                  <div className="dot" />
                </div>
                <div className="text">
                  Kubernetes enables business faster time to market with
                  improved application development and deployment efficiency.
                </div>
              </div>
              <div className="text-wrapper">
                <div className="dot-wrapper">
                  <div className="dot" />
                </div>
                <div className="text">
                  Kubernetes can improve your business application scalability,
                  availability, and security with built-in features.
                </div>
              </div>
              <div className="text-wrapper">
                <div className="dot-wrapper">
                  <div className="dot" />
                </div>
                <div className="text">
                  Kubernetes can help business build standard-based on-premise,
                  cloud, and hybrid cloud solutions, business can migrate
                  seamlessly between different environments.
                </div>
              </div>
              <div className="text-wrapper">
                <div className="dot-wrapper">
                  <div className="dot" />
                </div>
                <div className="text">
                  Business can save costs on Kubernetes infrastructure.
                </div>
              </div>
              <div className="text-wrapper">
                <div className="dot-wrapper">
                  <div className="dot" />
                </div>
                <div className="text">
                  Kubernetes has a large, rapidly growing ecosystem. Kubernetes
                  services, support, and tools are widely available.
                </div>
              </div>
              <div className="text-wrapper">
                <div className="dot-wrapper">
                  <div className="dot" />
                </div>
                <div className="text">
                  Kubernetes combines over 15 years of Google's experience
                  running production workloads at scale with best-of-breed ideas
                  and practices from the community.
                </div>
              </div>
            </Col>
          </Row>
          <Row className="infra__row">
            <Col xl={12} className="infra__col-right">
              PIC HERE
            </Col>
          </Row>
          <Row className="infra__row">
            <Col className="infra__col">
              <div className="heading">Why Choose More Secure Computing</div>
            </Col>
          </Row>
          <Row className="infra__row">
            <Col xl={6} className="infra__col-left"></Col>
            <Col xl={6} className="infra__col-right">
              <div className="text-wrapper">
                <div className="dot-wrapper">
                  <div className="dot" />
                </div>
                <div className="text">
                  Top industry experts in infrastructure services to build
                  on-premise, cloud, and hybrid solutions.
                </div>
              </div>
              <div className="text-wrapper">
                <div className="dot-wrapper">
                  <div className="dot" />
                </div>
                <div className="text">
                  Deep understanding and hands-on experience of Kubernetes to
                  build your solutions with the right fit for your business
                  needs.
                </div>
              </div>
              <div className="text-wrapper">
                <div className="dot-wrapper">
                  <div className="dot" />
                </div>
                <div className="text">
                  We have built highly efficient infrastructure solutions from
                  physical, virtual, container, and orchestration technologies
                  in the last 20+ years.
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

export default Infrastructure
