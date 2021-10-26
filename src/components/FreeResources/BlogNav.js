import React, { Component } from 'react';
import { Nav, Navbar, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';

export default class BlogNav extends Component {
    render() {
        return (
            <div>
                <Navbar light id="blogNav" expand="lg" >
                    <div className="container">
                            <Nav navbar className="mx-auto">
                                <NavItem> 
                                    <NavLink exact activeClassName="active" className="navLinkBlog" to="/blog/0">Screen Time |</NavLink>
                                </NavItem>
                                <NavItem> 
                                    <NavLink activeClassName="active" className="navLinkBlog" to="/blog/1"> Language for Daily Routines |</NavLink>
                                </NavItem>
                                <NavItem> 
                                    <NavLink activeClassName="active" className="navLinkBlog" to="/blog/2">Language during Play |</NavLink>
                                </NavItem>
                                <NavItem> 
                                    <NavLink activeClassName="active" className="navLinkBlog" to="/blog/3">Reading and Literacy </NavLink>
                                </NavItem>
                            </Nav>
                    </div>
                </Navbar>
            </div>
        )
    }
}
