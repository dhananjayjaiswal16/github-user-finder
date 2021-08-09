import React, { useState, useContext } from 'react'
import GithubContext from '../../context/github/githubContext'
import AlertContext from '../../context/alert/alertContext';

const Search = () => {

    const githubContext = useContext(GithubContext);
    const alertContext = useContext(AlertContext);

    const [text, setText] = useState(''); //defining state using useState hook


    const onChange = (e) => {
        setText(e.target.value);
    }

    const onSubmit = e => {
        e.preventDefault();
        if (text === '') {
            alertContext.setAlert('Please enter a value to be searched', 'dark');
        } else {
            githubContext.searchUsers(text);
            setText('');
        }
    }

    if (githubContext.users[0] === 0) {
        return (
            <div>

                <button className="btn btn-dark" onClick={githubContext.clearUsers}>Go back to Search Page</button>

            </div>
        )
    }
    return (
        <div>
            <form className="form" onSubmit={onSubmit}>
                <input type="text" name="text" placeholder="Search Users..." value={text} onChange={onChange} />
                <input type="submit" value="Search" className="btn btn-dark btn-block" />
            </form>
            {githubContext.users.length > 0 &&
                <button className="btn btn-light btn-block" onClick={githubContext.clearUsers}>Clear</button>}

        </div>
    )

}


export default Search;
