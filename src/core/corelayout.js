import React from 'react'
import PropTypes from 'prop-types'
import Header from '../connectors/Header'
import Footer from '../components/appfooter'

export const CoreLayout = ({ children }) => (
  <div>
    <Header />
    <div>
      {children}
    </div>
    <Footer />
  </div>
)

CoreLayout.propTypes = {
  children : PropTypes.element.isRequired
}

export default CoreLayout
