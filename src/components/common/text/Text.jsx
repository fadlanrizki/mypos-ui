import React from "react";
import styled from 'styled-components';

const TextCustom = styled.p`
    font-weight: ${props => props.weight};
    font-size: ${props => props.size};
`;

const Text = ({size = 16, weight = 400, ...rest}) => {
  return <TextCustom size weight {...rest}></TextCustom>;
};

export default Text;
