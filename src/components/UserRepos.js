import React from "react";
import Repository from "./Repository";

function UserRepos(props) {
    const { repos } = props;

    return repos.map((repo, i) => <Repository key={i} repo={repo} />);
}

export default UserRepos;
