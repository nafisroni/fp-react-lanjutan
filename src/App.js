import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Routes/Home';
import AddStudent from './Routes/AddStudent';
import Student from './Routes/Student';
import EditStudent from './Routes/EditStudent';
import NotFound from './Routes/NotFound';
import './components/style.css'

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add" element={<AddStudent />} />
            <Route path="/student" element={<Student />} />
            <Route path="/student/:id" element={<EditStudent />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};

export default App;
