import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { useSingleUser } from '../hooks/useApi.js'

const UserProfile = (props) => {
    const { signedInUser } = props;
    const { username } = useParams();
    const { singleUser, isLoading } = useSingleUser(username);

    // if (isLoading) return <h2 className="MainContent-content">Loading...</h2>
    return (
        <div className="MainContent-content">
            <li className="userAccount-card">
                <div className="userAccount-card__profileBox">
                    <h1>{username.endsWith('s') ?
                        `${username}'` : `${username}'s`} profile
                    </h1>
                    {signedInUser.username === username &&
                <Link id='accountLink' to={'/account'}><h4>Go to your account</h4></Link>}
                    <img src={singleUser.avatar_url} alt={username} />
                </div>
                {/* <div id="accountDetails">
                    <p>Name: <span id="userInfo">{signedInUser.name}</span></p>
                    <p>Username: <span id="userInfo">{signedInUser.username}</span></p>
                </div> */}
                {/* <div id="signOutButton"><button>Sign Out</button></div> */}
            </li>
            

        </div>
    );
};

export default UserProfile;