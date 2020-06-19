import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import styled from '@emotion/styled'

import Page from '../components/Page'
import Container from '../components/Container'
import IndexLayout from '../layouts'

import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

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
  const [activeModal, setActiveModal] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <IndexLayout>
      <Page>
        <Container>
          <header>
            <button type="button" onClick={handleShow}>
              ?
            </button>
          </header>
          <section>
            <h1>Hello World</h1>
          </section>
          <footer>

          </footer>

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

<Link to="/page-2/">Go to page 2</Link>

{ name: string; age: number }

*/
