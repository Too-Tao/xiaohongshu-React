import React, { Component } from 'react'
import {
  HomeWrapperTop,
  HomeWrapperTop_left,
  HomeWrapperTop_right,
  HomeWrapperTop_left_h1,
  HomeWrapperTop_left_after,
  HomeWrapperTop_left_pic
} from './style'

export default class Home extends Component {
  render() {
    return (
      <div>
        <HomeWrapperTop>
          <HomeWrapperTop_left>
            <HomeWrapperTop_left_h1>小红书</HomeWrapperTop_left_h1>
            <HomeWrapperTop_left_after></HomeWrapperTop_left_after>
            <HomeWrapperTop_left_pic></HomeWrapperTop_left_pic>
          </HomeWrapperTop_left>
          <HomeWrapperTop_right>
          </HomeWrapperTop_right>
        </HomeWrapperTop>
      </div>
    )
  }
}
