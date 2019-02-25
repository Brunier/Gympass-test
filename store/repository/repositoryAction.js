import * as types from '../actionsTypes';
import axios from 'axios';
import {fetchRepos, setImg, setLoading, userNotFound} from "../user/userAction";
import {getReposApi} from "../../utils/apiRoutes";


export function getCommits(commitUrl, callback, page, oldCommits) {
    return function(dispatch) {
        console.log("ON", commitUrl)
        const request = axios({
            method: 'GET',
            url: `${commitUrl}?page=${page}&per_page=20`,
            headers: []
        });

        return request.then(
            response => {
                console.log({response})

                if(response.data.length === 0) {
                    callback(false)
                } else {
                    let commits = [].concat.apply(oldCommits, response.data.map(commit => {
                        return {
                            sha: commit.sha,
                            commit: commit.commit,
                            url: commit.html_url
                        }
                    }));

                    console.log(commits, page, oldCommits)

                    dispatch(fetchCommits(commits));

                    callback(true);
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
