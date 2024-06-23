import { Button } from "antd";
import React from "react";
import styled from "styled-components";

const StyledButton = styled(Button)`
  min-height: 44px;
  height: 100%;
`;

const CustomButton = ({ type = "primary", block = true, value, ...rest }) => {
  return (
    <StyledButton type={type} block={block} {...rest}>
      {value}
    </StyledButton>
  );
};

export default CustomButton;
