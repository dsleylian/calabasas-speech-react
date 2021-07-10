import React from 'react';
import { Link } from 'react-router-dom';


function Footer(props){
    return (
        <footer className="site-footer">
            <div className="container">
                <div className="row">             
                    <div className="col col-md-3 offset-1">
                        <h5>Links</h5>
                        <ul className="list-unstyled">
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/aboutus'>About Us</Link></li>
                            <li><Link to='/contactus'>Contact</Link></li>
                            <li><Link to='/freeresources'>Free Resources</Link></li>
                            <li><Link to='/blog'>Blog</Link></li>
                        </ul>
                    </div>
                    <div className="col-6 col-sm-3 text-center">
                        <h5>Let's Connect</h5>
                        <a className="btn btn-social-icon btn-instagram" href="http://instagram.com/"><i className="fa fa-instagram" /></a>{' '}
                        <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/"><i className="fa fa-facebook" /></a>{' '}
                        <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter" /></a>{' '}
                    </div>
                    <div className="col-sm-4 text-center">
                        <a role="button" className="btn btn-link" href="tel:+18181231234"><i className="fa fa-phone" />+1-818-123-1234</a><br />
                        <a role="button" target="_blank" className="btn btn-link" href="https://www.google.com/maps/"><i className="fa fa-envelope-o" /> 123 Ficitonal Road,  Calabasas, CA, 91302 </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;