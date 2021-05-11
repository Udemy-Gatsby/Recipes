import React from "react"
import Layout from '../components/Layout'
import {StaticImage} from 'gatsby-plugin-image'
import AllRecipes from '../components/AllRecipes'
import SEO from '../components/SEO'

export default function Home() {
  return (
    <Layout>
      <SEO title="Home" meta="coolest recipes" />
      <main className="page">
        <section className="hero">
        <StaticImage src="../assets/images/main.jpeg" 
          alt="eggs"
          className="hero-img"
          layout="fullWidth" />
        <div className="hero-container">
          <div className="hero-text">
            <h1>Simply Recipes</h1>
            <h4>No fluff, just recipes</h4>
          </div>
        </div>
        </section>
        <AllRecipes />
      </main>
    </Layout>
  )
}
