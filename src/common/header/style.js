import styled from 'styled-components'
import logoPic from '../../statics/img/logo.png'

export const HeaderWrapper = styled.div `
  width: 100%;
  height: 50px;
  /* background: green; */
  box-shadow: 0 2px 6px 0 rgba(0,0,0,0.04);
`
export const HeaderWrapperInner = styled.div `
  overflow: hidden;
  width: 1000px;
  margin: 0 auto;
  /* background: red; */
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