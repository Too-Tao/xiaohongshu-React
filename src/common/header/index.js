import React, { Component } from 'react'
import { 
HeaderWrapper,
HeaderWrapperInner,
Logo,
HeaderWrapperNav,
HeaderWrapperNavItem
} from './style'

export default class Header extends Component {
  render() {
    return (
      <div>
        <HeaderWrapper>
          <HeaderWrapperInner>
            <Logo/>
            <HeaderWrapperNav>
              <HeaderWrapperNavItem>首页</HeaderWrapperNavItem>
              <HeaderWrapperNavItem>精选社区</HeaderWrapperNavItem>
              <HeaderWrapperNavItem>关于我们</HeaderWrapperNavItem>
              <HeaderWrapperNavItem>加入我们</HeaderWrapperNavItem>
              <HeaderWrapperNavItem>招商合作</HeaderWrapperNavItem>
              <HeaderWrapperNavItem>品牌账号</HeaderWrapperNavItem>
            </HeaderWrapperNav>
          </HeaderWrapperInner>
        </HeaderWrapper>
      </div>
    )
  }
}
