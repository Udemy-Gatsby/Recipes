import React from "react"
import Layout from '../components/Layout'
import {graphql} from 'gatsby'
import RecipesList from '../components/RecipesList'

const Contact = ({data}) => {
  const recipes = data.allContentfulRecipe.nodes;
  return (
    <Layout>
      <main className="page">
        <section className="contact-page">
          <article className="contact-info">
            <h3>Want to get in touch?</h3>
            <p>
              I'm baby selvage chartreuse yr, fixie taiyaki leggings organic viral twee iceland pug. Pabst swag readymade, street art poke tilde freegan knausgaard photo booth hot chicken tote bag ugh pug.
            </p>
            <p>
              Keytar godard put a bird on it, fam fingerstache raclette sriracha craft beer coloring book. Everyday carry green juice street art kombucha. Selfies chillwave bitters aesthetic heirloom, kale chips austin green juice fashion axe bespoke fingerstache thundercats. 
            </p>
            <p>
              Sartorial messenger bag coloring book franzen gochujang blog jean shorts before they sold out 3 wolf moon food truck farm-to-table blue bottle. Raw denim salvia tattooed selfies gochujang gastropub af.
            </p>
          </article>
          <article>
            <form  
              className="form contact-form"
              action="https://formspree.io/f/xleajezo"
              method="POST"
            >
              <div className="form-row">
                <label htmlFor="name">your name</label>
                <input type="text" name="name" id="name" />
              </div>
              <div className="form-row">
                <label htmlFor="email">your email</label>
                <input type="text" name="email" id="email" />
              </div>
              <div className="form-row">
                <label htmlFor="message">message</label>
                <textarea name ="message" id="message" cols="30" rows="10"></textarea>
                <button type="submit" className="btn block">submit</button>
              </div>
            </form>
          </article>
        </section>
        <section className="featured-recipes">
          <h5>Look at this Awesomesouce! </h5>
          <RecipesList recipes={recipes} />
        </section>
      </main>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulRecipe(
      sort: {fields: title, order: ASC}
      filter: {featured: {eq: true}}
    ) {
      nodes {
        id
        title
        cookTime
        prepTime
        content {
          tags
        }
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
      }
    }
  }
`

export default Contact