import { INCREMENT, TAPPED_SCREEN } from './actions'

export interface IncrementAction {
  type: typeof INCREMENT
}

export interface TappedAction {
  type: typeof TAPPED_SCREEN
}

export interface CounterState{
  count: number
}

export interface SiteState{
  menuVisible: boolean
}