import React from 'react'
import PropTypes from 'prop-types'
import { pick } from 'ramda'
import { connect } from 'react-redux'
import { Modal } from 'office-ui-fabric-react/lib/Modal'
import Image from 'grommet/components/Image'
import Box from 'grommet/components/Box'

const ReduxModal = ({ visibility, showModal, url }) =>
  <Modal
    isOpen={visibility}
    isBlocking={false}
    onDismiss={showModal} >
    <Box colorIndex='light-2' align='center' pad='medium'>
      <Image src={url} />
    </Box>
  </Modal>

ReduxModal.propTypes = {
  visibility: PropTypes.bool,
  showModal: PropTypes.func
}

const mapDispatchToProps = dispatch => ({
  showModal: () => dispatch({ type: 'SHOW_MODAL' })
})

const mapStateToProps = state => ({
  ...pick(['visibility', 'url'], state.core)
})

export default connect(mapStateToProps, mapDispatchToProps)(ReduxModal)
