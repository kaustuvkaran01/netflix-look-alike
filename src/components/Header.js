import React, { Component } from 'react'
import logo from '../svg/logo.svg';
import { NavLink, Link } from 'react-router-dom';
import styled from 'styled-components';
import { Icon } from 'react-icons-kit';
import { ic_keyboard_arrow_right } from 'react-icons-kit/md/ic_keyboard_arrow_right';
import { Button } from "./Button";


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
              <Button className="main-offer-btn" primary >
                TRY IT NOW
                <Icon className="Icon" icon={ic_keyboard_arrow_right} size={37} />
                
              </Button>
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