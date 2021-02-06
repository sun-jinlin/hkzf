import React from 'react'
// 引入路由
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
// 引入一级路由组件
import Home from './page/Home'
import CityList from './page/CityList'
import Map from './page/Map'

function App() {
  return (
    <Router>
      {/* 路由导航 */}
      <Link to="/home">首页</Link>
      <Link to="/citylist">城市列表</Link>
      <Link to="/map">地图</Link>


      {/* 路由配置 */}
      <Route path="/home" component={Home}></Route>
      <Route path="/citylist" component={CityList}></Route>
      <Route path="/map" component={Map}></Route>
    </Router>
  );
}

export default App;
