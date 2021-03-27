import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Footer extends Component {
  render() {
    if (this.props.data) {
      var networks = this.props.data.social.map(function (network) {
        return (
          <li key={network.name}>
            <a href={network.url}>
              <FontAwesomeIcon icon={[network.className.split(' ')[0], network.className.split(' ')[1]]} />
            </a>
          </li>
        );
      });
    }

    return (
      <footer>
        <div className='row'>
          <div className='twelve columns'>
            <ul className='social-links'>{networks}</ul>
            <ul className='copyright'>
              <li>&copy; Copyright 2021 Nuo Chen</li>
            </ul>
          </div>
          <div id='go-top'>
            <a className='smoothscroll' title='Back to Top' href='#home'>
              <i className='icon-up-open'></i>
            </a>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
