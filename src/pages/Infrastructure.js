import React from "react"
import Footer from "../components/Footer"
import Customers from "../components/Customers"
import OurValue from "../components/OurValue"
import ContactForm from "../components/ContactForm"
import NavBar from "../components/NavBar"
import { Container, Row, Col, Image } from "react-bootstrap"
import KeepInformed from "../components/KeepInformed"
import road from "../assets/Infrastructure/road.svg"
import upgrade from "../assets/Infrastructure/upgrade.svg"
import docker from "../assets/Infrastructure/docker.webp"
import kubernetes from "../assets/Infrastructure/kubernetes.webp"

const Infrastructure = () => {
  return (
    <>
      <NavBar />
      <header className="header">
        <Container className="header__container">
          <Row className="header__row">
            <Col className="header__left-col">
              <div className="header-wrapper">
                <div className="main-sub-heading">
                  Infrastructure Consolidation on
                </div>
                <div className="main-heading">Kubernetes</div>
                <KeepInformed />
              </div>
            </Col>
            <Col className="header__right-col">
              <Image
                className="homepage__header-image"
                src={docker}
                fluid={true}
              />
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
            <Col xl={5} className="infra__col-left">
              <Image src={road} fluid={true} />
            </Col>
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
              <Image src={kubernetes} fluid={true} />
            </Col>
          </Row>
          <Row className="infra__row">
            <Col className="infra__col">
              <div className="heading">Why Choose More Secure Computing</div>
            </Col>
          </Row>
          <Row className="infra__row">
            <Col xl={6} className="infra__col-left">
              <Image src={upgrade} fluid={true} />
            </Col>
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
