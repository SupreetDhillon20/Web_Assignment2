"use client"
import React, { useEffect, useState } from 'react';

const StudentList = () => {
  const [students, setStudents] = useState([]);

  // Fetch students data from API
  useEffect(() => {
    fetch('http://localhost:5000/users')
      .then((response) => response.json())
      .then((data) => setStudents(data))
      .catch((error) => console.error('Error fetching students:', error));
  }, []);

  return (
    <div className="container mx-auto mt-10 px-4">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Student List</h2>
      <ul className="divide-y divide-gray-200">
        {students.map((student) => (
          <li key={student.id} className="py-4 flex items-start">
            <div className="flex w-10 h-10 bg-gray-300 rounded-full items-center justify-center">
              <span className="text-gray-700 text-lg font-bold">{student.stuName.charAt(0)}</span>
            </div>
            <div className="ml-4">
              <div className="text-lg font-semibold text-gray-900 mb-1">{student.stuName}</div>
              <div className="text-sm text-gray-600">ID: {student.stuId}</div>
              <div className="text-sm text-gray-600">Email: {student.email}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentList;
