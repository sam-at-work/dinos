import React from "react";
import styled from "styled-components";

import { H1 } from "../components/typography";

import DinoCanvas from "./Canvas";

const Wrapper = styled.div`
  position: relative; // needed to make dino canvas appear behind it;

  max-width: 720px;

  margin-right: auto;
  margin-left: auto;

  padding-left: 30px;
  padding-right: 30px;

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
        <H1>find the perfect dino for you.</H1>
        <div className="vertical-separator" />
        <div>
          <p>We all have dinosaurs deep within us just trying to get out.</p>
          <p>
            There is a dinosaurian connection. Our love of dinosaurs is a little
            more intense than is typical. By adopting your dino, you’re
            supporting our fresh discoveries. Our dinosaurs are big, fierce and
            lovely. This makes them suitably impressive, but safe to approach.
            There’s no risk of Allosaurus snaffling up kids who lean over the
            barriers at the Natural History Museum.
          </p>
        </div>
      </Wrapper>
    </React.Fragment>
  );
}
