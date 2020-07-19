import { createStore as reduxCreateStore } from "redux"
import { INCREMENT } from './actions'
import { IncrementAction, CounterState } from './types'


const initialState: CounterState = { count: 0 }

function reducer(
  state = initialState, 
  action: IncrementAction
): CounterState {
  if (action.type === INCREMENT) {
    return Object.assign({}, state, {
      count: state.count + 1,
    })
  }
  return state
}

const createStore = () => reduxCreateStore(reducer, initialState)
export default createStore
