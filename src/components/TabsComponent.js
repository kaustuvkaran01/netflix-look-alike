import React, { Component } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import TabDoor from "./tabs_nav/TabDoor";
import TabsDevices from "./tabs_nav/TabsDevices";
import TabsTag from "./tabs_nav/TabsTag";
import "../css/TabsNav.css";
import TabContentOne from './TabContentOne';
import TabContentTwo from "./TabContentTwo";
import TabContentThree from "./TabContentThree";

class TabsComponent extends Component {

  state = {
    tabIndex: 1
  }

  render() {
    return (
      <div>
          <Tabs className="tabs"
            selectedIndex={this.state.tabIndex}
            onSelect = {tabIndex => this.setState( {tabIndex} )}
          >
              <TabList className="tab-nav-container">
                  <Tab className={ `${this.state.tabIndex === 0 ? 'active': null} `}> 
                    <TabDoor /> 
                    <p className="lgScreen" style={{marginBottom: '1.875rem'}}>
                      <strong>
                        No Commitments. <br /> Cancel anytime.
                      </strong>
                    </p>
                    <br />
                    <span className="mdScreen" style={{ marginTop:"0.4rem" }}>Cancel</span>
                  </Tab>
                  <Tab className={ `${this.state.tabIndex === 1 ? 'active': null} `}>
                     <TabsDevices />
                     <p className="lgScreen" style={{marginTop: '-5.3125rem'}}>
                       <strong>
                         Watch anywhere
                       </strong>
                     </p>
                     <span className="mdScreen" style={{ marginTop:"-5.3125rem" }}>Devices</span>
                  </Tab>
                  <Tab className={ `${this.state.tabIndex === 2 ? 'active': null} `}>
                     <TabsTag />
                     <p className="lgScreen">
                       <strong>
                         Pick your price
                       </strong>
                     </p>
                     <br />
                     <span className="mdScreen" style={{}}>Price</span>
                  </Tab>
              </TabList>
              <TabPanel>
                <TabContentOne />
              </TabPanel>
              <TabPanel>
                <TabContentTwo />
              </TabPanel>
              <TabPanel>
                <TabContentThree />
              </TabPanel>
          </Tabs>
      </div>
    )
  }
}
export default TabsComponent;