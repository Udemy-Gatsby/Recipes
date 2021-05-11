import React from 'react'
import {useStaticQuery, graphql} from 'gatsby'
import {GatsbyImage, getImage} from 'gatsby-plugin-image'
import styled from 'styled-components'

const query = graphql`
  {
    allFile(filter: {extension: {ne: "svg"}}) {
      nodes {
        name
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  }
`

const Gallery = () => {
    const data = useStaticQuery(query)
    const {nodes} = data.allFile;
    return (
        <Wrapper>
            <h2>simple image gallery</h2> 
            {nodes.map((image, index) => {
                const pathToImage = getImage(image)
                return <article key={index} className="item">
                    <GatsbyImage 
                        image={pathToImage} 
                        alt={image.name} 
                        className="gallery-img" />
                    <p>{image.name}</p>
                </article>
            })}
        </Wrapper>
    )
}

const Wrapper = styled.section`
display:flex;
flex-wrap:wrap;
.item{
    margin-right: 1rem;
}
.gallery-img {
    border-radius: 1rem;
    width: 200px;
}
`

export default Gallery
