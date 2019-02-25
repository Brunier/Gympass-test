import {Component} from 'react';
import styled from "styled-components";
import Text from "../Text/Text";
import React from 'react';

const Container = styled.div`
  
`;

export class FilterRepo extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <Container>
                <Text>Filtrar por: </Text>
                <select onChange={(event) => {
                    console.log(event.target.value.split("-"))
                    this.props.filter(event.target.value.split("-"))
                }}>
                    <option value="updated-desc-server">Mais Atualizado</option>
                    <option value="updated-asc-server">Mais Desatualizado</option>
                    <option value="created-asc-server">Mais antigo</option>
                    <option value="created-desc-server">Mais novo</option>
                    <option value="full_name-asc-text">Ordem Alfabetica</option>
                    <option value="forks-desc-number-">Maior Numero de Forks</option>
                    <option value="forks-asc-number">Menor Numero de Forks</option>
                    <option value="stars-desc-number">Maior Numero de Stars</option>
                    <option value="stars-asc-number">Menor Numero de Stars</option>
                    <option value="watchers-desc-number">Maior Numero de Watchers</option>
                    <option value="watchers-asc-number">Menor Numero de Watchers</option>
                </select>
            </Container>
        )
    }
}

export default FilterRepo;
