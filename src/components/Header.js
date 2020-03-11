import React, { Component } from 'react'
import logo from '../svg/logo.svg';
import { NavLink, Link } from 'react-router-dom';
import styled from 'styled-components';
import { Icon } from 'react-icons-kit';
import { ic_keyboard_arrow_right } from 'react-icons-kit/md/ic_keyboard_arrow_right';


class Header extends Component {
  render() {
    return (
      <HeaderComponent className="header-container">
          <div className="header-top">
            <Logo src={logo} />
            <NavLink className="signIn-btn" to="../pages/Main.js">Sign In</NavLink>
          </div>
          {/* Header Container */}
          <div className="header-content">
              <MainTitle>
                See, what's next!
              </MainTitle>
              <MainSub>
                  WATCH ANYWHERE. CANCEL ANYTIME
              </MainSub>
              <Link className="main-offer-btn cursor1">
                TRY IT NOW
                <Icon className="Icon" icon={ic_keyboard_arrow_right} size={37} />
                
              </Link>
          </div>
      </HeaderComponent>
    )
  }
}

export default Header;

//Logo
const Logo = styled.img`
  width: 10rem;
  height: 3.5rem;
  position: absolute;
  top: 25%;
  left: 45%;
  transform: translate (-50%,-50%);
`;




//Header Container
const HeaderComponent = styled.div`
    .signIn-btn{
        right: 0;
        margin: 1.125rem 3% 0;
        padding: 0.4375rem 1.0625rem;
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
    }
    //Main Offer Btn
    .main-offer-btn {
      display: inline-block;
      background: var(--main-red);
      text-transform: uppercase;
      border: none;
      outline: none;
      margin: 0 33%;
      border-radius: 0.1875rem;
      padding: 1.5rem;
      font-size: 2rem;
      text-align: center;
      box-shadow: rgba(0,0,0,0.45);
      trasition: background 0.2s ease-in;
      &:hover {
        background: var(--main-red-hover);
      }
      
    }
    .cursor1 {
      cursor: url(data:image/png;base64,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), auto;
    }

    .Icon svg {
      vertical-align: bottom;
      margin-left: 1.5rem;
    }
`;


//Main Title

const MainTitle = styled.h1`
    margin: 0 0 1.2rem;
    font-size: 5rem;
    font-weight: 700;
    line-height: 1.1em;
    text-align: center;
`;

//Main Sub
const MainSub = styled.h2`
  margin: 0 0 1.875rem;
  font-size: 1.875rem;
  font-weight: 400;
  line-height: 1.25em;
  text-transform: uppercase;
  text-align: center;
`;