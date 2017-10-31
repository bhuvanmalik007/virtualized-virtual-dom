import Reducer from '../../futils/reducecreator'

const initialState = {
  results: [],
  limit: 10,
  offset: 0,
  hasMore: true
}

const ACTION_HANDLERS = {
  // INIT_STATE: (s,a) => Object.assign({}, s, {
  //   offset: s.offset + 5
  // }),
  SET_RESULTS: (s, a) => Object.assign({}, s, {
    results: [...s.results, ...a.results],
    offset: s.results.length + a.results.length,
    hasMore: a.results.length == s.limit
  })
}

export default Reducer(initialState, ACTION_HANDLERS)
