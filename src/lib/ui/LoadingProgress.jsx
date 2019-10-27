import React, { Component } from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'

class LoadingProgress extends Component {
  render() {
    return (
      <div className="modal">
        <CircularProgress/>
      </div>
    )
  }
}

export default LoadingProgress
