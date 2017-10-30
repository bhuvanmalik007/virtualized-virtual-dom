import React from 'react'
import { pick } from 'ramda' //eslint-disable-line
import { connect } from 'react-redux'
import { Link } from 'react-router' //eslint-disable-line
import PropTypes from 'prop-types' //eslint-disable-line
import Header from 'grommet/components/Header'
import Title from 'grommet/components/Title'
import Box from 'grommet/components/Box'

export const AppHeader = props => (
  <Header splash={false}
    float={false}
    fixed={false}>
    <Title>
      Sample Title
    </Title>
    <Box flex
      justify='end'
      direction='row'
      responsive={false}>
      icons
    </Box>
  </Header>
)

AppHeader.propTypes = {
}

const mapStateToProps = state => ({
})

export default connect(mapStateToProps)(AppHeader)
