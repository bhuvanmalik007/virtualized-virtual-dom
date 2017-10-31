import React from 'react'
import PropTypes from 'prop-types'
import Header from '../connectors/Header'
import styled from 'styled-components'
import ReduxModal from '../connectors/reduxmodal'

const CoreBlock = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

const Content = styled.div`
  flex: 1 auto;
`

export const CoreLayout = ({ children }) => (
  <CoreBlock>
    <Header />
    <ReduxModal />
    <Content>
      {children}
    </Content>
  </CoreBlock>
)

CoreLayout.propTypes = {
  children : PropTypes.element.isRequired
}

export default CoreLayout
