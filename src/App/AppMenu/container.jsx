import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import * as actions from './actions'
import AppMenu from './component'

const AppMenuContainer = ({ isAppMenuOpen, setAppMenu }) => (
  <AppMenu
    className="app-panel"
    isAppMenuOpen={isAppMenuOpen}
    setAppMenu={setAppMenu}
  />
)

AppMenuContainer.propTypes = {
  isAppMenuOpen: PropTypes.bool.isRequired,
  setAppMenu: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  isAppMenuOpen: state.topbar.panels.appMenuOpen,
})

const mapDispatchToProps = dispatch => ({
  setAppMenu: bool => dispatch(actions.setAppMenu(bool)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AppMenuContainer)
