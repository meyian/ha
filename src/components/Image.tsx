import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
export default function Image() {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "images/default.png" }) {
        childImageSharp {
          fixed(width: 100, height: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  console.log("Image.tsx > data")
  console.log(data)

  return (
    <div>
      <h1>Hello gatsby-image</h1>
      <Img
        fixed={data.file.childImageSharp.fixed}
        alt="Gatsby Docs are awesome"
      />
    </div>
  )
}