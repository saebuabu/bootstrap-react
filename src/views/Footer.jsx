import React, { Component } from 'react';
import LightDarkMode from '../components/LightDarkMode';

class Footer extends Component {
  render() {
    return (
        <>
        <footer className='footer fixed-bottom'><LightDarkMode /></footer>
        </>
    );
  }
}

export default Footer;