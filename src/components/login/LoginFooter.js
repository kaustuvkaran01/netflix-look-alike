import React, { Component } from 'react'
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Icon } from "react-icons-kit";
import { iosWorld } from "react-icons-kit/ionicons/iosWorld";
import { arrowSortedDown } from "react-icons-kit/typicons/arrowSortedDown";
import { generateMedia } from "styled-media-query";

class LoginFooter extends Component {
  state={
    langContent: false
  }
  handleToggle = e => {
    e.preventDefault();
    this.setState({
      langContent: !this.state.langContent
    })
  }


  render() {
    return (
      <FooterContainer>
        <span style={{marginLeft:"10%"}}>
          Questions?{" "}
          <Link style={{ color: "var(--main-grey)" }}>Call 1-877-742-1335</Link>
        </span>
        <div className="footer-columns">
          <ul>
            <li>
              <Link>Gift Card Terms</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link>Terms of Use</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link>Privacy Statement</Link>
            </li>
          </ul>
          <br />
          {/* Language Button */}
          <div className="lang-btn" onClick={this.handleToggle}>
            <Icon icon={iosWorld} size={20} />
                 &nbsp;&nbsp;English&nbsp;&nbsp;
            <Icon icon={arrowSortedDown} />
          </div>
        </div>
          {this.state.langContent && (

            <div className="lang-toggle">
              <ul>
                  <li>
                        English
                  </li>
                  <li>
                        French
                  </li>
              </ul>
          </div>
          )}
        <br />
        <span style ={{fontSize:"0.9rem"}}>Netflix Canada</span>
      </FooterContainer>
    );
  }
}

export default LoginFooter;


//Media
const customMedia = generateMedia({
  tablet: '740px'
})

const FooterContainer = styled.footer`
  justify-content: center;
  background: rgba(0, 0, 0, 0.8);
  color: var(--main-grey);
  padding-top: 3rem;
  padding-bottom: 6rem;
  margin-top: 6rem;
  position: relative;
  z-index: 5;

  .footer-columns {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    width: 80%;
    margin: 1rem auto 0;
    font-size: 0.9rem;
    color: var(--main-grey);
    ${customMedia.lessThan("tablet")`
        grid-template-columns: repeat(2, 1fr);
    `}
  }

  ul {
      padding: 0;
      margin: 0;
  }

  ul li {
    list-style: none;
    line-height: 2.5;
    color: var(--main-grey);
    margin: 0;
    padding: 0;
  }
  a:hover {
    text-decoration: underline;
    cursor: pointer;
    color: #fff;
  }
  span {
    margin-left: 10%;
    font-size: 1.125rem;
  }

  //Language Button
  .lang-btn {
    background: transparent;
    border: 0.9px solid #333;
    padding: 1rem;
    width: 8rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin: 2rem 0 0;
    margin-bottom: 0;
  }

  .lang-toggle {
    margin-left: 9.5rem;
    position: relative;
    margin-top: 0rem;
    cursor: pointer;
  }

  .lang-toggle ul li {
    background: var(--main-deep-dark);
    width: 8rem;
    margin-top: 0;
    border: 1px solid #333;
    text-align: center;
    &:hover {
      background: #0085ff;
      color: #fff;
    }
    ul {
        padding: 0;
    }
  }
`;