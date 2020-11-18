import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import SocialLinks from "../constants/socialLinks"
// ...GatsbyImageSharpFluid
const query = graphql`
  {
    file(relativePath: { eq: "hero-img.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Hero = () => {
  const data = useStaticQuery(query)
  console.log(data)
  const { 
    file: { 
      childImageSharp: { fluid } 
    } 
  } = useStaticQuery(query)
  return <header className="hero">
    <div className="section-center hero-center">
      <article className="hero-info">
      <div>
            <div className="underline"></div>
            <h1>Sasha Wolffe</h1>
            <h4>freelance photography: image and video</h4>
            <a  className="btn" href="mailto:sasha@cats.com">Contact</a>
          
            <SocialLinks />
          </div>

      </article>
      <Image fluid={fluid} className="hero-img"></Image>
    </div>
    </header>
}

export default Hero
