import React from 'react'
import PropTypes from 'prop-types'
import { Menu, Image } from 'semantic-ui-react'
import AppMenu from '../AppMenu'
import './style.scss'

const TopBar = ({ setAppMenu }) => (
  <div className="TopBar">
    <Menu attached="top">
      {/* App Menu Button */}
      <Menu.Item
        icon="bars"
        onClick={() => setAppMenu(true)}
        className="TopBar__app-menu-button"
      />

      <Menu.Menu position="right">
        {/* Notifications */}
        <Menu.Item
          icon="bars"
          onClick={this.handleItemClick}
          className="TopBar__notifications-button"
        />
        {/* User Profile Reveal */}
        <Image src="none" size="small" className="TopBar__profile-picture" />
      </Menu.Menu>
    </Menu>
    <AppMenu.component />
  </div>
)

TopBar.propTypes = {
  setAppMenu: PropTypes.func.isRequired,
}

export default TopBar
