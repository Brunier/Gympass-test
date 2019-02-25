import React from 'react';
import styled from "styled-components";
import Text from "../Text/Text";

const Container = styled.div`
  text-align: center;
  img {
    width: 7%;
    border-radius: 20px;
  }
  
 `;

export class UserDetails extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <Container>
                <div>
                    <div>
                        <img src={this.props.user.img} />
                    </div>
                    <div>
                        <Text bold={true}>{this.props.user.name}</Text>
                        <Text bold={true}> - </Text>
                        <Text bold={true}>Mostrando {this.props.user.repos.length} repositórios no total</Text>
                    </div>

                </div>
            </Container>
        )
    }
}

export default UserDetails;
