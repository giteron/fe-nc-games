import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../UserContext";

const NavBar = () => {
    const { signedInUser } = useContext(UserContext);
    
    return (
        <div className="NavBar-container">
            {signedInUser.username &&
            <>
            <Link to="/"><button>Home</button></Link>
            <Link to="/create"><button>Create</button></Link>
            <Link to="/reviews"><button>Reviews</button></Link>
            <Link to="/categories"><button>Categories</button></Link>
            <Link to="/users"><button>Users</button></Link>
            </>
            }
        </div>
    );
};

export default NavBar;