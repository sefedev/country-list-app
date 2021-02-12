// import styling component from './styles'
// so that our component code would be cleaner
import * as React from "react";
import { StyledDiv, CountryDetail, CountryImage, Img } from "./styles";
import stock from "../../assets/stoksandShares.png";

export default function Country() {
  const countryDetails = {
    id: "id",
    name: "countryName",
    population: "inNumber",
    region: "continentName",
    capital: "capitalName",
    image: "insertImageFile",
  };

  return (
    <StyledDiv>
      <CountryImage>
        <Img src={stock} alt="img" />
      </CountryImage>
      <CountryDetail>
        <h3>{countryDetails.name}</h3>
        <div>
          <p>Population: {countryDetails.population}</p>
          <p>Region: {countryDetails.region}</p>
          <p>Capital: {countryDetails.capital}</p>
        </div>
      </CountryDetail>
    </StyledDiv>
  );
}
