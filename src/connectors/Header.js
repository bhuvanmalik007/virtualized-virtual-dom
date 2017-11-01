import React from 'react'
import { pick } from 'ramda' //eslint-disable-line
import { connect } from 'react-redux'
import Header from 'grommet/components/Header'
import Box from 'grommet/components/Box'
import styled from 'styled-components'

const WMGHeader = styled(Header)`
  background-color: #e82f77;
`

export const AppHeader = _ => (
  <WMGHeader splash={false} responsive wrap float={false} fixed={false}>
    <Box size='xlarge' direction='row' flex align='center' justify='start' alignSelf='center'
      pad={{ horizontal: 'medium', vertical:'none' }} >
      <img src='https://images.wedmegood.com/images/WMG-logo.svg'></img>
    </Box>
  </WMGHeader>
)

const mapStateToProps = state => ({
})

export default connect(mapStateToProps)(AppHeader)
