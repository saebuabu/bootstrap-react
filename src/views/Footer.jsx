import React, { Component } from 'react';


class Footer extends Component {

  
  render() {
    const year = new Date().getFullYear();
    return (
        <>
        <footer className='footer fixed-bottom'>&copy; Abu Saebu, {year}</footer>
        </>
    );
  }
}

export default Footer;