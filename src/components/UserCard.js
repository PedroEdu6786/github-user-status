import React from "react";

function UserCard(props) {
    const { id, login, name, html_url, bio, avatar_url } = props.user;
    return (
        <div id={id}>
            <h3>{name}</h3>
            <p>{login}</p>
            <p>{html_url}</p>
            <p>{bio}</p>
            <img src={avatar_url} alt="" />
        </div>
    );
}

export default UserCard;
