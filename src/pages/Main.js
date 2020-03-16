import React, { Component } from 'react'
import Header from '../components/Header';
import TabsComponent from '../components/TabsComponent';
class Main extends Component {
  render() {
    return (
      <div>
          <Header />
          <TabsComponent />
      </div>
    )
  }
}
export default Main;