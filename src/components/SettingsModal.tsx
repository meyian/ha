import React from 'react'
import Modal from '@material-ui/core/Modal'
import { css } from '@emotion/core'
import { ModalProps } from '../state/types'
import { CourierP } from '../components/SharedStyledComponents'

const SettingsModal: React.FC<ModalProps> = ({ isOpen, onClose }: ModalProps) => {
  // const [open, setOpen] = useState(isOpen);
  const body = (
    <div css={css`
      background-color: white;
      margin: 3rem;
      padding: 1rem 2rem;
    `}>
      <h2 id="simple-modal-title" style={{ fontFamily: 'Courier New' }}>Settings</h2>
      <CourierP id="simple-modal-description">
        The default /lighter/richer/ setting is at a <em>3</em>
      </CourierP>
      <CourierP>
        lower |||.. higher
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

export default SettingsModal
