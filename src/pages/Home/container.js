import { connect } from 'react-redux'
import { pick } from 'ramda' //eslint-disable-line
import Home from './main'

const mapDispatchToProps = dispatch => ({
  initState: () => dispatch({ type: 'INIT_STATE' }),
  loadMore: () => dispatch({ type: 'LOAD_MORE' }),
  showModal: (url) => dispatch({type:'SHOW_MODAL', url})
})

const mapStateToProps = state => ({
  ...pick(['results', 'hasMore'], state.home)
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
