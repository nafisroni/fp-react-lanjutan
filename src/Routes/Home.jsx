import React from "react";
import { Link } from 'react-router-dom';
import { Button } from "@chakra-ui/react";
import Footer from '../components/Footer';


const Home = () => {
    return (
        <>
            <div className="d-flex justify-content-center homePage row">
                <div className="d-flex justify-content-center">
                    <div className="">
                        <h1 className="fw-light">Studi Independent Kampus Merdeka</h1>
                        <h5 className="">by RUANGGURU</h5>
                    </div>
                </div>
                <div className="d-flex justify-content-center">
                    <div className="separator">
                        <h3> <strong> Student Portal </strong></h3>
                        <Link to="/student" data-testid="student-btn">
                            <Button colorScheme="blue">All Student</Button>
                        </Link>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Home;
