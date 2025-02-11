import React from "react";

export default function ProgramCard({course, dept, bgcolor,admission }) {
  return (
    <div className={`w-82 h-72 border-2 p-5 ${bgcolor} text-white hover:bg-blue-800 rounded-md transition-all duration-300`}>
      <h1 className=" font-bold text-lg py-3">{course}</h1>
      <hr className="border" />
      <div className="py-3">
        <h1 className=" font-bold text-lg">B.Sc,BBA,BJMC</h1>
        <h2>{dept}</h2>
      </div>
      <hr className="border" />
      <div className="py-3">
        <h1 className=" font-bold text-lg">Eligibilty</h1>
        <h2>{admission}</h2>
      </div>
    </div>
  );
}
