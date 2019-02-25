import React from 'react';
import styled from "styled-components";
import Text from "../Text/Text";
import TextParagraph from "../TextParagraph/TextParagraph";
import TextTitle from "../TextTitle/TextTitle";
import moment from 'moment'
import momentBr from 'moment/locale/pt-br'
moment.locale('momentBr');
const Container = styled.div`
  width: 21%;
  border: 0.13vw solid #00757e;
  margin-right: 2%;
  padding: 1%;
  margin-bottom: 20px;
  cursor: pointer;
  
  &:hover {
    background: #00757e;
    
    span, p {
      color: #fff;
    }
  }
  
  &:nth-child(4n) {
      margin-right: 0 
    }
`;

 class UserRepo extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <Container onClick={this.props.onClick}>
                <TextTitle padding={"5px 10% 5px 5px"}>{this.props.repo.name}</TextTitle>
                <TextParagraph height={96}>{this.props.repo.description}</TextParagraph>
                <Text bold={true} fontSize={14}>{moment(this.props.repo.updated_at).format('llll')}</Text>
                <Text bold={true} fontSize={14}> - </Text>
                <Text bold={true} fontSize={14}>{this.props.repo.language ? this.props.repo.language : "Nenhuma"}</Text>

            </Container>
        )
    }
}

export default UserRepo;
