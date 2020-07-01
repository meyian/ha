'use strict'

const { createFilePath } = require(`gatsby-source-filesystem`)
const path = require(`path`)
const scenario = require(`./lib/scenario`)

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })

    const fieldsToCreate = [
      { name: `slug`, value: slug },
      { name: `title`, value: node.frontmatter.title },
    ]
    
    fieldsToCreate.forEach(({ name, value }) => {
      createNodeField({ node, name, value })
    })
  }

  // Sometimes, optional fields tend to get not picked up by the GraphQL
  // interpreter if not a single content uses it. Therefore, we're putting them
  // through `createNodeField` so that the fields still exist and GraphQL won't
  // trip up. An empty string is still required in replacement to `null`.

  switch (node.internal.type) {
    case 'MarkdownRemark': {
      const { permalink, layout } = node.frontmatter
      const { relativePath } = getNode(node.parent)

      let slug = permalink

      if (!slug) {
        slug = `/${relativePath.replace('.md', '')}/`
      }

      // Used to generate URL to view this content.
      createNodeField({
        node,
        name: 'slug',
        value: slug || ''
      })

      // Used to determine a page layout.
      createNodeField({
        node,
        name: 'layout',
        value: layout || ''
      })
    }
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const allMarkdown = await graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            fields {
              layout
              slug
              title
            }
            html
          }
        }
      }
    }
  `)

  if (allMarkdown.errors) {
    console.error(allMarkdown.errors)
    throw new Error(allMarkdown.errors)
  }

  const nodes = allMarkdown.data.allMarkdownRemark.edges.map(({node}) => node)

  const collatedPosts = scenario.packagePosts(nodes);

  console.log("gatsby-node.js > collatedPosts")

  for (let title in collatedPosts){
    const sections = collatedPosts[title]
    const { slug } = sections

    delete sections.slug

    createPage({
      path: slug,
      component: path.resolve(`./src/templates/scenario.tsx`),
      context: {
        // slug: node.fields.slug,
        sections
      },
    })
  }
}

/*

*/
