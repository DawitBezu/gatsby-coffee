import React from 'react'
import BackgroundImage from 'gatsby-background-image'

export default function BackgroundSection({
  img, styleClass, title, children
}) {
  return (
    <BackgroundImage className={styleClass} fluid={img}>
      <div className="overlay">
        <h1 className="title text-white text--uppercase text-center display-1 font-weight-bold">
            {title}
        </h1>
        <p className="text-white text--uppercase text-center display-4 font-weight-bold">All Fresh 100% Arabica Coffee.</p>
      </div>
            {children}
      
    </BackgroundImage>
  )
}

BackgroundSection.defaultProps = {
  title: "default title",
  styleClass: "default-background"
}
