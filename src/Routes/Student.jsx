import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { Select, Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import Footer from '../components/Footer';

const Student = () => {
    const [students, setStudents] = useState([]);
    const [filteredStudents, setFilteredStudents] = useState([]);
    const [filter, setFilter] = useState('All');

    useEffect(() => {
        fetchStudents();
    }, []);

    const fetchStudents = async () => {
        try {
            const response = await fetch('http://localhost:3001/student');
            const data = await response.json();
            setStudents(data);
            setFilteredStudents(data);
        } catch (error) {
            console.log('Error fetching students:', error);
        }
    };

    const handleFilterChange = (event) => {
        const selectedFilter = event.target.value;
        setFilter(selectedFilter);

        if (selectedFilter === 'All') {
            setFilteredStudents(students);
        } else {
            const filtered = students.filter((student) => student.faculty === selectedFilter);
            setFilteredStudents(filtered);
        }
    };

    const handleDelete = async (id) => {
        try {
            await fetch(`http://localhost:3001/student/${id}`, { method: 'DELETE' });
            const updatedStudents = students.filter((student) => student.id !== id);
            setStudents(updatedStudents);
            setFilteredStudents(updatedStudents);
        } catch (error) {
            console.log('Error deleting student:', error);
        }
    };

    return (
        <>
            <Navbar />
            <div className="container">
                <h2>Student List</h2>
                {students.length === 0 ? (
                    <p>Loading ...</p>
                ) : (
                    <div>
                        <Select
                            id="select-filter"
                            data-testid="filter"
                            value={filter}
                            onChange={handleFilterChange}
                            mb={4}
                            maxWidth="200px"
                        >
                            <option value="All">All</option>
                            <option value="Fakultas Ekonomi">Fakultas Ekonomi</option>
                            <option value="Fakultas Ilmu Sosial dan Politik">Fakultas Ilmu Sosial dan Politik</option>
                            <option value="Fakultas Teknik">Fakultas Teknik</option>
                            <option value="Fakultas Teknologi Informasi dan Sains">Fakultas Teknologi Informasi dan Sains</option>
                        </Select>
                        <Table id="table-student" variant="striped" className='test-table-container'>
                            <Thead className='test-table'>
                                <Tr>
                                    <Th>No</Th>
                                    <Th>Full Name</Th>
                                    <Th>Faculty</Th>
                                    <Th>Program Study</Th>
                                    <Th>Option</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                {filteredStudents.map((student, index) => (
                                    <Tr key={student.id} className="student-data-row">
                                        <Td>{index + 1}</Td>
                                        <Td>
                                            <Link to={`/student/${student.id}`}>{student.fullname}</Link>
                                        </Td>
                                        <Td>{student.faculty}</Td>
                                        <Td>{student.programStudy}</Td>
                                        <Td>
                                            <button
                                                className="delete-btn"
                                                onClick={() => handleDelete(student.id)}
                                                data-testid={`delete-${student.id}`}
                                            >
                                                Delete
                                            </button>
                                        </Td>
                                    </Tr>
                                ))}
                            </Tbody>
                        </Table>
                    </div>
                )}
            </div>
            <Footer />
        </>
    );
};

export default Student;
