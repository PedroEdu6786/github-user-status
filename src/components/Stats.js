import React from "react";
import PropTypes from "prop-types";
import "../styles/app.css";

const Stats = (props) => {
    const username = props.username;
    const grade = `https://github-readme-stats.vercel.app/api?username=${username}&count_private=true&show_icons=true`;
    const languages = `https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact`;

    return (
        <div className="stats-container">
            <img className="gb-stats" src={grade} alt="stats" />
            <img className="gb-languages" src={languages} alt="language" />
        </div>
    );
};

Stats.propTypes = {
    username: PropTypes.string,
};

export default Stats;
