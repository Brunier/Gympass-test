import { connect } from 'react-redux';
import Page from '../components/Page/page';
import React from 'react';
import {bindActionCreators} from 'redux';
import * as userAction from '../store/user/userAction'
import * as reposActions from '../store/repository/repositoryAction'
import UserDetails from '../components/UserDetails/UserDetails'
import UserRepos from '../components/UserRepos/UserRepos'
import FilterRepo from "../components/FilterRepo/FilterRepo";
import Loading from "../components/Loading/Loading";
import Back from "../components/Back/Back";
import Router from 'next/router'

export class ReposPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            userName : ""
        }

    }

    componentDidMount(props) {
        if(!(this.props && this.props.user && this.props.user.repos)) {
            Router.push('/');
        }
    }

    filter = (data) => {
        if(data[2] === "number") {
            this.props.actions.user.getRepos(this.props.user.name, () => {
                this.props.actions.user.reposOrderByNumber(this.props.user.repos, data[1], data[0]);
            });
        } else {
            this.props.actions.user.getRepos(this.props.user.name, () => {}, data[0], data[1]);
        }
    };

    repositorySelect = (repo) => {
        this.props.actions.repos.setRepository(repo);

        this.props.actions.repos.getCommits(repo.commits_url, () => {
            Router.push('/commits');
        }, 1, []);
    };

    redirect = () => {
    };

    render() {
        if(this.props.user && this.props.user.repos) {
            return(
                <div>
                    <Back onClick={() => Router.push('/')} />
                    <UserDetails user={this.props.user} />
                    <FilterRepo filter={this.filter}/>
                    <UserRepos repos={this.props.user.repos} repositorySelect={this.repositorySelect} />
                </div>
            )
        } else {
            return (
                <Loading width={70}/>
            )
        }
    }
}


function mapStateToProps(state, ownProps) {
    return {
        user: state.user
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            user: bindActionCreators(userAction, dispatch),
            repos: bindActionCreators(reposActions, dispatch)
        }
    };
}


export default Page(connect(mapStateToProps, mapDispatchToProps)(ReposPage));
