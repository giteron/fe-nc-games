import { useUsers } from "../hooks/useApi";
import { getUserByUsername } from "../api";
import { useContext } from "react";
import { UserContext } from "../UserContext";
import { Redirect } from "react-router";



const SignIn = () => {
    const { signedInUser, setSignedInUser } = useContext(UserContext);
    const { usersList, isLoading } = useUsers();
    
    
    const handleSignIn = (user) => {
        getUserByUsername(user.username)
        .then((data) => {
            setSignedInUser(data)
        });
    };

    const handleRedirect = () => {
        if (signedInUser.username !== '') {
            return <Redirect to={`/`} />
        }
    };

    return (
        <div className="MainContent-content">
            {handleRedirect()}
            {isLoading ? <h2 id="reviewsTitle">Loading...</h2> : <h2 id="reviewsTitle">Who do you want to be today?</h2>}
            <div>
                <ul>
                    {usersList.map(user => {
                        return (
                            <li className="loginLi">
                                <button key={user.username} className="loginButton" onClick={() => handleSignIn(user)}>Log in as {user.username}</button>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};

export default SignIn;