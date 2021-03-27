import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class About extends Component {
  render() {
    if (this.props.data) {
      // var name = this.props.data.name;
      var profilepic = 'images/' + this.props.data.image;
      var bio = this.props.data.bio;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone = this.props.data.phone;
      var email = this.props.data.email;
      // var resumeDownload = this.props.data.resumedownload;
    }

    return (
      <section id='about'>
        <div className='row'>
          <div className='three columns'>
            <img className='profile-pic' src={profilepic} alt='Tim Baker Profile Pic' />
          </div>
          <div className='nine columns main-col'>
            <h2>About Me</h2>

            <p>{bio}</p>

            <h2>Contact Details</h2>
            <table>
              <tbody>
                <tr>
                  <td className='white'>
                    <FontAwesomeIcon icon='user' />
                  </td>
                  <td>&nbsp;&nbsp;</td>
                  <td>Nuo (Tony) Chen</td>
                </tr>
                <tr>
                  <td>
                    <FontAwesomeIcon icon='envelope' />
                  </td>
                  <td>&nbsp;&nbsp;</td>
                  <td>{email}</td>
                </tr>
                <tr>
                  <td>
                    <FontAwesomeIcon icon='phone-square' />
                  </td>
                  <td>&nbsp;&nbsp;</td>
                  <td>{phone}</td>
                </tr>
                <tr>
                  <td>
                    <FontAwesomeIcon icon='address-card' />
                  </td>
                  <td>&nbsp;&nbsp;</td>
                  <td>
                    {street}
                    <br />
                    {city}, {state}, {zip}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
