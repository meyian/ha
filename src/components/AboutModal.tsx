import React from 'react'
import Modal from '@material-ui/core/Modal'
import { css } from '@emotion/core'
import { ModalProps } from '../state/types'
import { CourierP } from '../components/SharedStyledComponents'

const AboutModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  // const [open, setOpen] = useState(isOpen);
  const body = (
    <div css={css`
      background-color: white;
      margin: 3rem;
      padding: 1rem 2rem;
    `}>
      <h2 id="simple-modal-title" style={{ fontFamily: 'Courier New' }}>About</h2>
      <CourierP id="simple-modal-description">
        This site was engineered to have a mind of its own. For example, I think it's best if you spend no more than 15 minutes of your day here, so the website automatically restricts the amount of content you can browse here each day.
      </CourierP>
      <CourierP>
        ha.com is the brainchild of Hassan Abudu. You can write to him at <a href="mailto:meyian@gmail.com">meyian@gmail.com</a>
      </CourierP>
    </div>
  );

  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      {body}
    </Modal>
  )
}

export default AboutModal
