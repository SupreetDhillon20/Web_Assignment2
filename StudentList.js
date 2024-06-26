import React, { useEffect, useState } from 'react';

const StudentList = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/users')
      .then((response) => response.json())
      .then((data) => setStudents(data))
      .catch((error) => console.error('Error fetching students:', error));
  }, []);

  return (
    <div className="container mx-auto mt-10">
      <h2 className="text-2xl mb-6">Student List</h2>
      <ul className="list-disc pl-5">
        {students.map((student) => (
          <li key={student.id} className="mb-2">
            {student.stuName}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentList;
