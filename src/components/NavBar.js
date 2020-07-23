import React from "react"

import { Container, Row, Col, Image } from "react-bootstrap"
import { Link } from "gatsby"
import logo from "../assets/logo-svg.svg"

const NavBar = () => {
  return (
    <nav className="nav">
      <Container className="nav__container">
        <Row className="nav__row">
          <Col className="nav__col-left" xl={4}>
            <Link className="nav__logo" to="/">
              <Image src={logo} fluid={true} />
            </Link>
          </Col>
          <Col className="nav__col-right" xl={8}>
            <Link className="nav__item" to="/">
              Home
            </Link>

            <div className="nav__item">
              <ul className="nav__item-service">
                <li className="dropdown">
                  <a href="#" className="trigger-drop">
                    Services<i className="arrow"></i>
                  </a>
                  <ul className="drop">
                    <li>
                      <Link to="/DigitalTransformation/">
                        Digital Transformation
                      </Link>
                    </li>
                    <li>
                      <Link to="/Infrastructure">Infrastructure</Link>
                    </li>
                    <li>
                      <Link to="/Security">Security</Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            {/* <Link className="nav__item" to="/">
              Services
            </Link> */}
            <Link className="nav__item" to="/Store">
              Store
            </Link>
            <Link className="nav__item" to="/Blog">
              Blog
            </Link>
            <Link className="nav__item" to="/About">
              About
            </Link>
            <Link className="nav__item" to="/">
              Contact
            </Link>
          </Col>
        </Row>
      </Container>
    </nav>
  )
}

export default NavBar
