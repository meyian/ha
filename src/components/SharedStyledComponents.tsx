import styled from '@emotion/styled'
import { siteSpecific, colors } from '../styles/variables'

export const CourierP = styled.p`
  font-family: ${ siteSpecific.siteFont };
  font-weight: 400;
  font-style: normal;
`

export const PlainButton = styled.button`
  background-color: transparent;
  border: none;
  font-family: "Courier New";
  padding: 0;

  &:active{
    color: ${colors.writingVelvet};
  }
`

export const VelvetButton = styled(PlainButton)`
  color: ${colors.writingVelvet};

  &:active{
    color: black;
  }
`