import { combineEpics } from 'redux-observable'
import homeEpics from '../pages/Home/epics'

export default function createRootEpic () {
  return combineEpics(...homeEpics)
}
