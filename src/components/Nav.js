import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import {APP_REL_PATH} from "../constants";

class Nav extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light bg-white-custom fixed-top border-bottom border-light">
                    <a className="navbar-brand">GASCOUNT</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav w-100 text-uppercase letter-spacing-2">
                        <li className="nav-item col">
                        <NavLink exact={true} activeClassName='active' className="nav-link" to={APP_REL_PATH + '/'}>main</NavLink>
                        </li>
                        <li className="nav-item col">
                        <NavLink activeClassName='active' className="nav-link" to={APP_REL_PATH + '/addevent'}>add event</NavLink>
                        </li>
                        <li className="nav-item col">
                        <NavLink activeClassName='active' className="nav-link" to={APP_REL_PATH + '/history'}>hist</NavLink>
                        </li>
                        <li className="nav-item col">
                        <NavLink activeClassName='active' className="nav-link disabled" to={APP_REL_PATH + '/login'}>login</NavLink>
                        </li>
                        </ul>
                    </div>
                </nav>
            </div>

        );
    }
}

export default Nav;
