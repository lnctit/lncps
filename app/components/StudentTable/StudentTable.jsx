// components/StudentTable.js
import Image from "next/image";
import React from "react";

const StudentTable = ({ students, onUpdate, onDelete }) => {
  return (
    <div className="overflow-x-auto">
      <table className=" w-full mx-auto bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Image</th>
            <th className="py-2 px-4 border-b">Name</th>
            <th className="py-2 px-4 border-b">Age</th>
            <th className="py-2 px-4 border-b">Class</th>
            <th className="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={index} className="hover:bg-gray-100  w-full text-center  ">
              <td className="py-2 px-4 flex justify-center items-center  border-b">
                <Image src={student.img} alt="okk" className="rounded-full" width={60} height={50} />
              </td>
              <td className="py-2 px-4 border-b">{student.name}</td>
              <td className="py-2 px-4 border-b">{student.age}</td>
              <td className="py-2 px-4 border-b  ">{student.class}</td>
              <td className="py-2 px-4 border-b">
                <button
                  onClick={() => onUpdate(student)}
                  className="text-white p-2 px-6 bg-green-500 hover:bg-green-600 rounded-md hover:underline mr-4"
                >
                  Update
                </button>
                <button
                  onClick={() => onDelete(student)}
                  className="text-white p-2 px-6 bg-red-500 hover:bg-blue-800 rounded-md  hover:underline"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentTable;
