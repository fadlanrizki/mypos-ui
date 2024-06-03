import React from "react";
import { Input } from "antd";

const CustomInput = ({ placeholder, onChange, value, ...rest }) => {
  return (
    <Input
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      {...rest}
    />
  );
};

export default CustomInput;
