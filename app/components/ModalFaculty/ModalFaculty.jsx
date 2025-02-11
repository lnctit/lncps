import React from "react";

export default function ModalFaculty({ show, onClose, staff }) {
  if (!show) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded shadow-lg w-2/3 relative">
        <button
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
          onClick={onClose}
        >
          &times;
        </button>
        <div className="flex mb-5">
          <div className="w-48 h-48 overflow-hidden rounded border-2 border-black mr-5">
            <img src={staff.image} alt={staff.name} className="object-cover" />
          </div>
          <div className="w-full">
            <h2 className="text-sm text-purple-500">{staff.position}</h2>
            <p className="text-xl font-bold my-1">{staff.name}</p>
            <p className="text-lg text-gray-800 mb-1">{staff.qualifications}</p>
            <hr className="my-3" />
            <p className="text-gray-700 text-lg">
              <span className="font-bold">Experience: </span>
              {staff.experience}
            </p>
            <p className="text-gray-700 text-lg">
              <span className="font-bold">DOB: </span> {staff.dob}
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-3">Awards and Registrations</h3>
          <table className="min-w-full bg-white">
            <thead className="bg-gray-800 text-white">
              <tr>
                <th className="w-1/5 py-2">Name</th>
                <th className="w-1/5 py-2">Awarding Authority</th>
                <th className="w-1/5 py-2">Year</th>
                <th className="w-1/5 py-2">Registration No. / Date</th>
                <th className="w-1/5 py-2">Name of Board / Council</th>
              </tr>
            </thead>
            <tbody>
              {staff.awards.map((award, index) => (
                <tr key={index} className="text-center border-b">
                  <td className="py-2">{staff.name}</td>
                  <td className="py-2">{award.authority}</td>
                  <td className="py-2">{award.year}</td>
                  <td className="py-2">{award.registrationNo}</td>
                  <td className="py-2">{award.boardCouncil}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}