import React, { Fragment, useEffect, useContext } from 'react'
import Repos from '../repos/Repos';
import Spinner from '../layout/Spinner'
import { Link } from 'react-router-dom';
import GithubContext from '../../context/github/githubContext'

const User = ({ match }) => {
    const githubContext = useContext(GithubContext);

    useEffect(() => { //inplace of componentDidMount()
        getUser(match.params.login);
        getUserRepos(match.params.login);
        //eslint-disable-next-line
    }, []);

    const { getUser, loading, user, repos, getUserRepos } = githubContext;

    const {
        name, avatar_url, company, location, bio, blog, login, html_url, followers,
        following, public_repos, public_gists, hireable
    } = user;

    if (loading) {
        <Spinner />
    }

    return (
        <Fragment>
            <Link to='/' className="btn btn-light" > Back to Search </Link>
                Hireable : {' '}
            {hireable ? <i className="fas fa-check text-success"></i> : <i className="fas fa-times-circle text-danger"></i>}
            <div className="card grid-2" >
                <div className="all-center">
                    <img src={avatar_url} alt="user-img" className="round-img" style={{ width: '200px' }} />
                    <h1>{name}</h1>
                    {location && <Fragment>
                        <p>Location : {location}</p>
                    </Fragment>}
                </div>
                <div>
                    {bio && <Fragment>
                        <h2>Bio</h2>
                        <p>{bio}</p>
                    </Fragment>}
                    <a href={html_url} className="btn btn-dark my-1">
                        Visit Github Profile
                        </a>
                    <ul>
                        <li>
                            {login && <Fragment>
                                <strong>Username : {login}</strong>
                            </Fragment>}
                        </li>
                        <li>
                            {company && <Fragment>
                                <strong>Company : {company}</strong>
                            </Fragment>}
                        </li>
                        <li>
                            {blog && <Fragment>
                                <strong>Website : <a href={blog}>{blog}</a> </strong>
                            </Fragment>}
                        </li>
                    </ul>
                </div>
            </div>
            <div className="text-center card">
                <div className="badge badge-primary">Followers: {followers}</div>
                <div className="badge badge-success">Following: {following}</div>
                <div className="badge badge-light">Public repos: {public_repos}</div>
                <div className="badge badge-dark">Public Gists: {public_gists}</div>
            </div>
            <Repos repos={repos} />
        </Fragment>
    )
}


export default User;
