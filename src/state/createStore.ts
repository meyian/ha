import {
  createStore as reduxCreateStore,
  applyMiddleware,
  compose,
} from "redux"
import { TAPPED_SCREEN, SETTINGS_MODAL, HIDE_MENU } from "./actions"

export interface SiteState {
  menuVisible: boolean
  numTaps: number
  modalOpen: string | boolean
  intervalId: number
}

const initialState: SiteState = {
  menuVisible: true,
  numTaps: 0,
  modalOpen: false,
  intervalId: -1,
}

const asyncDispatchMiddleware = (store: any) => (next: any) => (action: any) => {
  let syncActivityFinished = false
  let actionQueue: any = []

  function flushQueue() {
    actionQueue.forEach((a: any) => store.dispatch(a)) // flush queue
    actionQueue = []
  }

  function asyncDispatch(asyncAction: any){
    actionQueue = actionQueue.concat([asyncAction])

    if (syncActivityFinished) {
      flushQueue()
    }
  }

  const actionWithAsyncDispatch =
    Object.assign({}, action, { asyncDispatch })

  const res = next(actionWithAsyncDispatch)

  syncActivityFinished = true
  flushQueue()

  return res
}

const middleware: ((store: any) => any)[] = [asyncDispatchMiddleware]

function reducer(state = initialState, action: any): SiteState {
  // tapping
  if (action.type === TAPPED_SCREEN) {

    // cancel timeout interval, set a new one
    console.log('about to hide menu')

    const newIntervalId = window.setTimeout(() => {
      action.asyncDispatch({ type: HIDE_MENU })
    }, 2500)

    return {
      ...state,
      intervalId: newIntervalId,
      numTaps: state.numTaps + 1,
      menuVisible: true,
    }
  }
  // hide the menu
  if (action.type == HIDE_MENU) {
    console.log('hiding menu')
    return {
      ...state,
      menuVisible: false,
    }
  }
  // modals
  switch (action.type) {
    case SETTINGS_MODAL:
      return {
        ...state,
        modalOpen: action.isDisplaying ? SETTINGS_MODAL : false,
      }
  }

  return state
}

const createStore = () => reduxCreateStore(reducer, initialState, compose(applyMiddleware(...middleware)))
export default createStore
