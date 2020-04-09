import React, { Component } from 'react'
import logo from "../svg/logo.svg";
import styled from "styled-components";
import { generateMedia } from "styled-media-query";
import LoginForm from "../components/login/LoginForm";
import LoginFooter from "../components/login/LoginFooter";
class Login extends Component {
  render() {
    return (
      <div className="main-login-container">
        <HeaderTop>
          <Logo src={logo} alt="Logo" className="logo" />
        </HeaderTop>
        <LoginForm />
        <LoginFooter />
      </div>
    );
  }
}
export default Login;

const customMedia = generateMedia({
  tablet:'640px',
  lgTablet:'740px'
})

//Logo

const Logo = styled.img`
    width: 11rem;
    position: absolute;
    top:25%;
    left: 11%;
    transform: translate(-50%, -50%);
    margin-left: 0;
    ${customMedia.lessThan('tablet')`
      top: 45%;
      left: 23%;
    `}
`;

const HeaderTop = styled.div`
    position: relative;
    height: 10rem;
    z-index: 1;
`;