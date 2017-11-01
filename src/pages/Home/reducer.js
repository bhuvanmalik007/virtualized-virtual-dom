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
  }),
  SET_DETAILS: (s, a) => Object.assign({}, s, {
    results: [
      ...s.results.slice(0, a.currentIndex),
      {...s.results[a.currentIndex], ...a.details, isLoaded: true},
      ...s.results.slice(a.currentIndex + 1)
    ]
  })
}

export default Reducer(initialState, ACTION_HANDLERS)
