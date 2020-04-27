import React, { Component } from 'react';
import { TabBar } from 'antd-mobile';


class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'redTab',
      hidden: false,
      fullScreen: false,
    };
  }

  renderContent(pageText) {
    return (
      <div style={{ backgroundColor: 'white', height: '100%', textAlign: 'center' }}>
        <div style={{ paddingTop: 60 }}>Clicked “{pageText}” tab， show “{pageText}” information</div>
        <a style={{ display: 'block', marginTop: 40, marginBottom: 20, color: '#108ee9' }}
          onClick={(e) => {
            e.preventDefault();
            this.setState({
              hidden: !this.state.hidden,
            });
          }}
        >
          Click to show/hide tab-bar
        </a>
        <a style={{ display: 'block', marginBottom: 600, color: '#108ee9' }}
          onClick={(e) => {
            e.preventDefault();
            this.setState({
              fullScreen: !this.state.fullScreen,
            });
          }}
        >
          Click to switch fullscreen
        </a>
      </div>
    );
  }

  render() {
    const pathname = this.props.location.pathname;
    return (
      <div style= {{position: 'fixed',bottom: 0,width:'100%',zIndex:9}}>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
          hidden={this.state.hidden}
        >
        <TabBar.Item
            title="项目列表"
            key="Life"
            icon={<div style={{
              width: '22px',
              height: '22px',
              background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat' }}
            />
            }
            selectedIcon={<div style={{
              width: '22px',
              height: '22px',
              background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat' }}
            />
            }
            selected={pathname === '/itemlist'}
            badge={1}
            onPress={() => {
              this.props.history.push('/itemlist')
            }}
            data-seed="logId"
          >
              {/* <Route path={`${this.props.match.url}itemlist`}  component={ItemList} /> */}
        </TabBar.Item>
        <TabBar.Item
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat' }}
              />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat' }}
              />
            }
            title="工时填报"
            key="Koubei"
            badge={'new'}
            selected={pathname === '/worktimereport'}
            onPress={() => {
                this.props.history.push('/worktimereport')
            }}
            data-seed="logId1"
          >
            {/* <Route path={`${this.props.match.url}WorkTimeReport`}  component={WorkTimeReport} /> */}
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat' }}
              />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat' }}
              />
            }
            title="工时审批"
            key="Koubei"
            badge={'new'}
            selected={pathname === '/worktimeapproval'}
            onPress={() => {
                this.props.history.push('/worktimeapproval')
            }}
            data-seed="logId1"
          >
            {/* <Route path={`${this.props.match.url}worktimeapproval`}  component={WorkTimeApproval} /> */}
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}



export default Footer;