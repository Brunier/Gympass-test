import * as types from '../actionsTypes';
import axios from 'axios';
import {getReposApi} from '../../utils/apiRoutes'
import {orderByNumber} from './../../utils/orderBy'

export function getRepos(userName, callback, sort = "updated", direction = "desc") {
    return function (dispatch) {

        dispatch(setLoading(true));
        dispatch(userError(false));

        const request = axios({
            method: 'GET',
            url: getReposApi(userName, sort, direction),
            headers: []
        });

        return request.then(
            response => {
                if(response.data.length === 0) {
                    dispatch(userError("Esse usuário não existe no github :("));
                    dispatch(setLoading(false));
                } else {
                    dispatch(fetchRepos(response.data.map(repo => {
                        return {
                            name: repo.name,
                            description: repo.description,
                            url: repo.html_url,
                            commits_url: repo.commits_url.replace("{/sha}", ""),
                            created_at: repo.created_at,
                            updated_at: repo.updated_at,
                            language: repo.language,
                            stars: repo.stargazers_count,
                            watchers: repo.watchers_count,
                            forks: repo.forks,
                            isFork: repo.fork
                        }
                    })));
                    dispatch(setImg(response.data[0].owner.avatar_url));

                    setTimeout(() => {
                         dispatch(setLoading(false));
                         dispatch(userError(null));
                     }, 1000)
                    callback();
                }
            },
        ).catch((err) => {
            dispatch(userError(err && err.response && err.response.status === 403 ? "Infelizmente o número de requisições da API do Github foi excedida :( " : "Tivemos um imprevisto, poderia tentar novamente?"));
            dispatch(setLoading(false));
        });
    }
}

export function reposOrderByNumber(repos, order, value) {
    return function (dispatch) {
        dispatch(fetchRepos(orderByNumber(repos, order, value)));
    }
}


export function setName(data) {

    return {
        type: types.GET_USER_NAME,
        loadData: data
    }

}


export function fetchRepos(data) {

    return {
        type: types.GET_USER_REPOS,
        loadData: data
    }

}

export function setImg(data) {
    return {
        type: types.GET_USER_IMG,
        loadData: data
    }
}

export function setLoading(data) {
    return {
        type: types.GET_USER_LOADING,
        loadData: data
    }
}

export function userError(data) {
    return {
        type: types.USER_ERROR,
        loadData: data
    }
}


