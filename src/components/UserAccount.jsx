import { Link } from "react-router-dom";
import Expandable from "./Expandable";
import ManageReviews from "./ManageReviews";

const UserAccount = (props) => {
    const { signedInUser } = props;
    const firstName = signedInUser.name.split(' ')[0];

    return (
        <div className="MainContent-content">
            <li className="userAccount-card">
                <div className="userAccount-card__profileBox">
                    <h1>{firstName.endsWith('s') ? 
                        `${firstName}'` : `${firstName}'s`} account
                    </h1>
                    <img src={signedInUser.avatar_url} alt={signedInUser.username}/>
                </div>
                <div id="accountDetails">
                    <p>Name: <span id="userInfo">{signedInUser.name}</span></p>
                    <p>Username: <span id="userInfo">{signedInUser.username}</span></p>
                </div>
                <div id="signOutButton"><button>Sign Out</button></div>
            </li>
            <li className="userAccount-quickLinks">
                <h3>Quick Links</h3>
                <div id="quickLinks">
                    <p>Change Username</p>
                    <p>Change Picture</p>
                    <Link to="/create"><p>New Review</p></Link>
                    <a href="https://be-ncgames-server.herokuapp.com/api" target="_blank" rel="noreferrer"><p>API <span id="forDevs">(for devs)</span></p></a>
                </div>
            </li>
            <li className="userAccount-manageContent">
                <h3>{'Manage Content'}</h3>
                <Expandable>
                    <ManageReviews signedInUser={signedInUser} username={signedInUser.username}/>
                </Expandable>
            </li>
        </div>
    );
};

export default UserAccount;