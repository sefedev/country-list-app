// import styled from "styled-components";

// const Input = styled.input`
//   border-radius: 3px;
//   border: 1px solid #f1f1f4;
//   background: #f1f2f7;
//   padding: 8px 12px;
// `;
// Input.displayName = "Input";

// const FormGroup = styled.div`
//   display: flex;
//   flex-direction: column;
//   margin-bottom: 16px;
// `;
// FormGroup.displayName = "FormGroup";

// export { Input, FormGroup };

import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as React from "react";
import styled from "styled-components";
import { gray, gray10, gray20, gray80 } from "../../styles/colors";

const Div = styled.div`
  margin: 50px;
`;

const FormInput = styled.input`
  padding: 15px;
  border: 1px solid ${gray};
  color: var(--colors-text);
  background: var(--colors-background);
  border-right: none;
  font-size: 20px;
  min-width: 300px;

  :focus {
    border: 1px solid red;
  }
`;

const FormButton = styled.button`
  padding: 15px;
  font-size: 20px;
  border-left: none;
  border-right: 1px solid ${gray};
  border-top: 1px solid ${gray};
  border-bottom: 1px solid ${gray};
  margin-left: 0;
  background: ${gray20};
  color: ${gray80};

  :hover {
    background: ${gray10};
    transition: 0.3s ease-in-out;
  }
`;

export default function Form() {
  return (
    <Div>
      <FormInput type="text" placeholder="Enter a Country" />
      <FormButton>
        <FontAwesomeIcon icon={faSearch} />
      </FormButton>
    </Div>
  );
}
