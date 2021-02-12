import styled from "styled-components";
import { gray } from "../../../styles/colors";

const FilterStyle = styled.select`
  padding: 15px;
  font-size: 20px;
  color: var(--colors-text);
  background: var(--colors-background);
  border: 1px solid ${gray};
  min-width: 300px;
  margin: 50px;
`;

export { FilterStyle };
