import React from "react";
import styled from 'styled-components';
import { COLOR_PRIMARY } from "../../../constants/propertiesConstant";


const StyledText = styled.span`
  font-size: ${(props) => props.size || '16px'};
  font-weight: ${(props) => props.weight || 'normal'};
  color: ${(props) => props.color || COLOR_PRIMARY};
`;

// Define the functional component
const CustomText = ({ children, size, weight, color, ...rest }) => {
  return (
    <StyledText size={size} weight={weight} color={color} {...rest}>
      {children}
    </StyledText>
  );
}

export default CustomText;
