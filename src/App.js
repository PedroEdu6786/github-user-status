import React, { useState } from "react";
import Header from "./components/Header.js";
import SearchBar from "./components/SearchBar.js";
import UserCard from "./components/UserCard.js";
import Stats from "./components/Stats.js";
import UserRepos from "./components/UserRepos.js";

function App() {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState({});
    const [repos, setRepos] = useState([]);
    const [error, setErrorMessage] = useState(null);

    /*
      Fetches data from two different endpoints
      userData fetches all basic information from a github user
      userRepos fetches the information of all repositories this user have
    */
    const searchUser = (username) => {
        setLoading(true);
        setErrorMessage(null);

        let userData = fetch(`https://api.github.com/users/${username}`);
        let userRepos = fetch(`https://api.github.com/users/${username}/repos`);

        Promise.all([userData, userRepos])
            .then((values) => Promise.all(values.map((val) => val.json())))
            .then((finalValues) => {
                setUser(finalValues[0]);
                setRepos(finalValues[1]);
                setLoading(false);
            })
            .catch((err) => {
                setErrorMessage(err);
                setLoading(false);
                console.log(err, error, loading);
                throw new Error(err);
            });
    };

    // Loads components containing user's github information
    const displayUserInfo = () => {
        if (loading) {
            return <div>Look Up a User</div>;
        } else {
            return (
                <div>
                    <UserCard user={user} />
                    <Stats username={user.login} />
                    <UserRepos repos={repos} />
                </div>
            );
        }
    };

    return (
        <div className="App">
            <Header />
            <SearchBar searchUser={searchUser} />
            {displayUserInfo()}
        </div>
    );
}

export default App;
