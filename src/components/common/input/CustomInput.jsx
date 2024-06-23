import React from "react";
import { Input } from "antd";
import styled from "styled-components";

const StyledInput = styled(Input)`
  height: 100%;
`;

const CustomInput = ({ placeholder, onChange, value, ...rest }) => {
  return (
    <StyledInput
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      {...rest}
    />
  );
};

export default CustomInput;
