import React from "react"
import { Container, Row, Col, Image } from "react-bootstrap"

import innovapost from "../assets/Customers/innovapost.png"
import worldvision from "../assets/Customers/worldvision.png"
import nrt from "../assets/Customers/nrt.png"
import community from "../assets/Customers/community.png"
import wordjack from "../assets/Customers/wordjack.png"
import xcg from "../assets/Customers/xcg.png"

const Customers = () => {
  return (
    <section className="customers">
      <Container className="customers__container">
        <Row>
          <Col>
            <div className="heading">Customers Proudly Served</div>
          </Col>
        </Row>
        <div className="space-3"></div>
        <Row>
          <Col className="customers__col--logos">
            <Image className="customers__logo" src={innovapost} fluid={true} />
            <Image className="customers__logo" src={community} fluid={true} />
          </Col>
          <Col className="customers__col--logos">
            <Image className="customers__logo" src={worldvision} fluid={true} />
            <Image className="customers__logo" src={xcg} fluid={true} />
          </Col>
          <Col className="customers__col--logos">
            <Image className="customers__logo" src={nrt} fluid={true} />
            <Image className="customers__logo" src={wordjack} fluid={true} />
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Customers
