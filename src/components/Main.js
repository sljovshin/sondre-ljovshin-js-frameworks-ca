import React from 'react'
import Home from './home/Home';
import Contact from './contact/Contact';
import Game from './gamedetails/Game';
import Favourites from './favourites/Favourites';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
} from "react-router-dom";



function Main() {
    return (
        <div>
            <Router>
                <Navbar bg="dark" variant="dark" expand="lg">
                    <NavLink to="/" exact>
                        <Navbar.Brand>JavaScript Frameworks CS</Navbar.Brand>
                    </NavLink>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <NavLink to="/" exact className="nav-link">
                                Home
                            </NavLink>
                            <NavLink to="/contact" className="nav-link">
                                Contact
                            </NavLink>
                            <NavLink to="/fav" className="nav-link">
                                Favourites
                            </NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <Container className="appWrapper">
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/contact" component={Contact} />
                        <Route path="/game/:id" component={Game} />
                        <Route path="/fav" component={Favourites} />
                    </Switch>
                </Container>
            </Router>
        </div>
    );
}

export default Main;