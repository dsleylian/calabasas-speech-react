import React, { useState, useEffect } from 'react';
import { Nav, Navbar, NavbarToggler, Collapse, NavItem, Jumbotron } from 'reactstrap';
import { Modal, Button } from 'react-bootstrap';
import logo from '../images/logo.svg'
import { NavLink } from 'react-router-dom';
import ConsultForm from './FreeConsultModal/ConsultForm';


function Header() {
    const [ isNavOpen, setNavOpen ] = useState(false);
    const [ isSticky, setSticky ] = useState(0);
    const [ isModalOpen, setModalOpen ] = useState(false);

    const closeModal = () => setModalOpen(false);
    const openModal = () => setModalOpen(true);

    function toggleNav() {
        setNavOpen(!isNavOpen);
    }

    const handleSticky = () => {
        const position = window.pageYOffset;
        setSticky(position);
    }

    useEffect( () => {
        window.addEventListener('scroll', handleSticky);
        return () => {
            window.removeEventListener('scroll', handleSticky);
        };
    }, []);

    if (isSticky > 160) {
        let displayedNavLogo = document.getElementsByClassName('navLogo')[0];
        displayedNavLogo.classList.add('showLogo')
    }
    if (isSticky < 160) {
        let displayedNavLogo = document.getElementsByClassName('navLogo')[0];
        if (displayedNavLogo){
            displayedNavLogo.classList.remove('showLogo')
        }
    }

    return(
        <React.Fragment>
            
            <Jumbotron fluid id="jumbotron">
                
                <div className="container jumbocotainer" >
                <div className="row">
                    <div id="landing-link"> 
                        <a href="https://cs-info.vercel.app/">Back to Landing Page</a>
                    </div>
                </div>
                    <div className="row align-items-center ">
                        <div className="col col-lg-3">
                            <a href="/"><img id="logo" src={logo} alt="Calabasas Speech logo" width="300"/></a>
                        </div>
                        <div className="col d-none d-lg-block text-center" >
                            <h2 id="page-title">Speech and Language Services</h2>
                        </div>
                        <div className="col col-lg-3 text-end text-lg-center App">
                            <Button className="btn btn-lg freeconsult" onClick={openModal} id="freeconsultbtn">Free Consultation
                            </Button>
                        </div>
                    </div>
                </div>
            </Jumbotron>

            <Navbar dark sticky="top" expand="md" >
                <div className="container">
                    <NavbarToggler onClick={toggleNav} />
                    <Collapse isOpen={isNavOpen} navbar >
                        <Nav navbar className="mx-auto">
                            <NavItem className="navLogo">
                                <a href="/"><img className="nav-logo" src={logo} alt="Calabasas Speech logo" height="40"/></a>
                                
                            </NavItem>
                            <NavItem> 
                                <NavLink exact activeClassName="active" className="navLink" to="/"><i className="fa fa-home" /> Home</NavLink>
                            </NavItem>
                            <NavItem> 
                                <NavLink activeClassName="active" className="navLink" to="/aboutus"><i className="fa fa-info" /> About Us</NavLink>
                            </NavItem>
                            <NavItem> 
                                <NavLink activeClassName="active" className="navLink" to="/freeresources"><i className="fa fa-file-o" /> Free Resources</NavLink>
                            </NavItem>
                            <NavItem> 
                                <NavLink activeClassName="active" className="navLink" to="/contactus"><i className="fa fa-address-card-o" /> Contact Us</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </div>
            </Navbar>

            <Modal size="lg" show={isModalOpen} onHide={closeModal }>
                <Modal.Header closeButton={true}>
                    <Modal.Title>Schedule a Free Phone Consultation</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ConsultForm />
                </Modal.Body>
            </Modal>

        </React.Fragment>
    );
}

export default Header;

// Same Header component done as a class : 

// class Header extends Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//             isNavOpen: false,
//             isModalOpen: false,
//             isNavSticky: false
//         }
//     }

//     toggleNav = () => {
//         this.setState({
//             isNavOpen: !this.state.isNavOpen
//         });
//     }

//     toggleModal = () => {
//         this.setState({
//             isModalOpen: !this.state.isModalOpen
//         });
//     }

//     render(){
//         return (
//             <React.Fragment>
//                 <Jumbotron fluid id="jumbotron">
//                     <div className="container jumbocotainer" >
//                         <div className="row align-items-center ">
//                             <div className="col col-lg-4">
//                                 <a href="/"><img id="logo" src={logo} alt="Calabasas Speech logo" width="300"/></a>
//                             </div>
//                             <div className="col d-none d-lg-block text-center" >
//                                 <h2 id="page-title">Speech and Language Services</h2>
//                             </div>
//                             <div className="col col-lg-3 text-right">
//                                 <Button className="btn btn-lg freeconsult" onClick={this.toggleModal} id="freeconsultbtn">Free Consultation
//                                 </Button>
//                             </div>
//                         </div>
//                     </div>
//                 </Jumbotron>

//                 <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal} size="lg">
//                     <ModalHeader toggle={this.toggleModal}>Schedule a Free Phone Consultation</ModalHeader>
//                     <ModalBody>
//                         <ConsultForm />
//                     </ModalBody>
//                 </Modal>
                
                // <Navbar dark sticky="top" expand="md" >
                //     <div className="container">
                //         <NavbarToggler onClick={this.toggleNav} />
                //         <Collapse isOpen={this.state.isNavOpen} navbar >
                //             <Nav navbar className="mx-auto">
                //                 <NavItem className="">
                //                     <a href="/"><img className="nav-logo" src={logo} alt="Calabasas Speech logo" height="40"/></a>
                //                 </NavItem>
                //                 <NavItem> 
                //                     <NavLink exact activeClassName="active" className="navLink" to="/"><i className="fa fa-home" /> Home</NavLink>
                //                 </NavItem>
                //                 <NavItem> 
                //                     <NavLink activeClassName="active" className="navLink" to="/aboutus"><i className="fa fa-info" /> About Us</NavLink>
                //                 </NavItem>
                //                 <NavItem> 
                //                     <NavLink activeClassName="active" className="navLink" to="/freeresources"><i className="fa fa-file-o" /> Free Resources</NavLink>
                //                 </NavItem>
                //                 <NavItem> 
                //                     <NavLink activeClassName="active" className="navLink" to="/contactus"><i className="fa fa-address-card-o" /> Contact Us</NavLink>
                //                 </NavItem>
                //             </Nav>
                //         </Collapse>
                //     </div>
                // </Navbar>
//             </React.Fragment>
//         );
//     }
// }

