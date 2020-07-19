import React from "react"

import { Container, Row, Col } from "react-bootstrap"
import { Link } from "gatsby"

const NavBar = () => {
  return (
    <nav className="nav">
      <Container className="nav__container">
        <Row className="nav__row">
          <Col className="nav__col-left" xl={4}>
            <Link className="nav__logo" to="/">
              MoreSecure Logo
            </Link>
          </Col>
          <Col className="nav__col-right" xl={8}>
            <Link className="nav__item" to="/">
              Home
            </Link>
            <Link className="nav__item" to="/">
              Services
            </Link>
            <Link className="nav__item" to="/">
              Store
            </Link>
            <Link className="nav__item" to="/">
              Blog
            </Link>
            <Link className="nav__item" to="/">
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
