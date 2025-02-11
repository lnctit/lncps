// pages/index.js
"use client"
import { useState } from "react";
import StudentCard from "../components/StudentCard/StudentCard";

export default function Home() {
  const [students, setStudents] = useState([
    {
      image: "https://via.placeholder.com/150",
      name: "John Doe",
      rollNumber: "001",
      classSection: "10th A",
      gender: "Male",
      age: 16,
      phoneNumber: "123-456-7890",
      email: "john.doe@example.com",
      address: "123 Main St, Springfield, USA",
    },
    {
      image: "https://via.placeholder.com/150",
      name: "Jane Smith",
      rollNumber: "002",
      classSection: "9th B",
      gender: "Female",
      age: 15,
      phoneNumber: "987-654-3210",
      email: "jane.smith@example.com",
      address: "456 Elm St, Springfield, USA",
    },
    {
        image: "https://via.placeholder.com/150",
        name: "Jane Smith",
        rollNumber: "002",
        classSection: "9th B",
        gender: "Female",
        age: 15,
        phoneNumber: "987-654-3210",
        email: "jane.smith@example.com",
        address: "456 Elm St, Springfield, USA",
      },
  ]);

  return (
    <div className="container mx-auto p-4">
        

      <h1 className="text-2xl font-bold mb-4">Student Details Section A </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {students.map((student, index) => (
          <StudentCard key={index} student={student} />
        ))}
      </div>
    </div>
  );
}
