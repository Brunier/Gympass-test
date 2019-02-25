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



export class CommitsPage extends React.Component {
    constructor(props) {
        super(props);

        this.setState({
            hasMoreCommit: true
        })
    }

    componentDidMount(props) {
        if(!(this.props && this.props.repo && this.props.repo.repository)) {
            Router.push('/');
        }
    }

    loadMoreItems = (page) => {
        this.props.actions.repo.getCommits(this.props.repo.repository.commits_url, (hasMore) => {
            this.setState({
                hasMoreCommit: hasMore
            })
        }, page, this.props.repo.commits)
    };


    render() {
        return this.props.repo.commits ? (
            <div>
                <Back onClick={() => Router.push('/repos')} />
                <RepoDetails repo={this.props.repo.repository}/>
                <div style={{margin: "40px 0 100px 0"}}>
                    <InfiniteScroll
                        pageStart={1}
                        loadMore={this.loadMoreItems}
                        hasMore={true}
                        loader={<Loading width={50}/>}>
                        <RepoCommits commits={this.props.repo.commits} />
                    </InfiniteScroll>
                </div>

            </div>
        ) : <Loading width={70}/>
    }
}


function mapStateToProps(state, ownProps) {
    return {
        repo: state.repository
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
