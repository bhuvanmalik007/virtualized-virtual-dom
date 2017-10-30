import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class LoginView extends Component {

  authenticate () {
    this.props.authenticate(
      this.props.username === this.props.auth.username &&
      this.props.password === this.props.auth.password
    )
  }

  invalidate () {
    this.props.authenticate(false)
  }

  render () {
    return (
      <div>Login Screen</div>
    )
  }
}

LoginView.propTypes = {
  auth: PropTypes.object,
  username: PropTypes.string,
  password: PropTypes.string,
  updateUsername: PropTypes.func,
  updatePassword: PropTypes.func,
  authenticate: PropTypes.func,
  authenticated: PropTypes.bool
}

export default LoginView
