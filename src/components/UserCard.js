import React from "react";
import PropTypes from "prop-types";
import "../styles/app.css";

function UserCard(props) {
    const { id, name, html_url, bio, avatar_url } = props.user;
    return (
        <div id={id} className="user-info-container">
            <img className="user-avatar-img" src={avatar_url} alt={name} />
            <div className="user-info">
                <h3>{name}</h3>
                <p className="user-bio">{bio}</p>
                <p className="user-url">{html_url}</p>
            </div>
        </div>
    );
}

UserCard.propTypes = {
    user: PropTypes.object,
};

export default UserCard;
