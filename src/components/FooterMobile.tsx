import React, { useState } from 'react'
import styled from '@emotion/styled'

import { siteSpecific } from '../styles/variables'

import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';


const Footer = styled.footer`
  height: 2rem
`

export default function FooterMobile(){
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <Footer>
      <Button onClick={() => setIsDrawerOpen(true)}>Menu</Button>
      <Drawer anchor="left" open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
        <h2>[drawer]</h2>
      </Drawer>
    </Footer>
  )
}