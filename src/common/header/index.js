import React, { Component } from 'react'
import { 
HeaderWrapper,
HeaderWrapperInner,
Logo,
HeaderWrapperNav,
HeaderWrapperNavItem,
HeaderWrapperNavItem_aboutUs,
HeaderWrapperNavItem_list,
HeaderWrapperNavItem_list_item
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
              <HeaderWrapperNavItem_aboutUs>
                关于我们
                <HeaderWrapperNavItem_list>
                  <HeaderWrapperNavItem_list_item>关于我们</HeaderWrapperNavItem_list_item>
                  <HeaderWrapperNavItem_list_item>媒体报道</HeaderWrapperNavItem_list_item>
                  <HeaderWrapperNavItem_list_item>联系我们</HeaderWrapperNavItem_list_item>
                </HeaderWrapperNavItem_list>
              </HeaderWrapperNavItem_aboutUs>
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
