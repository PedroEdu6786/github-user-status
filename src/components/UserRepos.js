import React, { useState } from "react";
import Repository from "./Repository";
import PropTypes from "prop-types";
import ItemsCarousel from "react-items-carousel";
import "../styles/app.css";

function UserRepos(props) {
    const { repos } = props;
    const [activeItemIndex, setActiveItemIndex] = useState(0);
    const chevronWidth = 20;

    return (
        <div className="repos-container">
            <h2>User's Repositories:</h2>
            <div style={{ padding: `0 ${chevronWidth}px` }}>
                <ItemsCarousel
                    requestToChangeActive={setActiveItemIndex}
                    activeItemIndex={activeItemIndex}
                    numberOfCards={1}
                    gutter={20}
                    leftChevron={
                        <button className="btn-carousel">{"<"}</button>
                    }
                    rightChevron={
                        <button className="btn-carousel">{">"}</button>
                    }
                    outsideChevron
                    chevronWidth={chevronWidth}
                >
                    {repos.map((repo, i) => (
                        <Repository key={i} repo={repo} />
                    ))}
                </ItemsCarousel>
            </div>
        </div>
    );
}

UserRepos.propTypes = {
    repos: PropTypes.array,
};

export default UserRepos;
