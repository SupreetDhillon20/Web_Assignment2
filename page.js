'use client'
import Form from "./components/form";
import StudentList from '../components/StudentList';
import React from 'react';
import Navbar from './components/Navbar';
import Form from './components/Form';
import Footer from './components/Footer';

const Page = () => {
    return (
        <div>
            <Navbar />
            <div className="container mx-auto">
                <Form />
            </div>
            <Footer />
        </div>
    );
};

export default Page;
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center mx-10">
      <StudentList />
      <Form/>
    </main>
  );
}
