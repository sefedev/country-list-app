import * as React from "react";
import Header from "components/libs/header";
import styled from "styled-components";
import Country from "../components/country/country";
import Search from "components/libs/search";
import { useState } from "react";
import { useEffect } from "react";

const StyledDiv = styled.div`
  margin: -9px;
  padding: 0;
  padding-bottom: 20px;
  min-height: 100vh;
  background: var(--colors-background);
`;
const THEME_MODE = {
  light: "light",
  dark: "dark",
  lightName: "Light Mode",
  darkName: "Dark Mode",
};

export default function Home() {
  const [mode, setMode] = useState(THEME_MODE.light);
  const handleClick = (e) => {
    setMode((mode) => {
      if (mode === THEME_MODE.light) {
        setMode(THEME_MODE.dark);
      } else {
        setMode(THEME_MODE.light);
      }
    });
    return false;
  };

  useEffect(() => {
    document.body.dataset.theme = mode;
  }, [mode]);

  let modeName = "";
  if (mode === THEME_MODE.light) {
    modeName = THEME_MODE.darkName;
  } else {
    modeName = THEME_MODE.lightName;
  }
  return (
    <StyledDiv>
      <Header clicked={handleClick} modes={modeName} />
      <Search />
      <Country />
      <Country />
      <Country />
      <Country />
    </StyledDiv>
  );
}
