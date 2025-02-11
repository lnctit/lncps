// pages/index.js
'use client'
import { useState } from "react";
import StudentTable from "../components/StudentTable/StudentTable";

export default function Home() {
  const [students, setStudents] = useState([
    { img: "/founder.png", name: "sumit", age: 16, class: "10th" },
    { img: "/founder.png", name: "harshal", age: 15, class: "9th" },
    { img: "/founder.png",  name: "rishi", age: 17, class: "11th" },
    { img: "/founder.png",  name: "vedant Kumar", age: 16, class: "10th" },
    { img: "/founder.png",  name: "rishab Mishra", age: 15, class: "9th" },
    { img: "/founder.png",  name: "esha", age: 17, class: "11th" },
  ]);

  const handleUpdate = (student) => {
    console.log("Update student:", student);
    // Implement your update logic here
  };

  const handleDelete = (student) => {
    console.log("Delete student:", student);
    setStudents(students.filter((s) => s !== student));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Student Details</h1>
      <StudentTable students={students} onUpdate={handleUpdate} onDelete={handleDelete} />
    </div>
  );
}
