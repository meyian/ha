import { createStore as reduxCreateStore } from "redux"

const INCREMENT = 'INCREMENT'

interface IncrementAction {
  type: typeof INCREMENT
}

interface CounterState{
  count: number
}

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
