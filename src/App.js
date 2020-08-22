import React, { useState } from "react";
import SearchBar from "./components/SearchBar.js";
import UserCard from "./components/UserCard.js";

function App() {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState({});
    const [error, setErrorMessage] = useState(null);

    const searchUser = (username) => {
        setLoading(true);
        setErrorMessage(null);
        fetch(`https://api.github.com/users/${username}`)
            .then((res) => res.json())
            .then((json) => {
                setUser(json);
                setLoading(false);
                console.log(json);
            })
            .catch((err) => {
                setErrorMessage(err);
                setLoading(false);
            });
    };

    const displayUserCard = () => {
        if (loading) {
            return <div>Look Up a User</div>;
        } else {
            return <UserCard user={user} />;
        }
    };

    return (
        <div className="App">
            <SearchBar searchUser={searchUser} />
            {displayUserCard()}
        </div>
    );
}

export default App;
