import { Action as BaseAction } from 'redux'

export const ADD_TARTAR = Symbol('add tartar')
export const REMOVE_TARTAR = Symbol('remove tartar')

type Action = BaseAction<symbol>

export interface AddTartar extends Action {
  date: Date
  count: number
}

export function addTartar(count: number): AddTartar {
  return {
    type: ADD_TARTAR,
    date: new Date(),
    count
  }
}

export interface RemoveTartar extends Action {
  date: Date
  count: number
}

export const removeTartar = (count: number): RemoveTartar => ({
  type: REMOVE_TARTAR,
  date: new Date(),
  count
})
