import React, { useContext } from 'react'
import UserItem from './UserItem'
import Spinner from '../layout/Spinner'
import Mismatch from '../pages/Mismatch'
import GithubContext from '../../context/github/githubContext';


const Users = () => {
    const githubContext = useContext(GithubContext);

    const { users, loading } = githubContext;

    if (loading) {
        return <Spinner />;
    }
    return (
        <div style={userStyle}>
            {users.map(user => (
                <UserItem key={user.id} user={user} />
            ))}
        </div>
    )
}


const userStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gridGap: '15px'
}


export default Users;
