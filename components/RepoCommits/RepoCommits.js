import React from 'react';
import Commit from "../Commit/Commit"


class RepoCommits extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                {this.props.commits.map((commit, i) => {
                    return (
                        <Commit key={commit.sha + i } commit={commit} />
                    )
                })}
            </div>
        )
    }
}

export default RepoCommits;
