import React from 'react';
import styled from "styled-components";
import Text from "../Text/Text";
import TextTitle from "../TextTitle/TextTitle";
import TextParagraph from "../TextParagraph/TextParagraph";
import moment from "moment/moment";

const Container = styled.div`
  padding: 10px;
  border: 2px solid #00757e;
  height: 200px;
  margin-bottom: 30px;
    
  a {
    text-decoration: none;
    color: inherit;
  }
  
 `;

export class Commit extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <Container>
                <div>
                    <TextTitle maxWidth={"100%"} fontSize={18}><a href={this.props.commit.url} target="_blank">{this.props.commit.sha}</a></TextTitle>
                    <TextParagraph maxHeight={120} height={120}>
                        {this.props.commit.commit.message}
                    </TextParagraph>
                </div>
                <div>
                    <Text fontSize={16} bold={true}>{this.props.commit.commit.author.name}</Text>
                    <Text fontSize={16} bold={true}> - </Text>
                    <Text fontSize={16} bold={true}>{moment(this.props.commit.commit.author.date).format('llll')}</Text>
                </div>
            </Container>
        )
    }
}

export default Commit;
