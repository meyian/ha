import { createStore as reduxCreateStore } from "redux"
import { TAPPED_SCREEN } from './actions'
import { TappedAction, SiteState } from './types'


const initialState: SiteState = { 
  menuVisible: false
}

function tappingReducer(
  state = initialState, 
  action: TappedAction
): SiteState {
  if (action.type === TAPPED_SCREEN) {
    return {...state, menuVisible: !!state.menuVisible}
  }
  return state
}

const createStore = () => reduxCreateStore(tappingReducer, initialState)
export default createStore
