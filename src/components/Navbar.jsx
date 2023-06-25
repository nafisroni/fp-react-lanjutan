// NavBar.jsx
import React from "react";
import { Button, Link } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="navbar bg-body-tertiary">
            <div className="container-fluid" data-testid="home-page">
                <Link as={NavLink} to="/" data-testid="student-btn">
                    <h1 className="text-dark ms-5">Student Portal</h1>
                </Link>
                <div className="d-flex grid gap-0 column-gap-3 me-5">
                    <Link as={NavLink} to="/student" data-testid="student-page">
                        <Button colorScheme="blue">All Student</Button>
                    </Link>
                    <Link as={NavLink} to="/add" data-testid="add-page">
                        <Button colorScheme="blue">Add Student</Button>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
