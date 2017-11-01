import { Observable } from 'rxjs/Observable' //eslint-disable-line
// const url = 'https://api.giphy.com/v1/gifs/search?q=hello&api_key=dc6zaTOxFJmzC'
const url = 'https://www.wedmegood.com/api/v1/gallery?version=1.3&token=59f6f28c4d4654.99630599&random=78&limit=20&offset='
const url2 = 'https://www.wedmegood.com/api/v1/gallery/image/482082?version=1.1&token=59f6f28c4d4654.99630599'
import request from 'superagent'
let headers = new Headers({ "Access-Control-Allow-Origin": "*" })

const fetchImages = store => {
  const request = fetch(url + store.getState().home.offset, { method: 'get', headers: headers })
    .then(response => response.json())
  return Observable.from(request)
}

const initState = (action$, store) =>
  action$.ofType('INIT_STATE')
  .mergeMap(action => fetchImages(store)
    .map((results) => ({ type: 'SET_RESULTS', results: results.data }))
  )

const fetchDetails = imgId => {
  const request = fetch('https://www.wedmegood.com/api/v1/gallery/image/' + imgId + '?version=1.1&token=59f6f28c4d4654.99630599',
   { method: 'get', headers: headers })
    .then(response => response.json())
  return Observable.from(request)
}

const getDetails = (action$, store) =>
  action$.ofType('FETCH_DETAILS')
  .mergeMap(action => fetchDetails(action.imgId)
    .map((results) => ({ type: 'SHOW_MODAL', data: results.data }))
  )

const checkIsLoaded = (action$, store) =>
  action$.ofType('SHOW_MODAL')
  .filter(action => !store.getState().home.results[action.currentIndex].isLoaded)
  .mergeMap(action => fetchDetails(store.getState().home.results[action.currentIndex].image_id)
    .map((details) => ({ type: 'SET_DETAILS', details: details.data[0], currentIndex: action.currentIndex }))
  )


export default [initState, getDetails, checkIsLoaded]
