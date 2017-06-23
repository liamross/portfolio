import React from 'react'
import { Dimmer, Loader } from 'semantic-ui-react'
import './style.scss'

const DimLoader = () => (
  <Dimmer active className="loader-wrapper">
    <Loader />
  </Dimmer>
)

export default DimLoader
