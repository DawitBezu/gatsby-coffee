import React from 'react'
import BackgroundImage from 'gatsby-background-image'

export default function BackgroundSection({
  img, styleClass, title, title2, slogan, children
}) {
  return (
    <BackgroundImage className={styleClass} fluid={img}>
      <div className="overlay">
        <h1 className="title text-white text--uppercase text-center display-1 font-weight-bold">
          {title} <span style={{ color: "#c8a78f" }}>{title2}</span>
        </h1>
        <p className="text-white text--uppercase text-center display-4 font-weight-bold">{slogan}</p>
      </div>
            {children}
      
    </BackgroundImage>
  )
}

BackgroundSection.defaultProps = {
  title: "default title",
  styleClass: "default-background"
}
