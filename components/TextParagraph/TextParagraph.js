import styled from 'styled-components';
import React from 'react';


let TextParagraph = styled.p`
  overflow: hidden;
  position: relative;
  line-height: 16px;
  max-height: ${props => props.maxHeight ? props.maxHeight + "px"  : "96px"}; 
  height: ${props => props.height ? props.height + "px" : "inherit"}; 
  margin-right: -1em;
  padding-right: 1em;
  color: #585656;
`

export default TextParagraph;


/*
 color: #585656;
  font-size: 16px;
    height: 96px;
    overflow: hidden;
    text-overflow: ellipsis;
    max-height: 90px;
 */
