import { connect } from 'react-redux'
import { CounterState } from '../state/types'
import { INCREMENT } from '../state/actions'
import React from 'react'
import SiteHeader from '../components/SiteHeader'

interface CounterProps{
  count: number,
  increment: any
}

const Counter = ({ count, increment }: CounterProps) => (
  <div>
    <p>Count: {count}</p>
    <button onClick={increment}>Increment</button>
  </div>
)

const mapStateToProps = ({ count }: CounterState) => {
  return { count }
}

const mapDispatchToProps = (dispatch: any) => {
  return { increment: () => dispatch({ type: INCREMENT }) }
}

const ConnectedCounter = connect(mapStateToProps, mapDispatchToProps)(Counter)

export default () => {
  
  return(
    <>
      <SiteHeader />
      <ConnectedCounter />
    </>
  )
}

/*

NB: Have no idea how @types/react-redux works, but it solved my problem

*/