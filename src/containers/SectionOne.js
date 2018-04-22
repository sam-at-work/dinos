import React from "react";
import styled from "styled-components";

import { H1 } from "../components/typography";

import * as dinoSVGs from "../assets/images/dinos";

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
    if (canvas.getContext) {

      function setCanvasSize() {
        const canvasWidth = window.innerWidth;
        const canvasHeight = window.innerWidth;
        canvas.width = canvasWidth;
        canvas.height = canvasHeight;
      }
      window.addEventListener("resize", setCanvasSize);
      setCanvasSize();

      var ctx = canvas.getContext("2d");

      //create te container that will hold the boincing balls.
      var container = {
        x: 0,
        y: 0,
        width: window.innerWidth,
        height: window.innerHeight
      };


      //create the array of circles that will be animated
      var dinos = [
        {
          image: null,
          x: 500,
          y: 500,
          vx: -5,
          vy: -5
        }
      ];

      console.log(dinoSVGs[0]);
      const base_image = new Image();
      base_image.src = Object.values(dinoSVGs)[0];
      dinos[0].image = base_image;
      base_image.onload = function() {
        console.log(dinos);
        requestAnimationFrame(animate);
      };

      function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        dinos.forEach(dino => {
          ctx.drawImage(dino.image, dino.x, dino.y);

          //time to animate our circles ladies and gentlemen.
          if (
            dino.x + dino.vx < container.x ||
            dino.x + dino.image.width + dino.vx > container.x + container.width
          ) {
            dino.vx = -dino.vx;
          }

          if (
            dino.y + dino.vy < container.y ||
            dino.y + dino.image.height + dino.vy >
              container.y + container.height
          ) {
            dino.vy = -dino.vy;
          }

          dino.x += dino.vx;
          dino.y += dino.vy;
        });
        requestAnimationFrame(animate);
      }
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
