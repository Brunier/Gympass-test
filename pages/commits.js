import { connect } from 'react-redux';
import Page from '../components/Page/page';
import React from 'react';
import {bindActionCreators} from 'redux';
import * as repoAction from '../store/repository/repositoryAction'
import InfiniteScroll from 'react-infinite-scroller';
import RepoDetails from "../components/RepoDetails/RepoDetails"
import Loading from "../components/Loading/Loading"
import RepoCommits from "../components/RepoCommits/RepoCommits";
import Router from "next/router";
import Back from "../components/Back/Back";
import Search from "../components/Search/Search"
import Text from "../components/Text/Text"
import styled from "styled-components";


let ContainerCenter = styled.div`
  margin-top: 10px;
  text-align: center;
`



export class CommitsPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            hasMoreCommit: true,
            keyInfinite: new Date().getTime(),
            searchingCommit: false,
            searchCommitTerm: "",
        }
    }

    componentDidMount() {
        if(!(this.props && this.props.repo && this.props.repo.repository)) {
            Router.push('/');
        }
    }

    loadMoreItems = (page) => {
        this.getCommit(page);
    };

    getCommit = (page) => {
        this.props.actions.repo.getCommits(this.props.repo.repository.commits_url, (hasMore) => {
            this.setState({
                hasMoreCommit: hasMore
            })
        }, page, this.props.repo.commits)
    };


    getCommitInSearch = (page) => {
        this.props.actions.repo.getCommitsSearch(this.props.user.name, this.props.repo.repository.name, (hasMore) => {
            this.setState({
                hasMoreCommit: hasMore
            })
        }, page, this.state.searchCommitTerm, this.props.repo.commits)
    };

    searchCommit = (term) => {
        this.setState({
            keyInfinite: new Date().getTime(),
            searchingCommit: true,
            searchCommitTerm: term,
            page: 1
        }, () => {
            this.getCommitInSearch(1)
        });
    };

    onCleanSearch = () => {
        this.setState({
            searchingCommit: false,
            searchCommitTerm: "",
            keyInfinite: new Date().getTime(),
            page: 1
        }, () => {
            this.getCommit(1);
        })
    };


    render() {

        return this.props.repo.commits ? (
            <div>
                <Back onClick={() => Router.push('/repos')} />
                <RepoDetails repo={this.props.repo.repository}/>

                <Search btnText={"Procurar Commits"} placeholder={"Termo"}
                            onClick={this.searchCommit}
                            error={this.props.repo.errorSearch}
                            loading={this.props.repo.loadingSearch}
                            onClean={this.onCleanSearch}
                            disabled={this.props.repo.repository.isFork}
                            marginTop={30}
                />

                {this.props.repo.repository.isFork ? <ContainerCenter>
                     <Text fontSize={15}>Infelizmente repositórios derivados de outros (forks) não podem ter os commits filtrados</Text>
                </ContainerCenter> : ""}

                <div style={{margin: "40px 0 100px 0"}}>
                    {!this.state.searchingCommit ? <InfiniteScroll
                        key={this.state.keyInfinite}
                        pageStart={1}
                        loadMore={this.loadMoreItems}
                        hasMore={this.state.hasMoreCommit}
                        loader={<Loading width={50}/>}>
                        <RepoCommits commits={this.props.repo.commits} />
                    </InfiniteScroll> : <RepoCommits commits={this.props.repo.commits} />}
                </div>

            </div>
        ) : <Loading width={70}/>
    }
}


function mapStateToProps(state, ownProps) {
    return {
        repo: state.repository,
        user: state.user
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            repo: bindActionCreators(repoAction, dispatch)
        }
    };
}


export default Page(connect(mapStateToProps, mapDispatchToProps)(CommitsPage));
