import React, { Component } from 'react';
import styled from "styled-components";
import { generateMedia } from "styled-media-query";
import { Link } from 'react-router-dom';
import FBlogo from "../../images/fb-logo.png";

const initState = {
  checked:true,
  email:'',
  password:'',
  emailError:'',
  passwordError:''
}
const regexp = RegExp(/^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/);

class LoginForm extends Component {
 
  state = initState;

  handleEmailChange = e => {
    this.setState({
      email : e.target.value
    });
  }
  handlePasswordChange = e => {
    this.setState({
      password : e.target.value
    });
  }

  //onChange for Checked box

    handlerChecked = e => {
      this.setState({
        checked: e.target.checked
      })
    }

  //Validate function
  validate = () => {
    let inputError = false;
    console.log(inputError);
    const errors = {
      emailError:'',
      passwordError:''
    }

    if(!this.state.email){
      inputError = true;
      errors.emailError = 'Please enter a valid email.'
    } else if (!this.state.email.match(regexp)){
      inputError= true;
      errors.emailError = (
        <span style={{color: "red", fontSize:"0.9rem"}}>Your email does not match the regular expression.</span>
      )
    }

    if(this.state.password.length < 4){
      inputError = true;
      errors.passwordError = 'Please enter a valid password. Your password is too short.'
    }
    this.setState({
      ...errors
    });
  }
  onSubmitChange = e => {
    e.preventDefault();
    const err = this.validate();
    console.log(err);
    if(!e){
      this.setState(initState);
    }
  }

  render() {
    return (
      <FormContainer>
        <div className="form-container">
          <form>
            <h1>SignIn</h1>
            <div className="input-container">
              <input
                onChange={this.handleEmailChange}
                value = {this.state.email}
                className={
                  this.state.emailError
                    ? "input-error input-empty"
                    : "input-empty"
                }
                type="email"
                required
              />
              <label>Email or Phone number</label>
              <span style={{color: "#db7302"}}>{this.state.emailError}</span>
            </div>
            <div className="input-container">
              <input
                onChange={this.handlePasswordChange}
                value = {this.state.password}
                className={
                  this.state.emailError
                    ? "input-error input-empty"
                    : "input-empty"
                }
                type="Password"
                required
              />
              <label>Password</label>
              <span style={{color:"#db7302"}}>{this.state.passwordError}</span>
            </div>
            <div className="input-container">
              <Button
                href="#"
                type="submit"
                onClick={(e) => this.onSubmitChange(e)}
              >
                Sign In
              </Button>
            </div>
            <label className="checkbox-container">
              Remember me
              <input
               type="checkbox" 
               defaultChecked={this.state.checked}
               onChange = {
                 this.state.handlerChecked
               }
              />
              <span className="checkmark"></span>
            </label>
            <Link to="/" className="need-help">
              Need Help?
            </Link>
            <div className="bottom-form">
              <img src={FBlogo} alt="fblogo" />
              <Link to="/" className="login-fb-text">
                Login with Facebook
              </Link>
              <br />
              <br />
              <span style={{ color: "#999" }}>New to Netflix?</span>&nbsp;
              <Link to="/" className="sign-up-text">
                Sign up now!
              </Link>
            </div>
          </form>
        </div>
      </FormContainer>
    );
  }
}
export default LoginForm;


const customMedia = generateMedia({
  tablet:'640px'
})

const FormContainer = styled.div`
    display: grid;
    justify-content: center;
    position: relative;
    z-index: 5;
    ${customMedia.lessThan('tablet')`
        border-bottom: 0.9px solid #999;
      `}

    .form-container {
        background: rgba(0,0,0,0.8);
        position: relative;
        width: 28.125rem;
        height: 41.25rem;
        padding:4rem;
      ${customMedia.lessThan('tablet')`
        padding:0.6rem;
        height: 35rem;
      `}
    }

    .input-container {
        display: grid;
        grid-template-columns: 1fr;
        margin-top: 1.2rem;
    }
    .input-empty {
        color:#fff;
        background: #333;
        border:0;
        border-radius: 0.25;
        height: 3rem;
        padding: 0.9rem 1.25rem 0;
    }
    form div label {
        position: absolute;
        top: 0.625rem;
        left: 1.25rem;
        pointer-events: none;
        color: #8a8a8a;
        font-size: 1rem;
        transition: trasnform 150ms ease-out, font-size 150ms ease-out;
    }

    form div {
        position: relative;
    }
    input:focus ~ label {
        top: 0.4375rem;
        font-size: 0.7rem;
    }
    input:focus{
        outline: none;
    }

    //Checkbox Container
    .checkbox-container {
        margin-left: 0.75rem;
        padding-left: 1.875rem;
        position: relative;
        font-size: 0.9rem;
        cursor: pointer;
        color: #999;
    }
    .checkbox-container input {
        display: none;
    }
    .checkbox-container .checkmark {
        display: inline-block;
        background: #454545;
        height: 1.1rem;
        width: 1.1rem;
        left: 0;
        top: 0;
        border-radius: 0.1rem;
        position: absolute;
    }
    .checkbox-container input:checked + .checkmark:after {
        content: '';
        position: absolute;
        height: 0.25rem;
        width: 0.625rem;
        border-left: 2px solid #000;
        border-bottom: 2px solid #000;
        top: 25%;
        left:21%;
        transform: rotate(-45deg);
    }
    .need-help {
        text-decoration: none;
        color: #828282;
        margin-left: 6.6rem;
        font-size:0.9rem;
        ${customMedia.lessThan('tablet')`
        margin-left: 13rem;
      `}
    }
    .bottom-form img {
        width: 1.5625rem;
        margin: 0.625rem 0.625rem -0.4375rem 0;
    }
    .login-fb-text {
        color: #828282;
        font-size: 0.9rem;
    }
    .bottom-form {
        position: absolute;
        bottom:0;
        margin-bottom: 4rem;
    }

    .sign-up-text {
        color: #999;
        margin: 0.625rem 0.625rem;
        &:hover {
          text-decoration: underline;
        }
    }
`;

//Button
const Button =styled.button`
    color: #fff;
    background: rgba(229,9,20);
    border: none;
    outline:none;
    padding: 0.8rem 1.3rem;
    border-radius: 0.125rem;
    font-size: 1rem;
    text-align: center;
    box-shadow: 0 1px 0 rgba(0,0,0,0.45);
    transition: opacity 0.2s  ease-in;
    cursor: pointer;
    text-decoration: none;
    margin: 1rem 0;
`;