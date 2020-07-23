import React from "react"
import { Container, Row, Col, Image } from "react-bootstrap"
import logo from "../assets/logo-svg.svg"
import fb from "../assets/fb.svg"
import twitter from "../assets/twitter.svg"
import insta from "../assets/insta.svg"
import linkedin from "../assets/linkedin.svg"

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <Container className="footer__container">
          <Row className="footer__row">
            <Col className="footer__left-col">
              <div className="footer__address">
                <div>
                  A. 24-155 East Beaver Creek Road, Suite 218 Richmond Hill ON
                  L4B 2N1 Canada
                </div>
                <div>T. 1-800-718-5280</div>
                <div>E. info@moresecure.com</div>
              </div>
              <div className="space-3"></div>
              <div className="footer__social">
                <div>FOLLOW US.</div>
                <div className="footer__social-wrapper">
                  <Image
                    className="footer__social-icon"
                    src={fb}
                    fluid={true}
                  />
                </div>
                <div className="footer__social-wrapper">
                  <Image
                    className="footer__social-icon"
                    src={twitter}
                    fluid={true}
                  />
                </div>
                <div className="footer__social-wrapper">
                  <Image
                    className="footer__social-icon"
                    src={linkedin}
                    fluid={true}
                  />
                </div>
                <div className="footer__social-wrapper">
                  <Image
                    className="footer__social-icon"
                    src={insta}
                    fluid={true}
                  />
                </div>
              </div>
            </Col>
            <Col className="footer__right-col">
              <Image src={logo} fluid={true} />
              <p>
                Empower More Secure customers to win more business , to run
                business more efficiently and securely with affordable open
                solutions.
              </p>
            </Col>
          </Row>
        </Container>
      </footer>
      <div className="copyright">
        &copy; COPYRIGHT 2020 | ALL RIGHTS RESERVED
      </div>
    </>
  )
}

export default Footer
