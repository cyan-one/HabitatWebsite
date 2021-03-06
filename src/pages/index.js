import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/common/header"
import HeroSection from "../components/homepage/HeroSection"
import Introducing from "../components/homepage/Introducing"
import Features from "../components/homepage/Features"
import Craft from "../components/homepage/Craft"
import DesignDevelopment from "../components/homepage/DesignDevelopment"
import GetStartedBanner from "../components/homepage/GetStartedBanner"
import Footer from "../components/homepage/Footer"
import SupportBlock from "../components/homepage/SupporterBlock"

const IndexPage = () => (
  <Layout>
    <SEO
      title="Habitat - fast & simple Governance plattform "
      description="Blazing fast and simple Governance Plattform. Launch your DAO or Protocoll token with a view clicks and get started."
    />
    <Header />
    <HeroSection />
    <Features />
    <Introducing />
    {/*
    <Craft />
    */}
    <DesignDevelopment />
    <GetStartedBanner />
    <SupportBlock />
    <Footer />
  </Layout>
)

export default IndexPage
