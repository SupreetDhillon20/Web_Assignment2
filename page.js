import React from "react";
import StudentInfo from "./components/StudentInfo";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center mx-10">
      <div className="bg-gray-100 rounded-md">
      <div className="container mx-auto py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to Williamson High School</h1>
          <p className="text-lg text-gray-600">
            At Williamson High School, we are committed to nurturing the next generation of leaders, thinkers, and innovators.
          </p>
        </div>

      </div>
    </div>
      <StudentInfo/>
    </main>
  );
}
