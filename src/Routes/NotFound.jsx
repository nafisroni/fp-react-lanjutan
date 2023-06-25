import React from "react";
import { Button } from "@chakra-ui/react";
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate = useNavigate();

    return (
        <>
            <h1>Page Not Found</h1>
            <Button colorScheme="blue" onClick={() => navigate("/")}>
                Go to Home
            </Button>
        </>
    );
};

export default NotFound;
