import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import AppMenu from '../AppMenu'
import TopBar from './component'

const TopBarContainer = ({ isAppMenuOpen, setAppMenu }) => (
  <TopBar
    isAppMenuOpen={isAppMenuOpen}
    setAppMenu={bool => setAppMenu(bool)}
  />
)

TopBarContainer.propTypes = {
  isAppMenuOpen: PropTypes.bool.isRequired,
  setAppMenu: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  isAppMenuOpen: state.topbar.panels.appMenuOpen,
})

const mapDispatchToProps = dispatch => ({
  setAppMenu: bool => dispatch(AppMenu.actions.setAppMenu(bool)),
})

export default connect(mapStateToProps, mapDispatchToProps)(TopBarContainer)
