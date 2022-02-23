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
                        <a className="btn btn-social-icon btn-instagram mx-sm-1 mx-2" href="https://www.instagram.com/darya.puzzledorffer/" target="_blank" rel="noreferrer"><i className="fa fa-instagram" /></a>
                        <a className="btn btn-social-icon btn-linkedin mx-sm-1 mx-2" href="https://www.linkedin.com/in/darya-leylian-a1a62057/" target="_blank" rel="noreferrer"><i className="fa fa-linkedin" /></a>
                        <a className="btn btn-social-icon btn-youtube mx-sm-1 mx-2" href="https://www.youtube.com/channel/UCOJVqoHkVjwRxJqYImzi_dA" target="_blank" rel="noreferrer"><i className="fa fa-youtube" /></a>
                    </div>
                    <div className="row">
                    <div id="landing-link-footer"> 
                        <a href="https://cs-info.vercel.app/">Back to Landing Page</a>
                    </div>
                </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;