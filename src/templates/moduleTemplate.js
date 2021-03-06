import React from 'react'
import Link from 'gatsby-link'
import PhaseBanner from '../components/phase-banner'

export default ({ data }) => {
  return(
    <div>
      <PhaseBanner showHeaderBar />
      <div className="breadcrumbs">
        <ol role="breadcrumbs">
          <li>
            <Link to="/">DDaT Codelabs</Link>
          </li>
          <li>{data.markdownRemark.frontmatter.title}</li>
        </ol>
      </div>

      <div className="module-content">
        <h1 className="heading-xlarge">{data.markdownRemark.frontmatter.title}</h1>
        <p className="lede" dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}></p>
      </div>
    </div>
  )
}

export const moduleQuery = graphql`
  query currentModuleQuery($title: String!, $order: Int!){
    markdownRemark(frontmatter: {
      title: { eq: $title },
      order: { eq: $order }
     }) {
      frontmatter {
        title
        order
        visible
      }
      html
    }
  }
`
