import React, { Component } from 'react'
// 引入路由组件
import { Route } from 'react-router-dom'
// 引入二级路由组件
import Index from '../Index'
import House from '../House'
import Profile from '../Profile'
// 引入antd-mobile组件
import { TabBar } from 'antd-mobile'

// 引入css样式
import './index.css'

// 引入tabbar模版
import TabBarList from '../../util/Tabbar'

class Home extends Component {
  // js逻辑
  state = {
    selectedTab: this.props.location.pathname,
  };
  renderTabBar = () => {
    return (
      <TabBar
        unselectedTintColor="#949494"
        tintColor="#33A3F4"
        barTintColor="white"
      >
        {TabBarList.map(item => (
          <TabBar.Item
            title={item.title}
            key={item.id}
            icon={<i className={`iconfont ${item.icon}`}></i>}
            selectedIcon={<i className={`iconfont ${item.icon}`}></i>}
            selected={this.state.selectedTab === item.path}

            onPress={() => {
              this.props.history.push(item.path)
              this.setState({
                selectedTab: item.path,
              });
            }}
          >
          </TabBar.Item>
        ))}


      </TabBar>
    )
  }
  // 模版
  render() {
    return (
      <div>
        {/* 路由配置 */}
        <Route exact path="/home" component={Index}></Route>
        <Route path="/home/house" component={House}></Route>
        <Route path="/home/profile" component={Profile}></Route>


        {/* 路由导航 */}
        <div className='barBox'>
          {this.renderTabBar()}
        </div>
      </div>
    )
  }
}
export default Home