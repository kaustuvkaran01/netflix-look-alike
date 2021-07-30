import React, { Component } from 'react'
import styled from "styled-components";
// import { generateMedia } from "styled-media-query";
import logo from "../svg/logo.svg";
import { Link, NavLink } from "react-router-dom";
import CheckmarkLogo from "../images/Checkmark.png";
import {Button} from "../components/Button";
import FooterChoosePlan from '../components/ChoosePlan/FooterChoosePlan';

class ChoosePlan extends Component {

    componentDidMount(){
      window.scroll(0,0);
    }
  render() {
    return (
      <div>
        <MainContainer>
        {/* header top */}
        <div className="header-top">
          <Link to="/">
            <Logo
              src={logo}
              alt="logo"
              style={{ height: "5rem", width: "auto" }}
            />
          </Link>
          <NavLink
            to="/login"
            className="btn signin-btn"
          >
            SignIn
          </NavLink>
        </div>
        {/* header content */}
        <div className="header-content">
          <img
            className="checkmark-logo"
            src={CheckmarkLogo}
            alt="checkmark logo"
          />
          <p>Step <strong>1</strong> of <strong>3</strong></p>
        <h2>Choose your plan.</h2>
        <div className="checklist">
            <div className="bullet">No commitments, cancel anytime</div>
            <div className="bullet">Everything on netflix for one low price</div>
            <div className="bullet">Unlimited viewing on all your devices</div>
        </div>
        <Button>See the plans</Button>
        </div>
        <FooterChoosePlan />
      </MainContainer>
      </div>
      // <FooterChoosePlan />
    );
  }
}
export default ChoosePlan;

//Main Container

const MainContainer = styled.div`
    
    background: #fff;
    color: #000;
    // header-top
    .header-top {
        background: #fff;
        height: 6rem;
        border-bottom: 1px solid #e6e6e6;
    }
    //header content
    .header-content {
        display: grid;
        // grid-template-rows:repeat(6,1fr);
        color: #000;
        background: #fff;
        justify-content: center;
        margin-bottom: 6rem;
        width: 65%;
        position: relative;
        margin: auto;
        margin-top: 4.5rem;
        text-align: center;
        align-content: center;
        flex-direction: columns;
        z-index: 2;
    }

    //checkmark logo
    .checkmark-logo {
        width: 3.125rem;
        margin: 6.25rem auto 1.875rem;
    }

    .checklist {
        text-align: left;
        margin: 1rem auto 3rem;
        padding-left: 1.5625rem;
        width: 85%;
        font-size: 17px;
        padding: auto;
    }
    //bullets as the checkmars;
    .bullet {
        margin-top: 1rem;
        margin-left: 1rem;
        text-indent: -1em;
        line-height: 1.2rem;
    }
    .checklist .bullet::before {
        color: transparent;
        display: inline-block;
        position: relative;
        height: 0.3em;
        width: 0.8em;
        content: '';
        left: -0.9375rem;
        bottom: 0.1875rem;
        border-bottom: 1px solid #e50914;
        border-left: 1px solid #e50914;
        transform: rotate(-45deg);
    }
    .signin-btn {
      margin: 1.5625rem 3% 0;
      padding: 0.4375rem 1.0625rem;
      font-weight: 700;
      line-height: normal;
      color: #fff;
      font-size: 1.25rem;
      position: absolute;
      right: 0;
      background: var(--main-red);
      cursor: pointer;
      border-radius: 0.1875rem;
      &:hover {
        text-decoration: underline;
      }
    }

`;

const Logo = styled.img`
    position: absolute;
    top: 8%;
    left: 8%;
    transform: translate(-50%,-50%);
    margin-left:0;
`;