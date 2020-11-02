import React from "react"
import { graphql } from "gatsby"

import Info from '../components/Home/Info'

import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundSection from "../components/Globals/BackgroundSection"

const AboutPage = ({data}) => (
  <Layout>
    <SEO title="About" keywords={[`gatsby`, `application`, `react`]} />
    <BackgroundSection
      img={data.img.childImageSharp.fluid}
      title="about"
      title2="us"
      slogan={"Good to the Last Drop!"}
      styleClass="about-background" />
    <Info />
  </Layout>
)

export const query = graphql`
  {
    img:file(relativePath:{eq:"about-background.jpg"}){
      childImageSharp{
        fluid{
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default AboutPage
 