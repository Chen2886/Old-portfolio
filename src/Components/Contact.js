import React, { useState } from 'react';
import { init } from 'emailjs-com';
import emailjs from 'emailjs-com';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';

export default function Contact(props) {
  const [formName, setName] = useState('');
  const [formEmail, setEmail] = useState('');
  const [formSubject, setSubject] = useState('');
  const [formMessage, setMessage] = useState('');

  init('user_UJdsRqUdPt6gVajZYAFwN');

  const sendEmail = (template) => {
    emailjs
      .send('service_qd7f7li', 'template_l76p0ih', template, 'user_UJdsRqUdPt6gVajZYAFwN')
      .then((res) => {
        if (res.status === 200) {
          alert('Your message has been sent, thank you!');
          setName('');
          setEmail('');
          setSubject('');
          setMessage('');
        }
      })
      // Handle errors here however you like
      .catch((err) => {
        alert('Failed to send. Someone probably spamed my email, sorry for the inconvenience. Please see my email on the right.');
        console.error('Failed to send feedback. Error: ', err);
      });
  };

  var handleChange = (e) => {
    if (e.target.id === 'contactName') setName(e.target.value);
    else if (e.target.id === 'contactEmail') setEmail(e.target.value);
    else if (e.target.id === 'contactSubject') setSubject(e.target.value);
    else if (e.target.id === 'contactMessage') setMessage(e.target.value);
  };

  var submitClicked = () => {
    if (formName.length === 0) {
      alert('Name is required.');
      return;
    }
    if (formEmail.length === 0) {
      alert('Email is required.');
      return;
    }
    if (/\S+@\S+\.\S+/.test(formEmail) === false) {
      alert('Email is invalid.');
      return;
    }
    if (formMessage.length === 0) {
      alert('Message is required.');
      return;
    }
    message = formName + '\n' + formEmail + '\n' + formSubject + '\n' + formMessage;

    let templateParams = {
      name: formName,
      email: formEmail,
      subject: formSubject,
      message: formMessage,
    };

    sendEmail(templateParams);
  };

  if (props.data) {
    //  var name = props.data.name;
    var street = props.data.address.street;
    var city = props.data.address.city;
    var state = props.data.address.state;
    var zip = props.data.address.zip;
    var phone = props.data.phone;
    var email = props.data.email;
    var message = props.data.contactmessage;
  }

  return (
    <section id='contact'>
      <div className='row section-head'>
        <div className='two columns header-col'>
          <h1>
            <span>Send me a message!</span>
          </h1>
        </div>

        <div className='ten columns'>
          <p className='lead'>{message}</p>
        </div>
      </div>

      <div className='row'>
        <div className='eight columns'>
          {/* <form id='contactForm' name='contactForm'> */}
          <fieldset>
            <div>
              <label htmlFor='contactName'>
                Name <span className='required'>*</span>
              </label>
              <input type='text' size='35' id='contactName' name='contactName' value={formName} onChange={handleChange} />
            </div>

            <div>
              <label htmlFor='contactEmail'>
                Email <span className='required'>*</span>
              </label>
              <input type='text' size='35' id='contactEmail' name='contactEmail' value={formEmail} onChange={handleChange} />
            </div>

            <div>
              <label htmlFor='contactSubject'>Subject</label>
              <input type='text' size='35' id='contactSubject' name='contactSubject' value={formSubject} onChange={handleChange} />
            </div>

            <div>
              <label htmlFor='contactMessage'>
                Message <span className='required'>*</span>
              </label>
              <textarea cols='50' rows='15' id='contactMessage' name='contactMessage' value={formMessage} onChange={handleChange}></textarea>
            </div>

            <Grid container justify='center' alignItems='center'>
              <Hidden smUp>
                <div style={{ marginTop: '0.1rem' }}>&nbsp;</div>
              </Hidden>
              <Grid item xs={12}>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <button className='send' onClick={submitClicked}>
                    Submit
                  </button>
                </div>
              </Grid>
            </Grid>
          </fieldset>
          {/* </form> */}
        </div>

        <aside className='four columns footer-widgets'>
          {/* <div className='widget widget_contact'>
            <h4>Address and Phone</h4>
            <p className='address'>
              {name}
              <br />
              {street} <br />
              {city}, {state} {zip}
              <br />
              <span>{phone}</span>
            </p>
          </div> */}
          <h4>Contact Details</h4>
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
        </aside>
      </div>
    </section>
  );
}
