import React from "react"
import Layout from "../components/layout"
import { Container, Row, Col } from "react-bootstrap"
import { Link } from "gatsby"
import Footer from "../components/Footer"
import NavBar from "../components/NavBar"
import ContactForm from "../components/ContactForm"
import Customers from "../components/Customers"
import OurValue from "../components/OurValue"

const About = () => {
  return (
    <>
      <NavBar />
      <section>
        <h1>This is about</h1>
      </section>
      <OurValue />
      <Customers />
      <ContactForm />
      <Footer />
    </>
  )
}

export default About
