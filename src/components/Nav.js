import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

class Nav extends Component {
    render() {
        return (
                <nav className="navbar navbar-expand-lg navbar-light bg-white-custom fixed-top border-bottom border-light">
                    {/*<div className="collapse navbar-collapse" id="navbarNav">*/}
                        <ul className="navbar-nav w-100 text-uppercase letter-spacing-2">
                            <li className="nav-item col">
                                <NavLink exact={true} activeClassName='active' className="nav-link" to='/'>main</NavLink>
                            </li>
                            <li className="nav-item col">
                                <NavLink activeClassName='active' className="nav-link" to='/addevent'>add event</NavLink>
                            </li>
                            <li className="nav-item col">
                                <NavLink activeClassName='active' className="nav-link" to='/history'>hist</NavLink>
                            </li>
                            <li className="nav-item col">
                                <NavLink activeClassName='active' className="nav-link disabled" to='/login'>login</NavLink>
                            </li>
                        </ul>
                    {/*</div>*/}
                </nav>
        );
    }
}

export default Nav;
