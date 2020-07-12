
import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

const showModal = (pageToShow: string) => {
  // set it for pageToShow
  // show the modal
}

export default function Modals(){

  const [activeModal, setActiveModal] = useState(false)
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  const handleUpvote = () => {
    // trigger 
    // toggle between upvote and downvote
  }
  // const show = () => {
  //   // trigger 
  //   // toggle between upvote and downvote
  // }

  return (
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
  )
}
/*



      <Footer>
        <button>[menu]</button>
      </Footer>
*/
