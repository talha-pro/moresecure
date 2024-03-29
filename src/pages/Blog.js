import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Footer from "../components/Footer"
import Customers from "../components/Customers"
import OurValue from "../components/OurValue"
import ContactForm from "../components/ContactForm"
import NavBar from "../components/NavBar"
import { Container, Row, Col, Image } from "react-bootstrap"
import KeepInformed from "../components/KeepInformed"
// import typewriter from "../assets/Blog/typewriter.svg"

const Blog = ({ data }) => (
  <>
    <NavBar />
    <header className="header">
      <Container className="header__container">
        <Row className="header__row">
          <Col className="header__left-col">
            <div className="header-wrapper">
              <div className="main-sub-heading">
                Get the latest secret sauce with
              </div>
              <div className="main-heading">#MoreSecure</div>
              <KeepInformed />
            </div>
          </Col>
          <Col className="header__right-col">
            <Img
              fluid={data.blogHeaderImage.childImageSharp.fluid}
              alt="Blog Header Image"
            />

            {/* <Image src={typewriter} fluid={true} /> */}
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
    <section className="blog">
      <Container className="blog__container">
        <Row className="blog__row">
          <Col className="blog__col">
            <div className="heading">Latest Blog</div>
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

export default Blog

export const query = graphql`
  query {
    blogHeaderImage: file(relativePath: { eq: "typewriter.png" }) {
      childImageSharp {
        fluid(maxWidth: 720) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image: file(relativePath: { eq: "status.png" }) {
      childImageSharp {
        fluid(maxWidth: 720) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
