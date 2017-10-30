import { combineEpics } from 'redux-observable'

export default function createRootEpic () {
  return combineEpics()
}
