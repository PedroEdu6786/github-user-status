import React, { useState } from "react";
import PropTypes from "prop-types";
import "../styles/app.css";

function SearchBar(props) {
    const { searchUser } = props;
    const [searchVal, setSearchVal] = useState("");

    const handleChange = (e) => {
        setSearchVal(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        searchUser(searchVal);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input className="user-input" type="text" onChange={handleChange} />
            <button className="btn-user">Submit</button>
        </form>
    );
}

SearchBar.propTypes = {
    searchUser: PropTypes.func,
};

export default SearchBar;
