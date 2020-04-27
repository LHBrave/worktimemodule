import React, { Component } from 'react';
import { NavBar, Icon } from 'antd-mobile';

class Header extends Component {
      render() {
          const {contentName} = this.props;
          return (
            <div>
            <NavBar
              mode="light"
              icon={<Icon type="left" />}
              onLeftClick={() => console.log('onLeftClick')}
              leftContent="Back"
              rightContent= {<Icon key="1" type="ellipsis" />}  
            >{contentName}</NavBar>
          </div>
          )
              
      }
  }
  
  export default Header;