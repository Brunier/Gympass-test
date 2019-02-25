import React from 'react';
import styled from "styled-components";
import UserRepo from '../UserRepo/UserRepo';

const Container = styled.div`
  margin-top: 40px;
  flex-wrap: wrap;
  display: flex;
  margin-bottom: 60px;
`;

class UserRepos extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <Container>
                {this.props.repos.map(repo => {
                    return(
                        <UserRepo key={repo.name} repo={repo} onClick={() =>{
                            this.props.repositorySelect(repo)
                        }} />
                    )
                })}
            </Container>
        )
    }
}

export default UserRepos;
