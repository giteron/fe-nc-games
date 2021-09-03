import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { useSingleUser } from '../hooks/useApi.js'
import Expandable from './Expandable.jsx';
import ManageReviews from './ManageReviews.jsx';

const UserProfile = (props) => {
    const { signedInUser } = props;
    const { username } = useParams();
    const { singleUser, isLoading } = useSingleUser(username);

    if (isLoading) return <h2 className="MainContent-content">Loading...</h2>
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
            </li>
            <li className="userAccount-manageContent">
                <h3>{username.endsWith('s') ?
                        `${username}'` : `${username}'s`} reviews</h3>
                <Expandable>
                    <ManageReviews signedInUser={signedInUser} username={username}/>
                </Expandable>
            </li>
        </div>
    );
};

export default UserProfile;