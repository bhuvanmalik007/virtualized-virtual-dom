import { Observable } from 'rxjs/Observable' //eslint-disable-line
// const url = 'https://api.giphy.com/v1/gifs/search?q=hello&api_key=dc6zaTOxFJmzC'
const url = 'https://www.wedmegood.com/api/v1/gallery?version=1.3&token=59f6f28c4d4654.99630599&random=78&limit=10&offset='

import request from 'superagent'
let headers = new Headers({"Access-Control-Allow-Origin": "*"})

const fetchImages = store => {
  const request = fetch(url + store.getState().home.offset,
  { method: 'get', headers: headers })
    .then(response => response.json())
  return Observable.from(request)
}

// const fetchImages = store => {
//   const request = fetch('https://api.giphy.com/v1/gifs/search?q=hello&limit=5&offset=' + store.getState().home.offset + '&api_key=dc6zaTOxFJmzC',
//   { method: 'get' })
//     .then(response => response.json())
//   return Observable.from(request)
// }

// const fetchWords = searchString => {
//   const req = request('GET',url)
//   .withCredentials()
//     .then(response => response.json())
//   return Observable.from(request)
// }


// const setResults = (results) => {
//   ({ type: 'SET_RESULTS', results })
// }

const initState = (action$, store) =>
  action$.ofType('INIT_STATE')
  .mergeMap(action => fetchImages(store)
    .map((results) => ({ type: 'SET_RESULTS', results: results.data }))
  )

// const loadMore = (action$, store) =>
//   action$.ofType('LOAD_MORE')
//   .mergeMap(action => fetchWords()
//     .map((results) => (setResults(results.data)))
//   )


export default [initState]
