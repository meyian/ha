import styled from '@emotion/styled'

import { PlainButton } from '../components/SharedStyledComponents'
import SettingsIcon from '@material-ui/icons/Settings'
import Logo from '../components/Logo'


const Header = styled.header`
  height: 3rem
`

const HelpSpan = styled.span`
  font-weight: 800;
  margin-left: 2rem;
  font-size: 1.2rem;
`

export default function SiteHeader(){
  return (
    <Header>
      <div style={{ width: "100%", position: "relative" }}>
        <div style={{ width: "100%", position: "absolute", left: "0", top: "0", textAlign: "center" }}>
          <Logo />
        </div>
        <div style={{ display: "inline-block", position: "absolute", right: "0", top: "0", textAlign: "center" }}>
          <PlainButton><SettingsIcon /></PlainButton>
          <PlainButton>
            <HelpSpan>?</HelpSpan>
          </PlainButton>
        </div>
      </div>
    </Header>
  )
}