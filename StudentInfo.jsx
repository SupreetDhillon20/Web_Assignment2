"use client"
import React, { useState, useEffect } from 'react';

const StudentInfo = () => {
  const [studentInfo, setStudentInfo] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/users')
      .then((response) => response.json())
      .then((data) => setStudentInfo(data))
      .catch((error) => console.error('Error fetching students information:', error));
  }, []);

  return (
    <div className="container mx-auto mt-10">
      <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">Student List</h2>
      <div className="grid grid-cols-2 gap-4">
        {studentInfo.map((student) => (
          <div key={student.id} className="bg-white rounded-lg shadow-md p-4 hover:bg-gray-100">
            <div className="font-semibold mb-2">{student.stuName}</div>
            <div className="text-sm text-gray-600">DOB: {student.dob}</div>
            <div className="text-sm text-gray-600">Grade: {student.grade}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentInfo;

