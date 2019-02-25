import React from 'react';
import styled from "styled-components";

const Container = styled.div`
    text-align: center;
    display: ${props => props.display ? props.display : "block"};
    vertical-align: middle;
    position: relative;
    left: ${props => props.left ? props.left : "0"};
    top: 5px;
  
  img {
    width: ${props => props.width + "px"};
  }
 `;

export class Loading extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <Container {...this.props}>
                <img src={this.props.img ? this.props.img : "/static/loading.gif"} />
            </Container>
        )
    }
}

export default Loading;
