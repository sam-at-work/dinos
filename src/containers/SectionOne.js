import React from "react";
import styled from "styled-components";

import { H1 } from "../components/typography";

const Wrapper = styled.div`
  max-width: 720px;

  margin-right: auto;
  margin-left: auto;

  .vertical-separator {
    background-color: rgb(241, 129, 230);
    height: 5px;
  }
`;

const Canvas = styled.canvas`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: red;
`;

export default class SectionOne extends React.Component {
  componentDidMount() {
    const canvas = this.canvas;
    debugger;
    if (canvas.getContext) {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      window.addEventListener("resize", () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      });

      var ctx = canvas.getContext("2d");

      ctx.fillStyle = "rgb(200, 0, 0)";
      ctx.fillRect(10, 10, 50, 50);

      ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
      ctx.fillRect(30, 30, 50, 50);
    }
  }

  render() {
    return (
      <React.Fragment>
        <Canvas
          innerRef={canvas => {
            this.canvas = canvas;
          }}
        >
          Test
        </Canvas>
        <Wrapper>
          <H1>find the perfect dino for you.</H1>
          <div className="vertical-separator" />
          <div>
            <p>We all have dinosaurs deep within us just trying to get out.</p>
            <p>
              There is a dinosaurian connection. Our love of dinosaurs is a
              little more intense than is typical. By adopting your dino, you’re
              supporting our fresh discoveries. Our dinosaurs are big, fierce
              and lovely. This makes them suitably impressive, but safe to
              approach. There’s no risk of Allosaurus snaffling up kids who lean
              over the barriers at the Natural History Museum.
            </p>
          </div>
        </Wrapper>
      </React.Fragment>
    );
  }
}
