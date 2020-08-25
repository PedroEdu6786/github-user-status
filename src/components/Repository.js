import React from "react";
import PropTypes from "prop-types";
import "../styles/app.css";

function Repository(props) {
    const { name, description, html_url, language } = props.repo;
    console.log(props.repo);
    return (
        <div className="user-repo">
            <h3>{name}</h3>
            <p className="repo-des">{description}</p>
            <p className="repo-lang"> {language}</p>
            <p className="repo-url">{html_url}</p>
        </div>
    );
}

Repository.propTypes = {
    repo: PropTypes.object,
};

export default Repository;
