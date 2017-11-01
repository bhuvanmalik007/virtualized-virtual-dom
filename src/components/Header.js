import React from 'react'
import { pick } from 'ramda' //eslint-disable-line
import Header from 'grommet/components/Header'
import Box from 'grommet/components/Box'
import styled from 'styled-components'
import { WMGLogoUrl, WMGColor } from '../constants'

const WMGHeader = styled(Header)`
  background-color: ${WMGColor};
`

export default  _ => (
  <WMGHeader splash={false} responsive wrap float={false} fixed={false}>
    <Box size='xlarge' direction='row' flex align='center' justify='start' alignSelf='center'
      pad={{ horizontal: 'medium', vertical:'none' }} >
      <img src={WMGLogoUrl}></img>
    </Box>
  </WMGHeader>
)
