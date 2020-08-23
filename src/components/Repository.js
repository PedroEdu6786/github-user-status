import React from "react";

function Repository(props) {
    const { name, description, html_url, language } = props.repo;
    return (
        <div>
            <h1>{name}</h1>
            <p>{description}</p>
            <p>{html_url}</p>
            <p>{language}</p>
        </div>
    );
}

export default Repository;