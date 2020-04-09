import React, { Component } from 'react'
import logo from '../svg/logo.svg';
import { NavLink, Link } from 'react-router-dom';
import styled from 'styled-components';
import { Icon } from 'react-icons-kit';
import { ic_keyboard_arrow_right } from 'react-icons-kit/md/ic_keyboard_arrow_right';
import { Button } from "./Button";
import { generateMedia } from "styled-media-query";


class Header extends Component {
  render() {
    return (
      <HeaderComponent className="header-container">
          <div className="header-top">
            <Logo src={logo} />
            <NavLink className="signIn-btn" to="/login">Sign In</NavLink>
          </div>
          {/* Header Container */}
          <div className="header-content">
              <MainTitle>
                See, what's next!
              </MainTitle>
              <MainSub>
                  WATCH ANYWHERE. CANCEL ANYTIME
              </MainSub>
              <Button className="main-offer-btn" primary style={{position:"relative"}}>
                TRY IT NOW
                <Icon className="Icon" icon={ic_keyboard_arrow_right} size={37} />
                
              </Button>
          </div>
      </HeaderComponent>
    )
  }
}

export default Header;

const customMedia = generateMedia({
  lgDesktop: '1350px',
  mdDesktop:'1150px',
  tablet: '960px',
  smTablet: '740px'

})


//Logo
const Logo = styled.img`
  width: 10rem;
  height: 3.5rem;
  position: absolute;
  top: 25%;
  left: 45%;
  transform: translate (-50%,-50%);
  ${customMedia.lessThan('tablet')`
    left:20%;
    width: 8rem;
    height: auto;
  `}
`;




//Header Container
const HeaderComponent = styled.div`
    .signIn-btn{
        right: 0;
        margin: 1.125rem 3% 0;
        top: 20%;
        padding: 0.4375rem 1.0625rem;
        align-items: center;
        font-weight:400;
        line-height:normal;
        border-radius: 0.1875rem;
        font-size: 1rem;
        background: var(--main-red);
        position: absolute;
        translate: transform(-50%, 50%);
        cursor: pointer;
        transition: background 0.2s ease-in;
        &:hover {
          background: var(--main-red-hover);
        }
        ${customMedia.lessThan('smTablet')`
          margin-top: 1.25rem;
          right: 5%;
        `}
    }

    .header-top {
      position: relative;
      height: 10rem;
      z-index:1;
    }
    //Header Content
    .header-content {
      position: relative;
      width: 65%;
      margin: 4.5rem auto 0;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-content: center;
      z-index:1;
      ${customMedia.lessThan('smTablet')`
          display: grid;
          grid-template-rows: repeat(3, 60px);
          margin-top: 8rem;
        `}

      .main-offer-btn{
        ${customMedia.lessThan('lgDesktop')`
          margin: 0 33%;
          font-size: 1.5rem;
        `}
        ${customMedia.lessThan('mdDesktop')`
          margin: 0 25%;
          font-size: 1.5rem;
        `}
        ${customMedia.lessThan('tablet')`
          margin: 0 20%;
          font-size: 1.3rem;
        `}
      }
    }
    

    .Icon svg {
      vertical-align: bottom;
      margin-left: 1.5rem;
      ${customMedia.lessThan('smTablet')`
          display: none !important;
        `}
    }
`;


//Main Title

const MainTitle = styled.h1`
    margin: 0 0 1.2rem;
    font-size: 5rem;
    font-weight: 700;
    line-height: 1.1em;
    text-align: center;
    ${customMedia.lessThan('tablet')`
          font-size: 2.6rem;
        `}
`;

//Main Sub
const MainSub = styled.h2`
  margin: 0 0 1.875rem;
  font-size: 1.875rem;
  font-weight: 400;
  line-height: 1.25em;
  text-transform: uppercase;
  text-align: center;
  ${customMedia.lessThan('smTablet')`
          margin: 0;
          font-size: 1.4rem;
        `}
`;