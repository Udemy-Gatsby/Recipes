import React from 'react'
import Layout from '../components/Layout'
import {StaticImage} from 'gatsby-plugin-image'
import {Link, graphql} from 'gatsby'
import RecipesList from '../components/RecipesList'

const About = ({data:{allContentfulRecipe:{nodes:recipes}}}) => {
    return (
        <Layout>
            <main className="page">
                <section className="about-page">
                    <article>
                        <h2>about</h2>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat impedit praesentium, dolorem blanditiis quos deserunt quibusdam eius. Veritatis quisquam vitae autem odio expedita. Est ipsum neque aut illo praesentium hic.</p>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci repudiandae repellendus ullam fuga itaque, veritatis laborum temporibus, culpa incidunt officiis tempora ipsa quia. Quia pariatur aperiam delectus mollitia? Similique, deleniti.</p>
                        <Link to="/contact" className="btn">
                        contact
                        </Link>
                    </article>
                    <StaticImage src="../assets/images/about.jpeg" 
                    alt="Person pouring salt in bowl" 
                    className="about-img" />
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

export default About