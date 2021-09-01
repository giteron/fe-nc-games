import { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Users from './Users.jsx';
import Reviews from './Reviews.jsx';

const MainContent = () => {

    const [usersList, setUsersList] = useState([]);
    const [reviewsList, setReviewsList] = useState([]);

    return (
        <div className="MainContent-container">
            {/* <p className="MainContent-content">MainContent</p> */}
            <Switch>
                <Route exact path="/">
                    <p className="sidebar">This is the home page</p>
                </Route>
                <Route exact path="/create">
                    <p className="sidebar">Write a new review here</p>
                </Route>
                <Route exact path="/reviews">
                    <Reviews reviewsList={reviewsList} setReviewsList={setReviewsList}/>
                    <p className="sidebar">This will show a list of reviews</p>
                </Route>
                <Route exact path="/categories">
                    <p className="sidebar">This will show all categories</p>
                </Route>
                <Route exact path="/users">
                    <Users usersList={usersList} setUsersList={setUsersList}/>
                    <p className="sidebar">This will display all users</p>
                </Route>
            </Switch>
        </div>
    );
};

export default MainContent;