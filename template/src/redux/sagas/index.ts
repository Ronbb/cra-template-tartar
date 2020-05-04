/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  takeEvery,
  put,
  call,
  fork,
  select,
  delay,
  ForkEffect,
  SagaReturnType
} from 'redux-saga/effects'
import { selectHistory, selectLastFromHistory } from '../reducers/selectors'

export function* incrementAsync() {
  yield delay(1000)
  yield put({
    type: 'INCREMENT'
  })
}

export default function* root(): Generator<ForkEffect<never>, void> {
  yield takeEvery('INCREMENT_ASYNC', incrementAsync)
}
