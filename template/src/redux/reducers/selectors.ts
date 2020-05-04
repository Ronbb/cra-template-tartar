import { GlobalState, TartarHistory } from './index'

export const selectLastFromHistory = (state: GlobalState): TartarHistory =>
  state.history[state.history.length]
export const selectHistory = (state: GlobalState): Array<TartarHistory> => state.history
