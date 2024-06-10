import { Button } from "antd";
import React from "react";

const CustomButton = ({ type = "primary", block = true, value, ...rest }) => {
  return (
    <Button type={type} block={block} {...rest}>
      {value}
    </Button>
  );
};

export default CustomButton;
