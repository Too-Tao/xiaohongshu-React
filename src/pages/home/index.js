import React, { Component } from 'react'
import {
  HomeWrapper,
  HomeWrapperTop,
  HomeWrapperTopLeft,
  HomeWrapperTopRight,
  HomeWrapperTopLeftH1,
  HomeWrapperTopLeftAfter,
  HomeWrapperTopLeftPic,
  SpecialRed,
  SpecialGray,
  VideoItem,
  Video
} from './style'

export default class Home extends Component {
  render() {
    return (
      <div>
        <HomeWrapper>
          <HomeWrapperTop>
            <HomeWrapperTopLeft>
              <HomeWrapperTopLeftH1>小红书</HomeWrapperTopLeftH1>
              <HomeWrapperTopLeftAfter></HomeWrapperTopLeftAfter>
              <HomeWrapperTopLeftPic></HomeWrapperTopLeftPic>
            </HomeWrapperTopLeft>
            <HomeWrapperTopRight>
            </HomeWrapperTopRight>
          </HomeWrapperTop>
          <SpecialRed>
          </SpecialRed>
          <SpecialGray>
          </SpecialGray>
          <VideoItem>
          </VideoItem>
          <Video>
          </Video>
        </HomeWrapper>
      </div>
    )
  }
}
