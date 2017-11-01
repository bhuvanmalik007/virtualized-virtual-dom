import React from 'react'
import PropTypes from 'prop-types'
import { pick } from 'ramda'
import { connect } from 'react-redux'
import { Modal } from 'office-ui-fabric-react/lib/Modal'
import Image from 'grommet/components/Image'
import Box from 'grommet/components/Box'
import Split from 'grommet/components/Split';

const ReduxModal = ({ visibility, showModal, closeModal, data }) =>
  (
    <Modal
      isOpen={visibility}
      isBlocking={false}
      onDismiss={closeModal} >
      {data && data.isLoaded && <Box pad='medium' direction='row' align='center'>
        {data &&  data.image_url && <Image src={data.image_url.replace('%%X', '400X')} />}
        <Box direction='column' colorIndex='light-2' align='center' alignContent='center' justify='start'
          size={{height: 'full', width: 'medium'}} basis='medium'>
          Details
        </Box>
      </Box>}
      {data && !data.isLoaded && <div>loading</div>}
    </Modal>
  )

ReduxModal.propTypes = {
  visibility: PropTypes.bool,
  showModal: PropTypes.func
}

const mapDispatchToProps = dispatch => ({
  showModal: () => dispatch({ type: 'SHOW_MODAL' }),
  closeModal: () => dispatch({ type: 'CLOSE_MODAL' })
})

const mapStateToProps = state => ({
  ...pick(['visibility', 'currentIndex'], state.core),
  data: state.home.results[state.core.currentIndex]
})

export default connect(mapStateToProps, mapDispatchToProps)(ReduxModal)
