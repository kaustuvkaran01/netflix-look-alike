import React from 'react'
import { Link } from "react-router-dom";
import styled from "styled-components";
// import { Icon } from "react-icons-kit";
// import { iosWorld } from "react-icons-kit/ionicons/iosWorld";
// import { arrowSortedDown } from "react-icons-kit/typicons/arrowSortedDown";
import { generateMedia } from "styled-media-query";


const FooterChoosePlan = () => {
  return (
    <FooterContainer>
      <div className="footer-wrapper">
        <span className="question-link">
          Questions?{" "}
          <Link style={{ color: "var(--main-grey)" }}>Call 1-877-742-1335</Link>
        </span>
        <div className="footer-columns">
          <ul>
            <li>
              <Link>FAQ</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link>Help Center</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link>Terms of Use</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link>Privacy</Link>
            </li>
          </ul>
        </div>
      </div>
    </FooterContainer>
  );
}

export default FooterChoosePlan;
//Media
// const customMedia = generateMedia({
//     tablet: '740px'
//   })

  const FooterContainer = styled.footer`
      display: grid;
      justify-content: center;
      background: #f3f3f3;
      padding: 1.875rem 0;
      margin-top: 10rem;
      position: relative;
      border-top: 1px solid #e6e6e6;
    .footer-columns {
        display: grid;
        width: fit-content;
        margin: 1rem 3rem 0 3rem;
        color: #999;
        grid-template-columns: repeat(4,15.625rem);
        grid-gap: 0.3rem;
    }
    .footer-wrapper {
        margin: 0 auto;
        padding: 1.25rem;
    }
    .question-link {
        margin: 3rem;
        margin-left: 5.5rem;
        font-size: 1rem;
        color: #999;
    }
    a{
        color: #999;
        font-size: 0.8125rem;
        &:hover {
            text-decoration: underline;
            cursor: pointer;
        }
    }
    ul {
        list-style-type: none;
    }
  `;