import React, { useState } from 'react'
import styled from '@emotion/styled'

import { siteSpecific } from '../styles/variables'


const Footer = styled.footer`
  height: ${siteSpecific.sizes.breadSlice}
`

export default function FooteMobile(){
  return (
    <Footer>
      [FooteMobile]
    </Footer>
  )
}