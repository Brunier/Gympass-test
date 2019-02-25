const github_api = "https://api.github.com";


export function getReposApi(user, sort, direction) {
    return `${github_api}/users/${user}/repos?sort=${sort}&direction=${direction}`;
}

