import React, { Component } from 'react';
import { Button } from "./Button";
import styled from "styled-components";
import img1 from "../images/tab-macbook.png";
import img2 from "../images/tab-tablet.png";
import img3 from "../images/tab-tv.png";
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
          <Button className="btn">Try it Now</Button>
        </div>
        {/* Tab Bottom Content */}
        <div className="tab-bottom-content">
          <div>
            <img src={img1} />
            <h3>Watch on your TV</h3>
            <p>
              Smart TVs, Playstation, Xbox, Chromecast, AppleTV, Blu-ray players
              and more{" "}
            </p>
          </div>
          <div>
            <img src={img2} />
            <h3>Watch instantly or download for later</h3>
            <p>Available on phone or tablet, wherever you go.</p>
          </div>
          <div>
            <img src={img3} />
            <h3>Use any computer</h3>
            <p>Watch right on netflix.com</p>
          </div>
        </div>
      </div>
    </TabContainer>
  );
}
export default TabContentTwo;

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
    }

    span {
        grid-column: 1 / 8;
    }
    .btn {
        grid-column: 10 / 12;

    }

    .tab-bottom-content {
        display: grid;
        grid-template-columns:repeat(3, 1fr);
        grid-gap: 2rem;
        text-align: center;
        margin-top: 2rem;
    }
    img {
        width: 18.75rem;
        padding-top: 0.625rem;
    }

    h3 {
        margin: 0.5rem 0;
    }

    p {
        color: var(--main-grey);
    }
`;