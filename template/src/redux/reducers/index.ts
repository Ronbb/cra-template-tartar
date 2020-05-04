import { combineReducers } from 'redux'
import { ADD_TARTAR, REMOVE_TARTAR, AddTartar, RemoveTartar } from '../actions'

export interface TartarHistory {
  date: Date
  count: number
}

export interface TartarState {
  count: number
  history: Array<TartarHistory>
}

const tartar: TartarState = {
  count: 0,
  history: []
}

export type TartarActions = AddTartar | RemoveTartar

export type GlobalState = TartarState

export type GlobalActions = TartarActions

function tartarReducer(state = tartar, action: TartarActions): TartarState {
  switch (action.type) {
    case ADD_TARTAR:
      return {
        count: state.count + action.count,
        history: [
          ...state.history,
          {
            date: action.date,
            count: action.count
          }
        ]
      }
    case REMOVE_TARTAR:
      return {
        count: state.count - action.count,
        history: [
          ...state.history,
          {
            date: action.date,
            count: action.count
          }
        ]
      }
    default:
      return state
  }
}

const rootReducer = combineReducers({
  tartarReducer
})

export default rootReducer
