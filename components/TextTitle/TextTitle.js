import styled from 'styled-components';
import React from 'react';

let TextTitle = styled.h1`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: ${props => props.maxWidth ? props.maxWidth : "90%"};
    display: ${props => props.display ? props.display : "block"};
    font-size: ${props => props.fontSize ? props.fontSize + "px" : "20px"};
    color: #fff;
    padding: ${props => props.padding ? props.padding : "5px"};
    background: #00757e;
    margin-top: 0 
`

export default TextTitle;

