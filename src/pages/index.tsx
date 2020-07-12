import React, { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import YellowVelvetLayout from '../layouts/yellow_velvet'



const IndexPage = () => {
  return (
    <YellowVelvetLayout>
      <h1>Hello World #{Math.round(Math.random() * 100)}</h1>
    </YellowVelvetLayout>
  )
}

export default IndexPage

/*

Todo

Sun 10 Jul

+ See what's what (10:37 AM)
* Add an icon for settings and help

* Header
  = logo
    - Gatsby image tutorial
    + box w/ placeholders
    + get an icon (srcset for mobile, tablet, desktop)
    - render the icon
    - explore moment.js
    - render the time
* Footer
  - move to a responsive layout
    + learn about artsy/fresnel
    + start on the mobile version of the site
      + create YellowVelvet theme (6:33 AM)
      + mobile and desktop version of footer (7:30 AM)
      * slide out menu
  - menu button with slideout
  - float the menu to the left
  - menu slides out
* Make header/footer part of a layout
* Main
  - two links
  - image

* Design web view
* Code Quality
  - use global variables to store footer and header height




Asides

I'm going to pretend I'm some sort of computer athelete, who struggles to stay focused, but vanquishes all foes in the end! Particularly the ones within.


Notes:

<Link to="/page-2/">Go to page 2</Link>

{ name: string; age: number }

*/
