import { createStore as reduxCreateStore } from "redux";
import { TAPPED_SCREEN, SETTINGS_MODAL, HIDE_MENU } from "./actions";



export interface SiteState{
  menuVisible: boolean,
  numTaps: number,
  modalOpen: string|boolean,
  intervalId: number
}

const initialState: SiteState = {
  menuVisible: true,
  numTaps: 0,
  modalOpen: false,
  intervalId: -1
};

function reducer(state = initialState, action: any): SiteState {
  // tapping
  if (action.type === TAPPED_SCREEN) {
    // cancel timeout interval, set a new one

    const newIntervalId = window.setTimeout(() => {
      
    }, 2500);

    return {
      ...state,
      intervalId: newIntervalId,
      numTaps: state.numTaps + 1,
      menuVisible: true,
    };
  }
  // hide the menu
  if (action.type == HIDE_MENU){
    return {
      ...state,
      menuVisible: false,
    };
  }
  // modals
  switch (action.type) {
    case SETTINGS_MODAL:
      return {
        ...state,
        modalOpen: action.isDisplaying ? SETTINGS_MODAL : false,
      };
  }

  return state;
}

const createStore = () => reduxCreateStore(reducer, initialState);
export default createStore;
