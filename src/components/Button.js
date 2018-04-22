import styled from 'styled-components';

export const Button = styled.button`
  /* Adapt the colours based on primary prop */
  //background: ${props => props.primary ? 'palevioletred' : 'white'};
  //color: ${props => props.primary ? 'white' : 'palevioletred'};
  color: white;

  font-size: 1em;
  font-weight: bold;
  
  //margin: 1em;
  padding: 0.1em 0.5em;
  border: 3px solid rgb(48,253,47);
  border-radius: 50px;
  
  &:active,
  &:hover {
    color: rgb(48,253,47);
  }
`;

export const Link = Button.withComponent('a');