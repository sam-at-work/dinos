import React from "react";
import styled from "styled-components";

import { H1 } from "../components/typography";

import * as dinoSVGs from "../assets/images/dinos";
import DinoCanvas from "./Canvas";

console.log(dinoSVGs);

const Wrapper = styled.div`
  max-width: 720px;

  margin-right: auto;
  margin-left: auto;

  position: relative; // needed to make dino canvas appear behind it;
  
  .text-wrapper {
    margin-left: 30px;
    margin-right: 30px;
  }

  .vertical-separator {
    background-color: rgb(241, 129, 230);
    height: 5px;
  }
`;

export default function SectionOne() {
  return (
    <React.Fragment>
      <DinoCanvas />
      <Wrapper>
        <div className="text-wrapper">
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
        </div>
      </Wrapper>
    </React.Fragment>
  );
}
