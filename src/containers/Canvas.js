import React from "react";
import styled from "styled-components";
import * as dinoSVGs from "../assets/images/dinos";

const Canvas = styled.canvas`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

export default class DinoCanvas extends React.Component {
  ctx; // set in componentDidMount;
  loadedImages = 0;
  hasMounted = false;

  //create the array of circles that will be animated
  dinos = Object.values(dinoSVGs).map(path => {
    const base_image = new Image();
    base_image.src = path;
    base_image.onload = () => {
      this.loadedImages++;
      if (this.loadedImages === this.dinos.length && this.hasMounted) {
        console.log('starting after CDM');
        this.startAnimation();
      }
    };
    return {
      image: base_image,
      vx: Math.random() * 2,
      vy: Math.random() * 2,
    };
  });

  //create the container that will hold the bouncing balls.
  container = { x: 0, y: 0 };

  setCanvasSize = () => {
    const canvas = this.canvas;
    const container = this.container;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    container.width = canvas.width;
    container.height = canvas.height;

    this.dinos.forEach(dino => {
      if (!dino.x || dino.x > container.width - dino.image.width) {
        dino.x = Math.floor(Math.random() * (container.width - dino.image.width));
      }
      if (!dino.y || dino.y > container.height - dino.image.height) {
        dino.y = Math.floor(Math.random() * (container.height - dino.image.height));
      }
    });
  };

  animate = () => {
    const ctx = this.ctx;
    const dinos = this.dinos;
    const container = this.container;

    ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

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
        dino.y + dino.image.height + dino.vy > container.y + container.height
      ) {
        dino.vy = -dino.vy;
      }

      dino.x += dino.vx;
      dino.y += dino.vy;
    });
    requestAnimationFrame(this.animate);
  };

  startAnimation = () => {
    this.setCanvasSize();
    requestAnimationFrame(this.animate);
  }

  componentDidMount() {
    this.hasMounted = true;
    if (this.canvas.getContext) {
      this.ctx = this.canvas.getContext("2d");

      window.addEventListener("resize", this.setCanvasSize);

      if (this.loadedImages === this.dinos.length) {
        console.log('starting from CDM');
        this.startAnimation();
      };
    }
  }

  render() {
    return (
      <Canvas
        innerRef={canvas => {
          this.canvas = canvas;
        }}
      />
    );
  }
}
