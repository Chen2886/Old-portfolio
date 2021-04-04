import React, { Component } from 'react';
import $ from 'jquery';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Resume from './Components/Resume';
import Contact from './Components/Contact';
import Portfolio from './Components/Portfolio';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faUser, faAddressCard, faEnvelope, faPhoneSquare } from '@fortawesome/free-solid-svg-icons';
import GA4React from 'ga-4-react';

class App extends Component {
  constructor(props) {
    super(props);
    this.initGA();
    library.add(fab, faUser, faAddressCard, faEnvelope, faPhoneSquare);
    this.state = {
      resumeData: {},
    };
  }

  async initGA() {
    const ga4react = new GA4React('G-CYT59T4V3V');
    ga4react.initialize().then(
      (ga4) => {
        ga4.pageview('home');
        ga4.gtag('event', 'pageview', 'home');
      },
      (err) => {
        console.error(err);
      }
    );
  }

  getResumeData() {
    $.ajax({
      url: '/resumeData.json',
      dataType: 'json',
      cache: false,
      success: function (data) {
        this.setState({ resumeData: data });
      }.bind(this),
      error: function (xhr, status, err) {
        console.log(err);
        alert(err);
      },
    });
  }

  componentDidMount() {
    this.getResumeData();
  }

  render() {
    return (
      <div className='App'>
        <Header data={this.state.resumeData.main} />
        <About data={this.state.resumeData.main} />
        <Resume data={this.state.resumeData.resume} />
        <Portfolio data={this.state.resumeData.portfolio} />
        {/* <Testimonials data={this.state.resumeData.testimonials} /> */}
        <Contact data={this.state.resumeData.main} />
        <Footer data={this.state.resumeData.main} />
      </div>
    );
  }
}

export default App;
