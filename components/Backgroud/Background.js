import {Component} from 'react';
import styled from 'styled-components'
import React from 'react';

const Container = styled.div`
  height: 70px;
  overflow: hidden;
  width: 100%;
  transform: ${props => props.top ? "rotate(180deg)" : "rotate(0)"};
  position: ${props => props.top ? "relative" : "fixed"};
  bottom: 0;
  
  svg {
    height: 100%;
    width: 100%;
    
    path {
      stroke: none;
      fill: #00757e
    }
  }
`;


class Background extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container top={this.props.top}>
                 <svg viewBox="0 0 500 150" preserveAspectRatio="none">
                     <path d="M0.00,49.98 C149.99,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"></path>
                 </svg>
            </Container>
        )
    }
}

export default Background;
