import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const UserItem = ({ user: { login, avatar_url, html_url } }) => {

    //const { login, avatar_url, html_url } = props.user; 

    return (
        <div className="card text-center">
            <img src={avatar_url} className='round-img' style={{ width: "80px" }} alt="" />
            <h2>{login}</h2>
            <div>
                <Link to={`/users/${login}`} className="btn btn-dark my-1 btn-sm">More</Link>
            </div>
        </div>
    )
}

UserItem.propTypes = {
    user: PropTypes.object.isRequired,
}

export default UserItem;
