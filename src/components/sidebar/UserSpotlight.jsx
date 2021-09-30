import { useUsers } from "../../hooks/useApi";

const UserSpotlight = () => {
    const { usersList, isLoading } = useUsers();
    const randomUserIndex = Math.floor(Math.random() * usersList.length);
    const userSpotlight = usersList[randomUserIndex];

    // console.log(review_id, '------- this is the review ID')
    
    if (isLoading) return <h4 className="MainContent-content">Loading...</h4>
    return (
        <div>
            <li className="userSpotlight-card">
                <h3>User Spotlight</h3>
                <br></br>
                <div id="userSpotlight-img">
                <img src={userSpotlight.avatar_url} alt={userSpotlight.username} />
                </div>
                <div id="spotlightDetails">
                    <p>Name: <span id="userInfo">{userSpotlight.name}</span></p>
                    <p>Username: <span id="userInfo">{userSpotlight.username}</span></p>
                </div>
            </li>
        </div>
    );
};

export default UserSpotlight;