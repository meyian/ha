import React, { useState } from 'react'
import styled from '@emotion/styled'

import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import moment from 'moment'

const CenteredDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export default function Logo(){
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "images/logo.png" }) {
        childImageSharp {
          fixed(width: 70, height: 42) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  const [tickTock, setTickTock] = useState(false)

  
  setTimeout(() => {
    tickTock ? setTickTock(false) : setTickTock(true)
  }, 500)


  const separator: string = tickTock ? ":" : " "

  return (
    
    <div>
      <CenteredDiv>
        <Img
          fixed={data.file.childImageSharp.fixed}
          alt="Site logo"
        />
        <p>
          { moment().format(`MM/DD/YYYY HH${separator}mma`) } ACC
        </p>
      </CenteredDiv>

    </div>
  )
}

// import * as React from “react”
// interface WelcomeProps {
//  name: string,
// }
// const Welcome: React.SFC<WelcomeProps> = (props) => {
//  return <h1>Hello, {props.name}</h1>;
// }
