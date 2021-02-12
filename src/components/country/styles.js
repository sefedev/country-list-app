// putting styling files here

import styled from "styled-components";
import { indigoLighten80 } from "styles/colors";

//border: 3px solid ${gray};
const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  overflow: hidden;
  margin: 10px;
  margin-top: 0px;
  margin-bottom: 50px;
  width: 18em;
  height: 23em;
`;

const CountryDetail = styled.div`
  height: 9em;
  background: ${indigoLighten80};
  border-radius-topright: 100px;
  border-radius-topleft: 20px;
  padding-top: 10px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 100px;
`;

const CountryImage = styled.div`
  height: 10em;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
`;

export { StyledDiv, CountryDetail, CountryImage, Img };
