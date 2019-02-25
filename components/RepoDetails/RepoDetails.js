import React from 'react';
import styled from "styled-components";
import Text from "../Text/Text";
import TextTitle from "../TextTitle/TextTitle";
import TextParagraph from "../TextParagraph/TextParagraph";
import moment from "moment/moment";

const Container = styled.div`
  text-align: center;
  
  a {
    text-decoration: none;
    color: inherit;
  }
  
 `;

export class ReportDetails extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <Container>
                <div>
                    <div>
                        <TextTitle fontSize={30} display={"inline"}><a href={this.props.repo.url} target="_blank">{this.props.repo.name}</a></TextTitle>
                        <TextParagraph maxHeight={200}>
                            {this.props.repo.description}
                        </TextParagraph>
                    </div>
                    <div>
                        <Text fontSize={16} bold={true}>{moment(this.props.repo.updated_at).format('llll')}</Text>
                        <Text fontSize={16} bold={true}> - </Text>
                        <Text fontSize={16} bold={true}>{this.props.repo.language}</Text>
                    </div>

                </div>
            </Container>
        )
    }
}

export default ReportDetails;
