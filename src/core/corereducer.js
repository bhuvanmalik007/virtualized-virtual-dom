import Reducer from '../futils/reducecreator'

const MODAL_ACTION_HANDLERS = {
  SHOW_MODAL: (s, a) => Object.assign({}, s, {
    visibility: !s.visibility, url: a.url})
}

const modalInitialState = { visibility: false }

export default Reducer(modalInitialState, MODAL_ACTION_HANDLERS)
