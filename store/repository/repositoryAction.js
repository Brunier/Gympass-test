import * as types from '../actionsTypes';
import axios from 'axios';
import {fetchRepos, setImg, setLoading, userNotFound} from "../user/userAction";
import {getCommitsSearchApi} from "../../utils/apiRoutes";



export function getCommits(commitUrl, callback, page, oldCommits) {
    return function(dispatch) {
        const request = axios({
            method: 'GET',
            url: `${commitUrl}?page=${page}&per_page=20`,
            headers: {
                "Authorization": "token 73a555b6a8eb86e8786f42c8d8ca6912dbb8f597"
            }
        });

        dispatch(setErrorSearch(""));

        return request.then(
            response => {
                if(response.data.length === 0) {
                    callback(false)
                } else {
                    let commits = [].concat.apply(page === 1 ? [] : oldCommits, response.data.map(commit => {
                        return {
                            sha: commit.sha,
                            commit: commit.commit,
                            url: commit.html_url
                        }
                    }));


                    dispatch(fetchCommits(commits));

                    callback(true);
                }
            })
    }
}


export function getCommitsSearch(userName, repoName, callback, page, valueSearch, oldCommits) {
    return function(dispatch) {
        dispatch(setLoadSearch(true));
        dispatch(setErrorSearch(""));

        const request = axios({
            method: 'GET',
            url:getCommitsSearchApi(userName, repoName, page, valueSearch) ,
            headers: {
                "Accept": "application/vnd.github.cloak-preview",
                "Authorization": "token 73a555b6a8eb86e8786f42c8d8ca6912dbb8f597"
            }
        });


        return request.then(
            response => {
                if(response.data.items.length === 0) {
                    dispatch(fetchCommits([]));
                    dispatch(setLoadSearch(false));
                    dispatch(setErrorSearch("Infelizmente a API não conseguiu achar nenhum commit com esse termo"))
                    callback(false)
                } else {
                    let commits = [].concat.apply(page === 1 ? [] : oldCommits, response.data.items.map(commit => {
                        return {
                            sha: commit.sha,
                            commit: commit.commit,
                            url: commit.html_url
                        }
                    }));


                    dispatch(fetchCommits(commits));
                    dispatch(setLoadSearch(false));
                    callback(false);
                }
            })
    }
}


export function fetchCommits(commits) {
    return {
        type: types.SET_COMMITS,
        loadData: commits
    }
}

export function setRepository(repo) {
    return {
        type: types.SELECT_REPOSITORY,
        loadData: repo
    }
}

export function setLoadSearch(data) {
    return {
        type: types.LOAD_SEARCH_COMMIT,
        loadData: data
    }
}

export function setErrorSearch(data) {
    return {
        type: types.ERROR_SEARCH_COMMIT,
        loadData: data
    }
}
