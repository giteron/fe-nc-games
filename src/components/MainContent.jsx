import { Route, Switch } from 'react-router-dom';
import Users from './Users.jsx';
import Reviews from './Reviews.jsx';
import Categories from './Categories.jsx';
import SingleReview from './SingleReview.jsx';
import CreateReview from './CreateReview.jsx';
import UserAccount from './UserAccount.jsx';
import UserProfile from './UserProfile.jsx';

const MainContent = (props) => {
    const { signedInUser } = props;

    return (
        <div className="MainContent-container">
            {/* <p className="MainContent-content">MainContent</p> */}
            <Switch>
                <Route exact path="/">
                    <p className="sidebar">This is the home page</p>
                </Route>
                <Route exact path="/create">
                    <CreateReview signedInUser={signedInUser}/>
                    <p className="sidebar">Write a new review here</p>
                </Route>
                <Route exact path="/reviews/:review_id">
                    <SingleReview signedInUser={signedInUser}/>
                    <p className="sidebar">This will display a single review</p>
                </Route>
                <Route exact path="/reviews">
                    <Reviews />
                    <p className="sidebar">This will show a list of reviews</p>
                </Route>
                <Route exact path="/categories">
                    <Categories />
                    <p className="sidebar">This will show all categories</p>
                </Route>
                <Route exact path="/users">
                    <Users />
                    <p className="sidebar">This will display all users</p>
                </Route>
                <Route exact path="/users/:username">
                    <UserProfile signedInUser={signedInUser} />
                    <p className="sidebar">This will display a single user</p>
                </Route>
                <Route exact path="/account">
                    <UserAccount signedInUser={signedInUser}/>
                    <p className="sidebar">This will display the user's account page</p>
                </Route>
                <Route exact path="/categories/:category">
                    <Reviews />
                    <p className="sidebar">This will show all categories</p>
                </Route>               
            </Switch>
        </div>
    );
};

export default MainContent;