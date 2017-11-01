import { connect } from 'react-redux'
import { pick } from 'ramda' //eslint-disable-line
import Home from './main'

const mapDispatchToProps = dispatch => ({
  loadMore: () => dispatch({ type: 'INIT_STATE' }),
  showModal: (currentIndex) => dispatch({type:'SHOW_MODAL', currentIndex}),
})

const mapStateToProps = state => ({
  ...pick(['results', 'hasMore'], state.home)
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
