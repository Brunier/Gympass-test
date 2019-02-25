import { connect } from 'react-redux';
import Page from '../components/Page/page';
import React from 'react';
import {bindActionCreators} from 'redux';
import * as userAction from '../store/user/userAction'
import TextIndex from '../components/TextIndex/TextIndex';
import UserSearch from '../components/UserSearch/UserSearch';
import Router from 'next/router'



export class IndexPage extends React.Component {
    constructor(props) {
        super(props);
    }

    setUser = (name) => {
        this.props.actions.user.setName(name);

        //TODO Validar se tem repositorio
        //TODO Colocar LoadingIndex
        this.props.actions.user.getRepos(name, () => {
            Router.push('/repos');
        })
    };


    render() {
        return(
            <div>
                <TextIndex>Olá! Qual usuário você deseja pesquisar?</TextIndex>
                <UserSearch setUser={this.setUser} error={this.props.user.error} loading={this.props.user.loading}/>

            </div>
        )
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
            user: bindActionCreators(userAction, dispatch)
        }
    };
}


export default Page(connect(mapStateToProps, mapDispatchToProps)(IndexPage));
