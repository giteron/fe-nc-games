import { Link } from 'react-router-dom';
import { useUsers } from '../hooks/useApi.js';

const Users = () => {
    const { usersList, isLoading } = useUsers();

    if (isLoading) return <h2 className="MainContent-content">Loading...</h2>
    return (
        <div className="MainContent-content">
            <ul>
                {usersList.map(user => {
                    return (
                        <Link to={`/users/${user.username}`} key={user.username} >
                            <li>
                                <h2>{user.username}</h2>
                            </li>
                        </Link>
                    );
                })}
            </ul>
        </div>
    );
};


// const [ fullerUserList, setFullerUserList ] = useState([]);

// useEffect(() => {
//     fetch('https://be-ncgames-server.herokuapp.com/api/users')
//         .then(response => response.json())
//         .then((data) => {
//             //  console.log(data.users)
//             setUsersList(data.users)
//             const newUsers = usersList.map(user => {
//                 fetch(`https://be-ncgames-server.herokuapp.com/api/users/${user.username}`)
//                  .then(response => response.json())
//                  .then((data) => {
//                      console.log(data.user, '000000')
//                       return data.user;
//             })

//         });
//         console.log(newUsers, '<---- newUsers') 
//         setFullerUserList(newUsers)
//         console.log(fullerUserList, '<----- fullerUserList')
//     })
// }, [setUsersList]);

// return (
//     <div className="MainContent-content">
//         <ul>
//             {usersList.map(user => {
//                 // console.log(user.username)
//                  fetch(`https://be-ncgames-server.herokuapp.com/api/users/${user.username}`)
//                  .then(response => response.json())
//                  .then((data) => {
//                       console.log(data.user)
//                       return (
//                           <Link to={`/user/${data.user.username}`} >
//                           <li key={data.user.username}>
//                               <h2>{data.user.username}</h2>
//                               <p>{data.user.name}</p>
//                           </li>
//                           </Link>
//                       );
//                  });
//             })}
//         </ul>
//     </div>
// );


export default Users;