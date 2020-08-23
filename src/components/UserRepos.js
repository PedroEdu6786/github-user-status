import React from "react";
import Repository from "./Repository";
import PropTypes from "prop-types";

function UserRepos(props) {
    const { repos } = props;

    return repos.map((repo, i) => <Repository key={i} repo={repo} />);
}

UserRepos.propTypes = {
    repos: PropTypes.array,
};

export default UserRepos;
