import React from 'react';
import img1 from "../images/tab-1-pic.png";
import {Link, NavLink} from "react-router-dom";
import styled from "styled-components";
import { Button } from "./Button";
import { generateMedia } from "styled-media-query";
export default function TabContentOne() {
  return (
    <TabContentContainer>
      <div className="container">
        <div className="tab-content">
            <span className="title" style={{ marginBottom: '2rem' }}>
              If you decide Netflix isn't for you - no problem. No commitment.
              Cancel online anytime.
            </span>
            <br />
            <Link to="/choose-plan" className="btn"><Button style={{ marginTop:'2rem', width:'10rem' }}>Try it now.</Button></Link>
            <img src={img1} />
          </div>
      </div>
    </TabContentContainer>
  );
}

// Media Query
const customMedia = generateMedia({
  smDesktop: '1440px',
  tablet: '960px',

})

//Main Content Container
const TabContentContainer = styled.div`
 background: var(--main-deep-dark);

  .title {
     margin-top: 2rem;
     ${customMedia.lessThan('smDesktop')`
      font-size: 1.5rem;
      line-height: 1;
     `}
  }

  img {
    width: 31.875rem;
  }
  .container {
    margin: 0 10%;
  }

  .tab-content {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 2rem;
    font-size: 2rem;
    align-items: center;
    padding: 2.5rem;
    ${customMedia.lessThan('tablet')`
        grid-template-columns: 100%;
        text-align: center;
        padding-left: 0;
        padding-right: 0;
     `}
  }
`;