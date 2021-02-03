import styled from "styled-components";

const Input = styled.input`
  border-radius: 3px;
  border: 1px solid #f1f1f4;
  background: #f1f2f7;
  padding: 8px 12px;
`;
Input.displayName = "Input";

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;
FormGroup.displayName = "FormGroup";

export { Input, FormGroup };
