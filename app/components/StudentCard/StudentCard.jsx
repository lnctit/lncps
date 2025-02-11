// components/StudentCard.js
import React from "react";

const StudentCard = ({ student }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white border border-gray-200">
      <img
        className="w-full h-48 object-cover"
        src={student.image}
        alt={`${student.name}'s photo`}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{student.name}</div>
        <p className="text-gray-700 text-base">
          Roll Number: {student.rollNumber}
        </p>
        <p className="text-gray-700 text-base">Class: {student.classSection}</p>
        <p className="text-gray-700 text-base">Gender: {student.gender}</p>
        <p className="text-gray-700 text-base">Age: {student.age}</p>
        <p className="text-gray-700 text-base">Phone: {student.phoneNumber}</p>
        <p className="text-gray-700 text-base">Email: {student.email}</p>
        <p className="text-gray-700 text-base">Address: {student.address}</p>
      </div>
      <div className="px-6 pt-4 pb-2 flex justify-between">
        <button className="bg-blue-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Update
        </button>
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
          Delete
        </button>
      </div>
    </div>
  );
};

export default StudentCard;
