import React from "react"
import { Container, Row, Col, Image } from "react-bootstrap"
import contact from "../assets/Contact/contact.svg"

const ContactForm = () => {
  return (
    <section className="contact">
      <Container className="contact__container">
        <Row className="contact__row">
          <Col xl={8} className="contact__col-left">
            <div className="contact__form-wrapper">
              <div className="contact__form--heading">
                CONTACT US TODAY TO MAKE SURE YOUR BUSINESS IS IN THE RIGHT
                DIRECTION
              </div>
              <form className="contact__form">
                <div className="contact__form-names">
                  <label className="contact__form--label">
                    First Name
                    <input
                      className="contact__form--input"
                      type="text"
                      placeholder="Your First Name"
                      required
                    ></input>
                  </label>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <label className="contact__form--label">
                    Last Name
                    <input
                      className="contact__form--input"
                      type="text"
                      placeholder="Your Last Name"
                      required
                    ></input>
                  </label>
                </div>

                <label className="contact__form--email-label">
                  Email
                  <input
                    className="contact__form--input-email"
                    type="email"
                    placeholder="Your Email"
                    required
                  ></input>
                </label>

                <label className="contact__form--message-label">
                  Message
                  <textarea
                    className="contact__form--input"
                    placeholder="Your Message"
                    rows="5"
                    required
                  ></textarea>
                </label>
              </form>
              <div className="contact__form--button-wrapper">
                <button className="contact__form--button">SUBMIT</button>
              </div>
            </div>
          </Col>
          <Col className="contact__col-right">
            <Image className="contact__image" src={contact} fluid={false} />
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default ContactForm
