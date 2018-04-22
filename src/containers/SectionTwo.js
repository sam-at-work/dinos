import React from "react";
import styled from "styled-components";

import Slider from "rc-slider";
import "rc-slider/assets/index.css";

import { H1 } from "../components/typography";
import dino from "../assets/images/Page 1.svg";

const Wrapper = styled.div`
  position: relative;
  height: 100%;

  .controls {
  
    width: 46%;
    position: relative;
    top: 45%;
    left: 50%;

    padding-left: 30px;
  }

  .dino {
    background-image: url("${dino}");
    background-position: center;
    background-repeat: no-repeat;
    background-size: ${props => props.size}%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
`;

export default class SectionTwo extends React.Component {
  state = { size: 50 };

  handleChange = (size) => {
    this.setState({size});
  };


  render() {
    return (
      <Wrapper size={this.state.size} >
        <div className="dino" />

        <div className="controls">
          <H1>size of your puppy.</H1>
          <p>fearsome gigantic or chicken sized</p>
          <Slider
            railStyle={{ height: 20, borderRadius: 50 }}
            trackStyle={{ height: 20, borderRadius: 50 }}
            handleStyle={{
              border: 'none',
              borderRadius: '50%',
              height: 30,
              width: 30,
              marginTop: -5,
              marginLeft: -15,
              backgroundColor: 'rgb(233,50,74)',
            }}
            value={this.state.size}
            min={20}
            onChange={this.handleChange}
          />
        </div>
      </Wrapper>
    );
  }
}