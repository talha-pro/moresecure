import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import Footer from "../components/Footer"
import SEO from "../components/seo"
import Customers from "../components/Customers"
import OurValue from "../components/OurValue"
import ContactForm from "../components/ContactForm"
import NavBar from "../components/NavBar"
import HomePage from "./Homepage"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <NavBar />
    {/* <h1>WELCOME TO MORE SECURE</h1> */}
    <HomePage />
    <div className="space-4"></div>
    <div className="space-4"></div>
    <div className="space-4"></div>
    <OurValue />
    <div className="space-4"></div>
    <div className="space-4"></div>
    <div className="space-4"></div>
    <Customers />
    <div className="space-4"></div>
    <div className="space-4"></div>
    <div className="space-4"></div>
    <ContactForm />
    <div className="space-4"></div>
    <div className="space-4"></div>
    <Footer />
    {/* <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link> */}
  </Layout>
)

export default IndexPage
