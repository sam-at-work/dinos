import React from "react";
import styled from "styled-components";
import * as dinoSVGs from "../assets/images/dinos";

const Canvas = styled.canvas`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  //background-color: red;
`;

export default class DinoCanvas extends React.Component {

  constructor() {
    super()
  }

  componentDidMount() {
    const canvas = this.canvas;
    if (canvas.getContext) {
      //create the array of circles that will be animated
      const dinos = Object.values(dinoSVGs).map(path => {
        const base_image = new Image();
        base_image.src = path;
        return {
          image: base_image,
          vx: Math.random() * 2,
          vy: Math.random() * 2
        };
      });

      //create the container that will hold the boincing balls.
      const container = {
        x: 0,
        y: 0
      };

      function setCanvasSize() {
        const canvasWidth = window.innerWidth;
        const canvasHeight = window.innerHeight;
        canvas.width = canvasWidth;
        canvas.height = canvasHeight;

        dinos.forEach(dino => {
          dino.x = Math.floor(Math.random() * (canvasWidth - dino.image.width));
          dino.y = Math.floor(
            Math.random() * (canvasHeight - dino.image.height)
          );
        });

        container.width = canvasWidth;
        container.height = canvasHeight;
      }

      window.addEventListener("resize", setCanvasSize);

      const ctx = canvas.getContext("2d");

      dinos[dinos.length - 1].image.onload = function() {
        setCanvasSize();
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
      <Canvas
        innerRef={canvas => {
          this.canvas = canvas;
        }}
      >
        Test
      </Canvas>
    );
  }
}
