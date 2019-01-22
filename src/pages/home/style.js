import styled from 'styled-components'
import homeTopRightPic from '../../statics/img/homeTopRightPic.png'
import homeWrapperTopLeft_pic from '../../statics/img/homeWrapperTopLeft_pic.jpg'
 
export const HomeWrapperTop = styled.div `
  overflow: hidden;
  width: 1180px;
  margin: 0 auto;
  margin-top: 90px;
  /* background: green; */
`

export const HomeWrapperTop_left = styled.div `
  float: left;
  display: block;
  width: 380px;
  height: 433px;
  /* background: red; */
`
export const HomeWrapperTop_left_h1 = styled.h1 `
  font-size: 48px;
  font-weight: bold;
  margin: 0;
`
export const HomeWrapperTop_left_after = styled.div `
  width: 100%;
  height: 48px;
  margin-top: 10px;
  background: green;
`
export const HomeWrapperTop_left_pic = styled.div `
    width: 248px;
    height: 16px;
    display: block;
    margin-top: 10px;
    background: url(${homeWrapperTopLeft_pic}) no-repeat;
    background-size: contain;
`
export const HomeWrapperTop_left_phone = styled.div `
  width: 150px;
  height: 40px;
`

export const HomeWrapperTop_right = styled.div `
  float: right;
  display: block;
  width: 500px;
  height: 260px;
  background: url(${homeTopRightPic}) no-repeat;
  background-size: contain;
`