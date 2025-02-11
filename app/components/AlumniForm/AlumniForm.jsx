"use client"
import React, { useState } from "react";
const AlumniForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobileNumber: "",
    batch: "1999",
    course: "",
    title: "",
    company: "",
    package: "",
    city: "",
    homeAddress: "",
    officeAddress: "",
    comments: "",
    image: null
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData((prevData) => ({
      ...prevData,
      image: file
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Save form data to local storage
    localStorage.setItem("alumniData", JSON.stringify(formData));
    alert("Data saved successfully!");
  };
  const batches = Array.from({ length: 2023 - 1999 + 1 }, (_, i) => (1999 + i).toString());
  return (
    <form onSubmit={handleSubmit} className="p-6 bg-white shadow-lg rounded-lg space-y-4">
      <div>
        <label className="block mb-1">First Name</label>
        <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} className="w-full p-2 border rounded" required />
      </div>
      <div>
        <label className="block mb-1">Last Name</label>
        <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} className="w-full p-2 border rounded" required />
      </div>
      <div>
        <label className="block mb-1">Email</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full p-2 border rounded" required />
      </div>
      <div>
        <label className="block mb-1">Mobile Number</label>
        <input type="text" name="mobileNumber" value={formData.mobileNumber} onChange={handleChange} className="w-full p-2 border rounded" required />
      </div>
      <div>
        <label className="block mb-1">Batch</label>
        <select name="batch" value={formData.batch} onChange={handleChange} className="w-full p-2 border rounded">
          {batches.map((batch) => (
            <option key={batch} value={batch}>
              {batch}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label className="block mb-1">Course</label>
        <input type="text" name="course" value={formData.course} onChange={handleChange} className="w-full p-2 border rounded" required />
      </div>
      <div>
        <label className="block mb-1">Title/Designation</label>
        <input type="text" name="title" value={formData.title} onChange={handleChange} className="w-full p-2 border rounded" />
      </div>
      <div>
        <label className="block mb-1">Company/Institute</label>
        <input type="text" name="company" value={formData.company} onChange={handleChange} className="w-full p-2 border rounded" />
      </div>
      <div>
        <label className="block mb-1">Package</label>
        <input type="text" name="package" value={formData.package} onChange={handleChange} className="w-full p-2 border rounded" />
      </div>
      <div>
        <label className="block mb-1">City</label>
        <input type="text" name="city" value={formData.city} onChange={handleChange} className="w-full p-2 border rounded" />
      </div>
      <div>
        <label className="block mb-1">Home Address</label>
        <input type="text" name="homeAddress" value={formData.homeAddress} onChange={handleChange} className="w-full p-2 border rounded" />
      </div>
      <div>
        <label className="block mb-1">Office Address</label>
        <input type="text" name="officeAddress" value={formData.officeAddress} onChange={handleChange} className="w-full p-2 border rounded" />
      </div>
      <div>
        <label className="block mb-1">Comments/Remarks</label>
        <textarea name="comments" value={formData.comments} onChange={handleChange} className="w-full p-2 border rounded" />
      </div>
      <div>
        <label className="block mb-1">Image</label>
        <input type="file" accept="image/*" onChange={handleImageChange} className="w-full p-2 border rounded" />
      </div>
      <button type="submit" className="w-full p-2 bg-purple-600 text-white rounded">Submit</button>
    </form>
  );
};
export default AlumniForm;