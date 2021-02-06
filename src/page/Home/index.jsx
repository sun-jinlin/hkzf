import React, { Component } from 'react'
// 引入路由组件
import { Route } from 'react-router-dom'
// 引入二级路由组件
import Index from '../Index'
import House from '../House'
import Profile from '../Profile'
// 引入antd-mobile组件
import { TabBar } from 'antd-mobile'


class Home extends Component {
  // js逻辑
  state = {
    selectedTab: 'blueTab',
  };
  // 模版
  render() {
    return (
      <div>
        {/* 路由配置 */}
        <Route exact path="/home" component={Index}></Route>
        <Route path="/home/house" component={House}></Route>
        <Route path="/home/profile" component={Profile}></Route>


        {/* 路由导航 */}
        <div style={{ position: 'fixed', height: '100%', width: '100%', bottom: 0 }}>
          <TabBar
            unselectedTintColor="#949494"
            tintColor="#33A3F4"
            barTintColor="white"
          >
            <TabBar.Item
              title="首页"
              key="Life"
              icon={<div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat'
              }}
              />
              }
              selectedIcon={<div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat'
              }}
              />
              }
              selected={this.state.selectedTab === 'blueTab'}

              onPress={() => {
                this.props.history.push('/home')
                this.setState({
                  selectedTab: 'blueTab',
                });
              }}

            >

            </TabBar.Item>
            <TabBar.Item
              icon={
                <div style={{
                  width: '22px',
                  height: '22px',
                  background: 'url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat'
                }}
                />
              }
              selectedIcon={
                <div style={{
                  width: '22px',
                  height: '22px',
                  background: 'url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat'
                }}
                />
              }
              title="找房"
              key="Koubei"

              selected={this.state.selectedTab === 'redTab'}
              onPress={() => {
                this.props.history.push('/home/house')
                this.setState({
                  selectedTab: 'redTab',
                });
              }}

            >

            </TabBar.Item>
            <TabBar.Item
              icon={
                <div style={{
                  width: '22px',
                  height: '22px',
                  background: 'url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  21px 21px no-repeat'
                }}
                />
              }
              selectedIcon={
                <div style={{
                  width: '22px',
                  height: '22px',
                  background: 'url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  21px 21px no-repeat'
                }}
                />
              }
              title="我的"
              key="Friend"

              selected={this.state.selectedTab === 'greenTab'}
              onPress={() => {
                this.props.history.push('/home/profile')
                this.setState({
                  selectedTab: 'greenTab',
                });
              }}
            >

            </TabBar.Item>

          </TabBar>
        </div>
      </div>
    )
  }
}
export default Home