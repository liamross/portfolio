import React from 'react'
import PropTypes from 'prop-types'
import './style.scss'

const AppMenu = ({ isAppMenuOpen, setAppMenu }) => (
  <div className={isAppMenuOpen ? 'AppMenu open' : 'AppMenu'}>
    {/* Colored Dimmer */}
    <div className="AppMenu__visual-dimmer" />
    {/* Clickable Dimmer */}
    <div
      className="AppMenu__clickable-dimmer"
      onClick={() => setAppMenu(false)}
      role="menu"
      tabIndex={0}
    />
    {/* Menu Panel */}
    <div className="AppMenu__panel">
      <div className="MenuItem-wrapper">
      Panel Open? {String(isAppMenuOpen)}
      </div>
    </div>
  </div>

)

AppMenu.propTypes = {
  isAppMenuOpen: PropTypes.bool.isRequired,
  setAppMenu: PropTypes.func.isRequired,
}

export default AppMenu
