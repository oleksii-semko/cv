import React from 'react';
import photo from './../../me.jpeg';

import './index.scss';

class Header extends React.Component {
  render() {
    return (
      <header>
        <div className="intro">
          <h1>Oleksii Semko</h1>
          <h2 className="blue">Sr. Web Developer</h2>
          <img src={photo} className="photo" alt="logo" />
        </div>
        <address className="contacts">
          <div className="contact left">
            <p><span className="blue">Address</span>Gostomel highway, Bldg. 3, Irpin, 08206, Ukraine</p>
            <p>
              <span className="blue">Email</span>
              <a href="mailto:oleksii.semko@gmail.com">oleksii.semko@gmail.com</a>
            </p>
            <p>
              <span className="blue">Links</span>
              <a
                className="App-link"
                href="https://reactjs.org"  
                target="_blank"
                rel="noopener noreferrer"
              >Linkedin</a>,
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >Upwork</a>,
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >Github</a>
            
            </p>
          </div>
          <div className="contact right">
            <p><span className="blue">Phone</span>+380931184382</p>
            <p><span className="blue">Date of birth</span>March 21, 1986</p>

          </div>
        </address>
      </header>
    );
  }  
}

export default Header;
