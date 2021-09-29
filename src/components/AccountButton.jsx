import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../UserContext";

const AccountButton = () => {
    const { signedInUser } = useContext(UserContext);

    return (
        <div className="AccountButton-container">
            <section className="userDetails">
                {/* blank profile image <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="the user" /> */}
                <Link to="/account">
                    <img src={signedInUser.avatar_url} alt={signedInUser.username} />
                    <p id="accountLink">{signedInUser.username ? signedInUser.username : 'Sign In'}</p>
                </Link>
           </section>
        </div>
    );
};

export default AccountButton;