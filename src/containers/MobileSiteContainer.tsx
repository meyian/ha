import React from 'react'
import { connect } from 'react-redux'

import { ChildrenWrapperProps } from '../state/types'
import { TAPPED_SCREEN } from '../state/actions'

import MobileSite from '../components/MobileSite'

import { SiteState } from '../state/createStore'

const mapStateToProps = ({ menuVisible, numTaps }: SiteState) => {
  return { menuVisible, numTaps }
}

const mapDispatchToProps = (dispatch: any) => {
  return { 
    onTap: (event: React.MouseEvent<HTMLElement>) => {
      const target = event.currentTarget as HTMLElement

      if (target.className.indexOf('mobile-site') !== -1){
        dispatch({ type: TAPPED_SCREEN })
      }
    }
  }
}

const ConnectedMobileSite = connect(mapStateToProps, mapDispatchToProps)(MobileSite)

export default ({ children }: ChildrenWrapperProps) => {
  return(
    <>
      <ConnectedMobileSite>
        { children }
      </ConnectedMobileSite>
    </>
  )
}

/*

NB: Have no idea how @types/react-redux works, but it solved my problem


*/