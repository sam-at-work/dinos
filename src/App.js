import React, { Component } from 'react';
import './App.css';
import {Footer, Header, Section, SectionsContainer} from "react-fullpage";

import DinoHeader from './containers/Header'
import SectionOne from "./containers/SectionOne";

class App extends Component {
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
          {/*<Section className="custom-section" verticalAlign="true" color="#69D2E7">Page 1</Section>*/}
          <Section className="custom-section" verticalAlign="true" color="rgb(11,19,38)">
            <SectionOne />
          </Section>
          <Section color="#A7DBD8">Page 2</Section>
          <Section color="#E0E4CC">Page 3</Section>
        </SectionsContainer>
      </div>
    );
  }
}

export default App;
