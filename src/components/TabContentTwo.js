import React from 'react';
import { NavLink } from "react-router-dom";
import { Button } from "./Button";
import styled from "styled-components";
import img1 from "../images/tab-macbook.png";
import img2 from "../images/tab-tablet.png";
import img3 from "../images/tab-tv.png";
import { generateMedia } from "styled-media-query";
function TabContentTwo() {
  return (
    <TabContainer>
      <div className="tab-content">
        {/* Tab Top Content */}
        <div className="tab-top-content">
          <span style={{ fontSize: "1.5rem" }}>
            Watch Tv shows and Movies anytime, anywhere -<br /> personalized for
            you
          </span>
          <NavLink to="/choose-plan"  className="btn"><Button> Try it now</Button></NavLink>
        </div>
        {/* Tab Bottom Content */}
        <div className="tab-bottom-content">
          <div>
            <img alt="some weird thing" src={img1} />
            <h3>Watch on your TV</h3>
            <p>
              Smart TVs, Playstation, Xbox, Chromecast, AppleTV, Blu-ray players
              and more{" "}
            </p>
          </div>
          <div>
            <img alt="some weird thing" src={img2} />
            <h3>Watch instantly or download for later</h3>
            <p>Available on phone or tablet, wherever you go.</p>
          </div>
          <div>
            <img alt="some weird thing" src={img3} />
            <h3>Use any computer</h3>
            <p>Watch right on netflix.com</p>
          </div>
        </div>
      </div>
    </TabContainer>
  );
}
export default TabContentTwo;

//Main Media query
const customMedia = generateMedia({
  smDesktop:'960px',
  tablet:'1440px'
})


//Main Tab Component Container


const TabContainer = styled.div`
  background: var(--main-deep-dark);

  .tab-content {
    margin: 0 15%;
  }

  .tab-top-content {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    justify-content: center;
    align-items: center;
    padding: 2.5rem 0;
    ${customMedia.lessThan("smDesktop")`
      grid-template-columns:repeat(2, 1fr);
     `}
     ${customMedia.lessThan('tablet')`
     grid-template-columns:1fr;
     text-align: center;
     row-gap: 1.5rem;
     `}
  }

  span {
    grid-column: 1 / 8;
    ${customMedia.lessThan('tablet')`
      grid-column: 1 / -1;
      font-size:1.5rem;
    `}
  }
  .btn {
    grid-column: 10 / 12;
    ${customMedia.lessThan('tablet')`
      grid-column: 1 / -1;
      margin-left: 30%;
      margin-right: 30%;
    `}
  }

  .tab-bottom-content {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2rem;
    text-align: center;
    margin-top: 2rem;
    ${customMedia.lessThan('tablet')`
    grid-template-columns: 1fr;
  `}
  }
  img {
    width: 100%;
    padding-top: 0.625rem;
    
  }

  h3 {
    margin: 0.5rem 0;
  }

  p {
    color: var(--main-grey);
  }
`;