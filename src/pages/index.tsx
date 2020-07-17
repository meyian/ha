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
  + logo
    + Gatsby image tutorial
    + box w/ placeholders
    + get an icon (srcset for mobile, tablet, desktop)
    + render the icon
    + explore moment.js
    + render the time
+ Load up the font
+ Consolidate button styles
+ Style footer buttons
* Header
  + icons (done, 9:56 AM)
  + research mousemove menu show
    - the logic (https://stackoverflow.com/questions/23434004/navbar-that-appears-when-mouse-moves-and-disappears-when-still)
    - redux subscription (https://stackoverflow.com/questions/36163442/what-listener-does-in-the-redux-store)
  Redux
    + redux to the yellowvelvet theme(page container -> container)
    * containerize
      - create a container? for the header
      - move action to the container
    - click to toggle the header, click to hide
    - click to extend the setTimeout
    - click to cancel the setTimeout
    desktop version
    - subscribe to changes, print something on mousemove
      - counter counts the number of times your mouse moved
      - move mouse and click dispatches
      - does it fire everytime i use the mouse, or not
      - throttle the mousemove (lego-blocks)
    - addclass/property + log (header)
    - add timeout for property removal
      - animations w/ react
      - implement a fade out
    - same logic for footer
  * settings modal
  * help/about modal
  * hide icons when mouse not in motion
    - research 

* Footer
  + move to a responsive layout
    + learn about artsy/fresnel
    + start on the mobile version of the site
      + create YellowVelvet theme (6:33 AM)
      + mobile and desktop version of footer (7:30 AM)
      + slide out menu
  + menu button with slideout (9:16 AM)
    + fix mini-freakout over fresnel
  * mobile menu
    - items
    - links to blank pages
  * desktop menu
    - links, help topics in a YAML file
    - render links to blank pages
* Make header/footer part of a layout
* Main
  - two links
  - image
* Design web view


* Code Quality
  - use global variables to store footer and header height
  - accessbility: tab turns off the outline: none (https://jmperezperez.com/outline-focus-ring-a11y/)
  - use a class to customize Mui (https://material-ui.com/customization/components/)





Asides

Ha, withdrawal can kiss my ass. For five and a half solid days.

Started at 9 am, trying to get through my day. Replacing the buttons w/ Icons


Notes:

<Link to="/page-2/">Go to page 2</Link>

{ name: string; age: number }

*/
