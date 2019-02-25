import styled from 'styled-components';
import React from 'react';



let Text = styled.span`
  color: #585656;
  font-size: ${props => props.fontSize ? props.fontSize + "px"  : "20px"};
  font-weight: ${props => props.bold ? "bold" : "none"};
`

export default Text;

