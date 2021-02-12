import * as React from "react";
import styled from "styled-components";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { indigoLighten80, text } from "styles/colors";

const StyledDiv = styled.div`
  display: flex;
  max-width: 100%;
  background-color: ${indigoLighten80};
  padding: 10px 50px;
  color: ${text};
  justify-content: space-between;
  align-items: center;
`;

const Click = styled.div`
  cursor: pointer;

  :hover {
    color: white;
    transition: 0.3s ease-in-out;
    transform: scale(1.1);
  }
`;

export default function Header(props) {
  return (
    <StyledDiv>
      <div>
        <h2>Where in the world?</h2>
      </div>
      <Click onClick={props.clicked}>
        <FontAwesomeIcon icon={faMoon} />
        <span>{props.modes}</span>
      </Click>
    </StyledDiv>
  );
}
