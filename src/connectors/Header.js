import React from 'react'
import { pick } from 'ramda' //eslint-disable-line
import { connect } from 'react-redux'
import { Link } from 'react-router' //eslint-disable-line
import PropTypes from 'prop-types' //eslint-disable-line
import Header from 'grommet/components/Header'
import Title from 'grommet/components/Title'
import Box from 'grommet/components/Box'
import styled from 'styled-components'

const WMGHeader = styled(Header)`
  background-color: #e82f77;
`

const WMGTitle = styled(Title)`
  color: #ffffff;
`

export const AppHeader = props => (
  <WMGHeader splash={false} responsive wrap float={false} fixed={false}>
    <Box size='xlarge' direction='row' flex align='center' justify='start' alignSelf='center'
      pad={{ horizontal: 'medium', vertical:'none' }} >
      <img src='https://images.wedmegood.com/images/WMG-logo.svg'></img>
    </Box>
  </WMGHeader>
)

AppHeader.propTypes = {
}

const mapStateToProps = state => ({
})

export default connect(mapStateToProps)(AppHeader)
