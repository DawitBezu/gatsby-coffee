import React from "react"
import { Link, graphql } from "gatsby"

import Info from '../components/Home/Info'

import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundSection from "../components/Globals/BackgroundSection"

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <BackgroundSection img={data.img.childImageSharp.fluid} title="davo's coffee" styleClass="default-background" />
    <Info />
  </Layout>
)

export const query = graphql`
  {
    img:file(relativePath:{eq:"default-background.jpg"}){
      childImageSharp{
        fluid{
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default IndexPage
 