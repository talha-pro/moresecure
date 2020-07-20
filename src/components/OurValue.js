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
      <svg
        className="ourvalue__upper-svg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#fff"
          fill-opacity="1"
          d="M0,64L48,80C96,96,192,128,288,122.7C384,117,480,75,576,69.3C672,64,768,96,864,106.7C960,117,1056,107,1152,96C1248,85,1344,75,1392,69.3L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
      </svg>
      <svg
        className="ourvalue__lower-svg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#fff"
          fill-opacity="1"
          d="M0,224L24,213.3C48,203,96,181,144,181.3C192,181,240,203,288,202.7C336,203,384,181,432,165.3C480,149,528,139,576,133.3C624,128,672,128,720,149.3C768,171,816,213,864,213.3C912,213,960,171,1008,160C1056,149,1104,171,1152,170.7C1200,171,1248,149,1296,154.7C1344,160,1392,192,1416,208L1440,224L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z"
        ></path>
      </svg>
    </section>
    // <svg
    //   className="lower-svg"
    //   xmlns="http://www.w3.org/2000/svg"
    //   viewBox="0 0 1440 320"
    // >
    //   <path
    //     fill="#fff"
    //     fill-opacity="1"
    //     d="M0,128L40,154.7C80,181,160,235,240,245.3C320,256,400,224,480,192C560,160,640,128,720,133.3C800,139,880,181,960,181.3C1040,181,1120,139,1200,149.3C1280,160,1360,224,1400,256L1440,288L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
    //   ></path>
    // </svg>
  )
}

export default OurValue
