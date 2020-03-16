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
    tabIndex: 2
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
                    <p style={{marginBottom: '1.875rem'}}>
                      <strong>
                        No Commitments. <br /> Cancel anytime.
                      </strong>
                    </p>
                  </Tab>
                  <Tab className={ `${this.state.tabIndex === 1 ? 'active': null} `}>
                     <TabsDevices />
                     <p style={{marginTop: '-5.3125rem'}}>
                       <strong>
                         Watch anywhere
                       </strong>
                     </p>
                  </Tab>
                  <Tab className={ `${this.state.tabIndex === 2 ? 'active': null} `}>
                     <TabsTag />
                     <p>
                       <strong>
                         Pick your price
                       </strong>
                     </p>
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