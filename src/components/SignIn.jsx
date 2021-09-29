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
        <div className="MainContent-container">
            {handleRedirect()}
            {isLoading && <h2 className="MainContent-content">Loading...</h2>}
            <div className="MainContent-content">
                <ul>
                    {usersList.map(user => {
                        return (
                            <li key={user.username}>
                                <button onClick={() => handleSignIn(user)}>{user.username}</button>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};

export default SignIn;