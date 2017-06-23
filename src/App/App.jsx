import React from 'react'
import PropTypes from 'prop-types'

import TopBar from './TopBar'

const App = ({ children }) => (
  <div className="App" >
    <div className="topbar-wrapper">
      <TopBar.component />
    </div>
    <div className="app-wrapper">
      {children}
    </div>
  </div >
)

App.propTypes = {
  children: PropTypes.node.isRequired,
}

export default App
