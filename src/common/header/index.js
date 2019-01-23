import React, { Component } from 'react'
import { 
HeaderWrapper,
HeaderWrapperInner,
Logo,
HeaderWrapperNav,
HeaderWrapperNavItem,
HeaderWrapperNavItemAboutUs,
HeaderWrapperNavItemList,
HeaderWrapperNavItemListItem
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
              <HeaderWrapperNavItemAboutUs 
                ref="aboutUs" 
                onMouseEnter={() => {
                 this.refs.listRef.style.display = 'block'
                }}
                onMouseLeave={ () => {
                  this.refs.listRef.style.display = 'none'
                }
                }
              >
                关于我们
                <HeaderWrapperNavItemList ref= "listRef">
                  <HeaderWrapperNavItemListItem>关于我们</HeaderWrapperNavItemListItem>
                  <HeaderWrapperNavItemListItem>媒体报道</HeaderWrapperNavItemListItem>
                  <HeaderWrapperNavItemListItem>联系我们</HeaderWrapperNavItemListItem>
                </HeaderWrapperNavItemList>
              </HeaderWrapperNavItemAboutUs>
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
