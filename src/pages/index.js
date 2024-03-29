import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import Footer from "../components/Footer"
import SEO from "../components/seo"
import Customers from "../components/Customers"
import OurValue from "../components/OurValue"
import ContactForm from "../components/ContactForm"
import NavBar from "../components/NavBar"
import { Container, Row, Col, Image } from "react-bootstrap"
import KeepInformed from "../components/KeepInformed"
import status from "../assets/Homepage/status.svg"
import data from "../assets/Homepage/data.svg"
import study from "../assets/Homepage/study.svg"
import opensource from "../assets/Homepage/opensource.svg"
import security from "../assets/Homepage/security.svg"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <NavBar />
    <header className="header">
      <Container className="header__container">
        <Row className="header__row">
          <Col className="header__left-col">
            <div className="header-wrapper">
              <div className="main-sub-heading">
                Affordable Solutions for Your Business
              </div>
              <div className="main-heading">Transformation</div>
              <KeepInformed />
            </div>
          </Col>
          <Col className="header__right-col">
            {/* <Image
              className="homepage__header-image"
              src={status}
              fluid={true}
            /> */}
            <Img
              className="homepage__header-image"
              fluid={data.image.childImageSharp.fluid}
              alt="Blog Header Image"
            />
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
    <section className="homepage">
      <div className="homepage__blob-one"></div>
      <div className="homepage__blob-two"></div>
      <div className="homepage__blob-three"></div>
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
          <Col xl={6} className="homepage__col-left">
            <Img
              fluid={data.studyImage.childImageSharp.fluid}
              alt="Study Image"
            />
            {/* <Image src={study} fluid={true} /> */}
          </Col>
          <Col xl={6} className="homepage__col-right">
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
          <Col xl={6} className="homepage__col-right">
            <Img
              fluid={data.dataImage.childImageSharp.fluid}
              alt="Data Image"
            />
            {/* <Image src={data} fluid={true} /> */}
          </Col>
        </Row>
        <div className="space-4"></div>
        <Row>
          <Col className="homepage__col-left">
            <Img
              fluid={data.opensourceImage.childImageSharp.fluid}
              alt="Opensource Image"
            />
            {/* <Image src={opensource} fluid={true} /> */}
          </Col>
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
          <Col className="homepage__col-right">
            <Img
              fluid={data.securityImage.childImageSharp.fluid}
              alt="Study Image"
            />
            {/* <Image src={security} fluid={true} /> */}
          </Col>
        </Row>
      </Container>
    </section>
    <OurValue />
    <Customers />
    <ContactForm />
    <Footer />
  </Layout>
)

export default IndexPage

export const query = graphql`
  query {
    studyImage: file(relativePath: { eq: "study.png" }) {
      childImageSharp {
        fluid(maxWidth: 720) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image: file(relativePath: { eq: "status.png" }) {
      childImageSharp {
        fluid(maxWidth: 1080) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    dataImage: file(relativePath: { eq: "data.png" }) {
      childImageSharp {
        fluid(maxWidth: 720) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    opensourceImage: file(relativePath: { eq: "opensource.png" }) {
      childImageSharp {
        fluid(maxWidth: 720) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    securityImage: file(relativePath: { eq: "security.png" }) {
      childImageSharp {
        fluid(maxWidth: 1080) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
