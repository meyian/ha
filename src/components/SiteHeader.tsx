import styled from '@emotion/styled'

import React, { useState } from 'react'
import { PlainButton } from './SharedStyledComponents'
import SettingsIcon from '@material-ui/icons/Settings'
import SettingsModal from './SettingsModal';
import AboutModal from './AboutModal';
import Logo from '../components/Logo'

const Header = styled.header`
  height: 3rem
`

const HelpSpan = styled.span`
  font-weight: 800;
  margin-left: 2rem;
  font-size: 1.2rem;
`

interface SiteHeaderProps {
  menuVisible: boolean
}

const SiteHeader: React.FC<SiteHeaderProps> = ({ menuVisible }) => {

  const [modalState, setModalState] = useState(
    {
      settingsModal: false,
      aboutModal: false
    }
  )

  const handleSettingsClick = (event: React.MouseEvent<HTMLElement>) => {
    console.log("[open settings modal]")
    setModalState({...modalState, settingsModal: true})
    event.stopPropagation()
  }

  const handleAboutClick = (event: React.MouseEvent<HTMLElement>) => {
    console.log("[open about modal]")
    setModalState({...modalState, aboutModal: true})
    event.stopPropagation()
  }

  const handleCloseModals = (event: React.MouseEvent<HTMLElement>) => {
    setModalState({...modalState, settingsModal: false, aboutModal: false})
    event.stopPropagation()
  }


  return (
    <Header>
      <div style={{ width: "100%", position: "relative" }}>
        <div style={{ width: "100%", position: "absolute", left: "0", top: "0", textAlign: "center" }}>
          <Logo />
        </div>
        {menuVisible && <nav style={{ display: "inline-block", position: "absolute", right: "0", top: "0", textAlign: "center" }}>
          <PlainButton onClick={handleSettingsClick} ><SettingsIcon /></PlainButton>
          <PlainButton onClick={handleAboutClick} >
            <HelpSpan>?</HelpSpan>
          </PlainButton>
        </nav>}
      </div>
      <SettingsModal isOpen={modalState.settingsModal} onClose={handleCloseModals} />
      <AboutModal isOpen={modalState.aboutModal} onClose={handleCloseModals} />
    </Header>
  )
}

export default SiteHeader

/*

Todo:

* Unify modals


*/