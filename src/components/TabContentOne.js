import React from 'react';
import img1 from "../images/tab-1-pic.png";
import styled from "styled-components";
import { Button } from "./Button";
export default function TabContentOne() {
  return (
    <TabContentContainer>
      <div className="container">
        <div className="tab-content">
            <span style={{ marginBottom: '2rem' }}>
              If you decide Netflix isn't for you - no problem. No commitment.
              Cancel online anytime.
            </span>
            <br />
            <Button style={{ marginTop:'2rem', width:'10rem' }}>Try it now.</Button>
            <img src={img1} />
          </div>
      </div>
    </TabContentContainer>
  );
}

const TabContentContainer = styled.div`
 background: var(--main-deep-dark);

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
  }
`;