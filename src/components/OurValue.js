import React from "react"
import { Container, Row, Col } from "react-bootstrap"

const OurValue = () => {
  return (
    <section className="ourvalue">
      <Container className="ourvalue__container">
        <Row className="ourvalue__row">
          <Col xl={2}>
            <div className="ourvalue__heading">Our Value</div>
          </Col>
          <Col>
            <p className="ourvalue__description">
              Empower More Secure customers to win more business , to run
              business more efficiently and securely with affordable open
              solutions.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default OurValue
