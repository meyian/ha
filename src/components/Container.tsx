import * as React from 'react'
import styled from '@emotion/styled'

import { siteSpecific } from '../styles/variables'

const StyledContainer = styled.div`
  height: calc(100vh - ${siteSpecific.sizes.styledPagePaddingInRem * 2 + "rem"});
  width: calc(100vw - ${siteSpecific.sizes.styledPagePaddingInRem * 2 + "rem"});
  display: flex;
  flex-direction: column;
`

interface ContainerProps {
  className?: string
}

const Container: React.FC<ContainerProps> = ({ children, className }) => <StyledContainer className={className}>{children}</StyledContainer>

export default Container
