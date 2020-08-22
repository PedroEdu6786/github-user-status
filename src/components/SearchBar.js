import React, { useState } from "react";

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
            <input type="text" onChange={handleChange} />
            <button>Submit</button>
        </form>
    );
}

export default SearchBar;
