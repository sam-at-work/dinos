import React, { Component } from 'react';
import './App.css';
import {Footer, Header, Section, SectionsContainer} from "react-fullpage";

import DinoHeader from './containers/Header'
import SectionOne from "./containers/SectionOne";
import SectionTwo from "./containers/SectionTwo";

class App extends Component {

  componentDidMount() {
    // Hack to make app scroll to correct page
    window.setTimeout(() => window.dispatchEvent(new Event('resize')), 0);
  }

  render() {
    let options = {
      sectionClassName:     'section',
      anchors:              ['sectionOne', 'sectionTwo', 'sectionThree'],
      scrollBar:            false,
      navigation:           true,
      verticalAlign:        false,
      sectionPaddingTop:    '50px',
      sectionPaddingBottom: '50px',
      arrowNavigation:      true
    };

    return (
      <div>
        <Header>
            <DinoHeader />
          {/*<a href="#sectionOne">Section One</a>*/}
          {/*<a href="#sectionTwo">Section Two</a>*/}
          {/*<a href="#sectionThree">Section Three</a>*/}
        </Header>
        {/*<Footer>*/}
          {/*<a href="">Dcoumentation</a>*/}
          {/*<a href="">Example Source</a>*/}
          {/*<a href="">About</a>*/}
        {/*</Footer>*/}
        <SectionsContainer className="container" {...options}>
          <Section className="custom-section" verticalAlign="true" color="rgb(11,19,38)">
            <SectionOne />
          </Section>
          <Section color="rgb(11,19,38)">
            <SectionTwo />
          </Section>
          <Section color="#E0E4CC">Page 3</Section>
        </SectionsContainer>
      </div>
    );
  }
}

export default App;
