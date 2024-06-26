'use client'
import Form from "./components/form";
import StudentList from '../components/StudentList';
import React from 'react';
import Navbar from './components/Navbar';
import Form from './components/Form';
import Footer from './components/Footer';

const FormPage = () => {
    return (
        <div>
            <Navbar />
            <div className="container mx-auto mt-10">
                <Form />
            </div>
            <Footer />
        </div>
    );
};

const StudentsPage = () => {
    return (
        <div>
            <Navbar />
            <div className="container mx-auto mt-10">
                <StudentList />
            </div>
            <Footer />
        </div>
    );
};

export default StudentsPage;

const Home = () => {
    return (
        <div>
            <Navbar />
            <div className="container mx-auto mt-10 text-center">
                <h1 className="text-4xl">Welcome to My Application</h1>
                <p className="mt-4 text-lg">Use the navigation to go to the Form or Students page.</p>
            </div>
            <Footer />
        </div>
    );
};

export default Home;
