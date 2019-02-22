import styled from 'styled-components'
import homeTopRightPic from '../../statics/img/homeTopRightPic.png'
import homeWrapperTopLeftPic from '../../statics/img/homeWrapperTopLeft_pic.jpg'

export const HomeWrapper = styled.div `
  width: 100%;
`

export const HomeWrapperTop = styled.div `
  overflow: hidden;
  width: 1100px;
  margin: 0 auto;
  margin-top: 90px;
  /* background: green; */
`

export const HomeWrapperTopLeft = styled.div `
  float: left;
  display: block;
  width: 380px;
  height: 433px;
  /* background: red; */
`
export const HomeWrapperTopLeftH1 = styled.h1 `
  font-size: 48px;
  font-weight: bold;
  margin: 0;
`
export const HomeWrapperTopLeftAfter = styled.div `
  width: 100%;
  height: 48px;
  margin-top: 10px;
  background: green;
`
export const HomeWrapperTopLeftPic = styled.div `
    width: 248px;
    height: 16px;
    display: block;
    margin-top: 10px;
    background: url(${homeWrapperTopLeftPic}) no-repeat;
    background-size: contain;
`
export const HomeWrapperTopLeftPhone = styled.div `
  width: 150px;
  height: 40px;
`

export const HomeWrapperTopRight = styled.div `
  float: right;
  display: block;
  width: 500px;
  height: 260px;
  background: url(${homeTopRightPic}) no-repeat;
  background-size: contain;
`

export const SpecialRed = styled.div `
  width: 100%;
  height: 830px;
  background-color: #ff2741;
`

export const SpecialGray = styled.div `
  width: 100%;
  height: 830px;
  background-color: #fbfbfb;
`

export const VideoItem = styled.div `
  width: 100%;
  height: 707px;
  background-color: white;
`

export const Video = styled.div `
  width: 100%;
  height: 810px;
  background-color: #ff2741;
`