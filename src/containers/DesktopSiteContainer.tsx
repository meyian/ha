import { connect } from 'react-redux'
import { SiteState } from '../state/types'
import { TAPPED_SCREEN } from '../state/actions'
import React from 'react'
import SiteHeader from '../components/SiteHeader'

const mapStateToProps = ({ menuVisible }: SiteState) => {
  return { menuVisible }
}

const mapDispatchToProps = (dispatch: any) => {
  return { onTap: () => {
    console.log("mapDispatchToProps > onTap")
    dispatch({ type: TAPPED_SCREEN })
  }}
}

const ConnectedSiteHeader = connect(mapStateToProps, mapDispatchToProps)(SiteHeader)

interface MobileSiteContainerProps{
  children?: React.ReactNode
}

export default ({ children }: MobileSiteContainerProps) => {
  
  return(
    <>
      <ConnectedSiteHeader>
        { children }
      </ConnectedSiteHeader>
    </>
  )
}

/*

NB: Have no idea how @types/react-redux works, but it solved my problem

*/