import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Nav extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li><Link to='/'>main</Link></li>
                    <li><Link to='/addevent'>add event</Link></li>
                    <li><Link to='/history'>hist</Link></li>
                    <li><Link to='/login'>login</Link></li>
                </ul>
            </div>
        );
    }
}

export default Nav;
