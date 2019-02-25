const github_api = "https://api.github.com";


export function getReposApi(user, sort, direction) {
    return `${github_api}/users/${user}/repos?sort=${sort}&direction=${direction}`;
}

export function getCommitsSearchApi(userName, repoName, page, valueSearch) {
    return `${github_api}/search/commits?q=repo:${userName}/${repoName}+${valueSearch}&page=${page}&per_page=100`;
}
