import React from 'react';
import styled from "styled-components";


const ButtonStyle = styled.button`
    padding: 16px 20px 14px 20px;
    background: ${props => props.disabled ? "#ccc" : "#00757E"};
    border: none;
    color: #fff;
    line-height: 21px;
    font-size: 20px;
    cursor: pointer;
 `;

export class Button extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <ButtonStyle type={this.props.type} disabled={this.props.disabled} onClick={this.props.onClick}>{this.props.text}</ButtonStyle>
        )
    }
}

export default Button;
