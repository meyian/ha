import styled from '@emotion/styled'

import { VelvetButton } from '../components/SharedStyledComponents'
import Container from '../components/Container'
import Modals from '../components/Modals'
import SiteHeader from '../components/SiteHeader'
import FooterMobile from '../components/FooterMobile'

import { MobileSiteProps } from '../state/types'

const Main = styled.main`
  flex-grow: 1
`

export default ({ children, menuVisible, onTap, numTaps }: MobileSiteProps) => {
  return (
    <Container className="no-focus-outline mobile-site" onClick={onTap}>
      <SiteHeader menuVisible={menuVisible} />
      <Main>
        <p>Number of taps: {numTaps}</p>
        {children}
      </Main>
      <section>
        <VelvetButton>request a feature</VelvetButton>
      </section>
      <FooterMobile />
      <Modals />
    </Container>
  )
}