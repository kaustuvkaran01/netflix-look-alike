import React, { Component } from 'react'
import { Link } from "react-router-dom";
class Footer extends Component {
  render() {
    return (
      <div>
        <span>
          <Link>Questions? Call 1-877-742-1335</Link>
        </span>
      </div>
    );
  }
}

export default Footer;