import React, {Component} from 'react'
import {render} from 'react-dom'

import FlickrLightbox from '../../src'

class Demo extends Component {
  render() {
    return (
      <FlickrLightbox api_key='1b4e5b0203fab0d5731afe68f0a543e1' user_id='132343752@N06' limit={10} />
    )
  }
}

render(<Demo/>, document.querySelector('#demo'))
