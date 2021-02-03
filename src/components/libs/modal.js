import "@reach/dialog/styles.css";
import styled from "styled-components";
import Dialog from "@reach/dialog";

const Modal = styled(Dialog)`
  border-radius: 3px;
`;
Modal.displayName = "Modal";

export { Modal };
