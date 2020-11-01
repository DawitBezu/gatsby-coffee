import React from "react"
import {graphql } from "gatsby"

import Info from '../components/Home/Info'
import Menu from '../components/Home/Menu'
import Products from '../components/Home/Products'
import Contact from '../components/Home/Contact'

import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundSection from "../components/Globals/BackgroundSection"

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <BackgroundSection img={data.img.childImageSharp.fluid} title="MOCHA DAVE" styleClass="default-background" />
    <Info />
    <Menu items={data.menu} />
    <Products />
    <Contact />
  </Layout>
)

export const query = graphql`
  {
     img:file(relativePath:{eq:"default-background.jpg"}){
      childImageSharp{
        fluid{
          ...GatsbyImageSharpFluid
        }
      }
    } 

    menu: allContentfulCoffeeItem {
      edges {
        node {
          id
          title
          details
          price
          category
          image {
            fixed(width: 65, height: 65) {
              ...GatsbyContentfulFixed
            }
          }
        }
      }
    }
  }
`;


export default IndexPage
 