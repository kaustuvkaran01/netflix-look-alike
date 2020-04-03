import React, { Component } from 'react'
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Icon } from "react-icons-kit";
import { iosWorld } from "react-icons-kit/ionicons/iosWorld";
import { arrowSortedDown } from "react-icons-kit/typicons/arrowSortedDown";
import { generateMedia } from "styled-media-query";

class Footer extends Component {
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
        <span>
          Questions?{" "}
          <Link style={{ color: "var(--main-grey)" }}>Call 1-877-742-1335</Link>
        </span>
        <div className="footer-columns">
          <ul>
            <li>
              <Link>FAQ</Link>
            </li>
            <li>
              <Link>Investor Relations</Link>
            </li>
            <li>
              <Link>Ways to Watch</Link>
            </li>
            <li>
              <Link>Corporate Information</Link>
            </li>
            <li>
              <Link>Netflix Originals</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link>Help Center</Link>
            </li>
            <li>
              <Link>Jobs</Link>
            </li>
            <li>
              <Link>Terms of Use</Link>
            </li>
            <li>
              <Link>Contact Us</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link>Account</Link>
            </li>
            <li>
              <Link>Redeem Gift Cards</Link>
            </li>
            <li>
              <Link>Privacy</Link>
            </li>
            <li>
              <Link>Speed Test</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link>Media Center</Link>
            </li>
            <li>
              <Link>Buy Gift Cards</Link>
            </li>
            <li>
              <Link>Cookie Preferences</Link>
            </li>
            <li>
              <Link>Legal Notices</Link>
            </li>
          </ul>
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

export default Footer;

const customMedia = generateMedia({
  tablet: '740px'
})

const FooterContainer = styled.footer`

    background: var(--main-deep-dark);
    color: var(--main-grey);
    padding-top: 10rem;
    padding-bottom: 3rem;

    .footer-columns {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        width: 70%;
        margin: 1rem auto 0;
        font-size: 0.9rem;
        overflow: auto;
        color: var(--main-grey);
        ${customMedia.lessThan("tablet")`
        grid-template-columns: repeat(2, 1fr);
        `}
    }

    ul li {
        list-style: none;
        line-height: 2.5;
        color: var(--main-grey);
    }
    a:hover {
        text-decoration: underline;
        cursor: pointer;
        color: #fff;
    }
    span{
        margin-left: 17.5%;
        font-size:1.125rem;
    }

    //Language Button
    .lang-btn {
        background: transparent;
        border: 0.9px solid #333;
        padding: 1rem;
        width: 8rem;
        display: grid;
        grid-template-columns: repeat(3,1fr);
        margin: 2rem 0 0;
        margin-bottom: 0;
    }

    .lang-toggle {
        margin-left: 11.7rem;
        position: relative;
        margin-top:-1rem;
        cursor: pointer;
    }

    .lang-toggle ul li {
        background: var(--main-deep-dark);
        width: 8.125rem;
        margin-top:0;
        border: 1px solid #333;
        text-align: center;
        &:hover  {
            background: #0085ff;
            color: #fff;
        }
    }
`;