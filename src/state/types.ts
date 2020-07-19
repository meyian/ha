import { INCREMENT } from './actions'

export interface IncrementAction {
  type: typeof INCREMENT
}

export interface CounterState{
  count: number
}