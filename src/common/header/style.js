import styled from 'styled-components'
import logoPic from '../../statics/img/logo.png'

export const HeaderWrapper = styled.div `
  width: 100%;
  height: 50px;
  position: fixed;
  top: 0;
  left: 0;
  background: white;
  box-shadow: 0 2px 6px 0 rgba(0,0,0,0.04);
  z-index:999;
`
export const HeaderWrapperInner = styled.div `
  /* overflow: hidden; */
  width: 1000px;
  margin: 0 auto;
  cursor: pointer;
  line-height: 50px;
  text-align: center;
  color: #555;
  font-size: 14px;
` 

export const Logo = styled.div `
  float: left;
  display: block;
  width: 72px;
  height: 25px;
  background: url(${logoPic}) no-repeat;
  background-size: contain;
  margin-right: 60px;
  margin: 12px 60px 13px 0;
`

export const HeaderWrapperNav = styled.div `
  float: left;
  display: block;
  height: 50px;
  /* background: blue; */
`

export const HeaderWrapperNavItem = styled.a `
  width: 110px;
  line-height: 50px;
  text-align: center;
  display: inline-block;
  color: #555;
  font-size: 14px;
`
export const HeaderWrapperNavItemAboutUs = styled.div `
    cursor: pointer;
    position: relative;
    width: 110px;
    line-height: 50px;
    text-align: center;
    display: inline-block;
    color: #555;
    font-size: 14px;
`

export const HeaderWrapperNavItemList = styled.div `
  position: absolute;
  top: 40px;
  left: 0;
  width: 110px;
  height: 129px;
  z-index: 1000;
  background: #fff;
  border: 1px solid #eee;
  color: #000;
  border-radius: 4px;
  -webkit-box-shadow: 0 1px 2px #eee;
  box-shadow: 0 1px 2px #eee;
  /* background: green; */
  display: none;
  
`
export const HeaderWrapperNavItemListItem = styled.a `
  width: 88px;
  height: 30px;
  display: block;
  line-height: 30px;
  margin-left: 10px;
  margin-top: 8px;
  font-size: 16px;
  color: #555;
  &:hover {
    color: black;
  }
`