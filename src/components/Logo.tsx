import React, { useState, useEffect } from 'react'
import styled from '@emotion/styled'

import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const CenteredDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const hasRun = false

const getFormattedTime = (separator) => {
  const date = new Date()
  const month = date.getMonth().toString().padStart(2, '0'),
    day = date.getDate().toString().padStart(2, '0'),
    year = date.getFullYear(),
    hours = date.getHours(),
    minutes = date.getMinutes().toString().padStart(2, '0')
  const dateStr = `${month}/${day}/${year} ${hours}${separator}${minutes}am`

  return dateStr
}

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
          { getFormattedTime(separator) } ACC
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
