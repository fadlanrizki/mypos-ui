import { Button } from "antd";
import React from "react";

const CustomButton = ({ type = "primary", value, ...rest }) => {
  return (
    <Button type={type} {...rest}>
      {value}
    </Button>
  );
};

export default CustomButton;
