import React from 'react';
import { Link } from 'react-router-dom';


function Footer(props){
    return (
        <footer className="site-footer">
            <div className="container">
                <div className="row">             
                    <div className="col-md-3 offset-md-1 text-center text-md-left">
                        
                        <ul className="list-unstyled">
                            <li ><Link className="footer-link" to='/'>Home</Link></li>
                            <li ><Link className="footer-link" to='/aboutus'>About Us</Link></li>
                            <li><Link className="footer-link" to='/contactus'>Contact</Link></li>
                            <li><Link className="footer-link" to='/freeresources'>Free Resources</Link></li>
                            <li><Link className="footer-link" to='/blog'>Blog</Link></li>
                        </ul>
                    </div>
                    <div className="col-md-4 text-center footer-links">
                        <a role="button" className="btn btn-link footer-link" href="tel:+18181231234"><i className="fa fa-phone" />+1-818-123-1234</a><br />
                        <a role="button" target="_blank" rel="noreferrer" className="btn btn-link footer-link" href="https://www.google.com/maps/"><i className="fa fa-map-marker" /> 123 Ficitonal Road,  Calabasas, CA, 91302 </a>
                    </div>
                    <div className=" col-md-3 text-center my-auto">
                        <a className="btn btn-social-icon btn-instagram mx-2" href="http://instagram.com/"><i className="fa fa-instagram" /></a>
                        <a className="btn btn-social-icon btn-facebook mx-2" href="http://www.facebook.com/"><i className="fa fa-facebook" /></a>
                        <a className="btn btn-social-icon btn-twitter mx-2" href="http://twitter.com/"><i className="fa fa-twitter" /></a>
                    </div>

                </div>
            </div>
        </footer>
    )
}

export default Footer;