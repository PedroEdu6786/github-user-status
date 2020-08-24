import React, { useState } from "react";
import Header from "./components/Header.js";
import SearchBar from "./components/SearchBar.js";
import UserCard from "./components/UserCard.js";
import Stats from "./components/Stats.js";
import UserRepos from "./components/UserRepos.js";

function App() {
    const [user, setUser] = useState({});
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(null);
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
            .then((values) => {
                if (!values[0].ok) {
                    setErrorMessage(values[0].statusText);
                }
                return Promise.all(values.map((val) => val.json()));
            })
            .then((finalValues) => {
                setUser(finalValues[0]);
                setRepos(finalValues[1]);
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    // Loads components containing user's github information
    const displayUserInfo = () => {
        let jsx = <div>Look Up a User</div>;

        if (loading !== null) {
            if (loading) {
                jsx = <div>Loading...</div>;
            } else if (error) {
                jsx = <div>There's been an error</div>;
            } else {
                jsx = (
                    <div>
                        <UserCard user={user} />
                        <Stats username={user.login} />
                        <UserRepos repos={repos} />
                    </div>
                );
            }
        }

        return jsx;
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
