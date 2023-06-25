import Navbar from "../components/Navbar";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import Footer from '../components/Footer';

const AddStudent = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        fullname: "",
        profilePicture: "",
        address: "",
        phoneNumber: "",
        birthDate: "",
        gender: "",
        programStudy: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { fullname, profilePicture, address, phoneNumber, birthDate, gender, programStudy } = formData;

        let faculty = "";

        switch (programStudy) {
            case "Ekonomi":
            case "Manajemen":
            case "Akuntansi":
                faculty = "Fakultas Ekonomi";
                break;
            case "Administrasi Publik":
            case "Administrasi Bisnis":
            case "Hubungan Internasional":
                faculty = "Fakultas Ilmu Sosial dan Politik";
                break;
            case "Teknik Sipil":
            case "Arsitektur":
                faculty = "Fakultas Teknik";
                break;
            case "Matematika":
            case "Fisika":
            case "Informatika":
                faculty = "Fakultas Teknologi Informasi dan Sains";
                break;
            default:
                break;
        }

        try {
            await fetch("http://localhost:3001/student", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    fullname,
                    profilePicture,
                    address,
                    phoneNumber,
                    birthDate,
                    gender,
                    programStudy,
                    faculty,
                }),
            });
            console.log("Student added successfully");
            navigate("/student");
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
            <Navbar />
            <div className="container">
                <h1 className="text-dark mt-4 mb-4">Add Student</h1>
                <form onSubmit={handleSubmit} className="text-dark">
                    <FormControl>
                        <FormLabel htmlFor="fullname" className="form-label fs-5">Full Name:</FormLabel>
                        <Input
                            type="text"
                            id="fullname"
                            className="form-control form-control-lg"
                            name="fullname"
                            value={formData.fullname}
                            onChange={handleChange}
                            data-testid="name"
                        />
                    </FormControl>
                    <FormControl mt={2}>
                        <FormLabel htmlFor="profilePicture" className="form-label fs-5">Profile Picture:</FormLabel>
                        <Input
                            type="text"
                            id="profilePicture"
                            className="form-control form-control-lg"
                            name="profilePicture"
                            value={formData.profilePicture}
                            onChange={handleChange}
                            data-testid="profilePicture"
                        />
                    </FormControl>
                    <FormControl mt={2}>
                        <FormLabel htmlFor="address" className="form-label fs-5">Address:</FormLabel>
                        <Input
                            type="text"
                            id="address"
                            className="form-control form-control-lg"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            data-testid="address"
                        />
                    </FormControl>
                    <FormControl mt={2}>
                        <FormLabel htmlFor="phoneNumber" className="form-label fs-5">Phone Number:</FormLabel>
                        <Input
                            type="text"
                            id="phoneNumber"
                            className="form-control form-control-lg"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            data-testid="phoneNumber"
                        />
                    </FormControl>
                    <div className="row row-cols-2 mt-3">
                        <FormControl col={6}>
                            <FormLabel htmlFor="birthDate" className="form-label fs-5">Birth Date:</FormLabel>
                            <Input
                                type="date"
                                id="birthDate"
                                className="form-control form-control-lg"
                                name="birthDate"
                                value={formData.birthDate}
                                onChange={handleChange}
                                data-testid="date"
                            />
                        </FormControl>
                        <FormControl col={6}>
                            <FormLabel htmlFor="gender" className="form-label fs-5">Gender:</FormLabel>
                            <select
                                id="gender"
                                className="form-control form-control-lg"
                                name="gender"
                                value={formData.gender}
                                onChange={handleChange}
                                data-testid="gender"
                            >
                                <option value="">Select Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select>
                        </FormControl>
                    </div>
                    <FormControl mt={2}>
                        <FormLabel htmlFor="programStudy" className="form-label fs-5">Program Study:</FormLabel>
                        <select
                            id="programStudy"
                            className="form-control form-control-lg"
                            name="programStudy"
                            value={formData.programStudy}
                            onChange={handleChange}
                            data-testid="prody"
                        >
                            <option value="">Select Program Study</option>
                            <option value="Ekonomi">Ekonomi</option>
                            <option value="Manajemen">Manajemen</option>
                            <option value="Akuntansi">Akuntansi</option>
                            <option value="Administrasi Publik">Administrasi Publik</option>
                            <option value="Administrasi Bisnis">Administrasi Bisnis</option>
                            <option value="Hubungan Internasional">Hubungan Internasional</option>
                            <option value="Teknik Sipil">Teknik Sipil</option>
                            <option value="Arsitektur">Arsitektur</option>
                            <option value="Matematika">Matematika</option>
                            <option value="Fisika">Fisika</option>
                            <option value="Informatika">Informatika</option>
                        </select>
                    </FormControl>
                    <Button
                        type="submit"
                        mt={4}
                        className="btn btn-primary mt-4 fs-5"
                        data-testid="add-btn"
                    >
                        Add Student
                    </Button>
                </form>
            </div>
            <Footer />
        </>
    );
};

export default AddStudent;
