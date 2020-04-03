import React, { Component } from 'react'
import Header from '../components/Header';
import TabsComponent from '../components/TabsComponent';
import Footer from '../components/Footer';
class Main extends Component {
  render() {
    return (
      <div>
          <Header />
          <TabsComponent />
          <Footer />
      </div>
    )
  }
}
export default Main;