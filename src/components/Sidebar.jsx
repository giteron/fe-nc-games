import TopReviewer from "./sidebar/TopReviewer";
import UserSpotlight from "./sidebar/UserSpotlight";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <h4 id="reviewsTitle">Some other cool stuff</h4>
            <UserSpotlight />
            {/* <TopReviewer /> */}
        </div>
    );
};

export default Sidebar;