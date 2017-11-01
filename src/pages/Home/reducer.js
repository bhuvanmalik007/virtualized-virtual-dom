import Reducer from '../../futils/reducecreator'

const initialState = {
  results: [],
  limit: 20,
  offset: 0,
  hasMore: true
}

const ACTION_HANDLERS = {
  SET_RESULTS: (s, a) => Object.assign({}, s, {
    results: [...s.results, ...a.results],
    offset: s.results.length + a.results.length,
    hasMore: a.results.length == s.limit
  })
}

export default Reducer(initialState, ACTION_HANDLERS)
