/*
 * @Description: 
 * @version: 
 * @Author: sdu-gyf
 * @Date: 2021-01-22 15:49:15
 * @LastEditors: sdu-gyf
 * @LastEditTime: 2021-01-22 16:17:33
 */
import React from 'react';
import { HashRouter as Router,  NavLink } from 'react-router-dom';
import './index.css'
export default class Nav extends React.Component {
    render() {
        return (
            <Router>
                <ul>
                    <li>
                        <NavLink to="/login">login</NavLink>
                    </li>
                </ul>
            </Router>
        )        
    }
}