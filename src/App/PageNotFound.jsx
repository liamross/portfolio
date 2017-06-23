import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'

const PageNotFound = () => (
  <div>404: Page Not Found</div>
)

PageNotFound.propTypes = {
  returnToMain: PropTypes.func.isRequired,
}

const mapStateToProps = (/*state, ownProps*/) => ({

})

const mapDispatchToProps = dispatch => ({
  returnToMain: () => dispatch(push('/')),
})

export default connect(mapStateToProps, mapDispatchToProps)(PageNotFound)
