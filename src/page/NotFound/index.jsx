import React, { Component } from 'react';
class NotFound extends Component {
  back = () => {
    this.props.history.push('/home')
  }
  render() {
    return (
      <div>
        <center>
          <h1>迷路了吗</h1>
          <hr />
          <h1 onClick={this.back}>回家看看</h1>
        </center>
      </div>
    )
  }
}
export default NotFound