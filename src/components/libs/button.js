import styled from "styled-components";

const buttonVariants = {
  primary: {
    background: "#3f51b5",
    color: "white",
  },
  secondary: {
    background: "#f1f2f7",
    color: "#434449",
  },
};

const Button = styled.button`
  padding: 10px 15px;
  border: 0;
  line-height: 1;
  border-radius: 3px;
  color: ${({ variant = "primary" }) => buttonVariants[variant].color};
  background: ${({ variant = "primary" }) =>
    buttonVariants[variant].background};
`;
Button.displayName = "Button";

const CircleButton = styled.button`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  line-height: 1;
  text-align: center;
`;

CircleButton.displayName = "CirclrButton";

export { CircleButton, Button };
