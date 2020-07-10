import React, { useState, useEffect } from 'react'
import styled from '@emotion/styled'

import Logo from '../components/Logo'

import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Page from '../components/Page'
import Container from '../components/Container'
import IndexLayout from '../layouts'

import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

const Footer = styled.footer`
  height: 3rem
`

const Main = styled.main`
  flex-grow: 1
`

const Header = styled.header`
  height: 3rem
`



const showModal = (pageToShow: string) => {
  // set it for pageToShow
  // show the modal
}

const togglePage = (newPage: string) => {
  // turn off all divs
  // show newPage
}



const IndexPage = () => {

  const [show, setShow] = useState(false)
  // const [msg, setMsg] = useState("")
  // useEffect(()=> {
  //   console.log('useEffect')
  //   fetch("/.netlify/functions/hello")
  //     .then(response => response.json())
  //     .then(({msg}) => setMsg(msg))
  // }, []);
  const [activeModal, setActiveModal] = useState(false)



  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  const handleUpvote = () => {
    // trigger 
    // toggle between upvote and downvote
  }

  return (
    <IndexLayout>
      <Page>
        <Container>
          <Header>
            <div style={{ width: "100%", position: "relative" }}>
              <div style={{ width: "100%", position: "absolute", left: "0", top: "0", textAlign: "center" }}>
                <Logo />
              </div>
              <div style={{ display: "inline-block", position: "absolute", right: "0", top: "0", textAlign: "center" }}>
                <button>[settings]</button>
                <button style={{ marginLeft: "20px" }}>[help]</button>
              </div>
            </div>
          </Header>
          <Main>
            <h1>Hello World #{Math.round(Math.random() * 10)}</h1>
          </Main>
          <Footer>
            <button>[menu]</button>
          </Footer>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>[help/about]</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleClose}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        </Container>
      </Page>
    </IndexLayout>
  )
}

export default IndexPage

/*

Todo

Fri 10 Jul

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
  - float the menu to the right
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
