'use client'
import Form from "./components/form";
import StudentList from '../components/StudentList';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center mx-10">
      <StudentList />
      <Form/>
    </main>
  );
}
