import { Observable } from 'rxjs/Observable' //eslint-disable-line
import { WMGImagesUrl } from '../../constants'

const fetchImages = store => {
  const request = fetch(WMGImagesUrl + store.getState().home.offset, { method: 'get' })
    .then(response => response.json())
  return Observable.from(request)
}

const loadMore = (action$, store) =>
  action$.ofType('INIT_STATE')
  .mergeMap(action => fetchImages(store)
    .map((results) => ({ type: 'SET_RESULTS', results: results.data }))
  )

const fetchDetails = imgId => {
  const request = fetch('https://www.wedmegood.com/api/v1/gallery/image/' + imgId + '?version=1.1&token=59f6f28c4d4654.99630599',
   { method: 'get' })
    .then(response => response.json())
  return Observable.from(request)
}

const checkIsLoaded = (action$, store) =>
  action$.ofType('SHOW_MODAL')
  .filter(action => !store.getState().home.results[action.currentIndex].isLoaded)
  .mergeMap(action => fetchDetails(store.getState().home.results[action.currentIndex].image_id)
    .map((details) => ({ type: 'SET_DETAILS', details: details.data[0], currentIndex: action.currentIndex }))
  )

export default [loadMore, checkIsLoaded]
