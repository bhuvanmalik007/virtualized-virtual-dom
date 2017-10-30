import React from 'react'
import { Link } from 'react-router' //eslint-disable-line
import Footer from 'grommet/components/Footer'
import Title from 'grommet/components/Title'
import Box from 'grommet/components/Box'
import Paragraph from 'grommet/components/Paragraph'

export default props =>
  <Footer justify='between'
    size='small'>
    <Title>
      Title
    </Title>
    <Box direction='row'
      align='center'
      pad={{ 'between': 'medium' }}>
      <Paragraph margin='none'>
        © 2017 Bhuvan Malik
      </Paragraph>
    </Box>
  </Footer>
