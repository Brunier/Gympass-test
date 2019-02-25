import React from 'react';
import styled from "styled-components";
import Button from "../Button/Button"


const Container = styled.div`
    position: absolute;
    right: 4%
 `;

export class Back extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <Container>
                <Button text={"Voltar"} onClick={this.props.onClick}/>
            </Container>
        )
    }
}

export default Back;
