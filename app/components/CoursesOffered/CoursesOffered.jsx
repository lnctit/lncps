import React from 'react'

export default function CoursesOffered() {
  const courses = [
    {
      course: "Bachelor of Business Administration (BBA)",
      duration: "4 years",
      eligibilty: "12th Pass (Any Streams) "
    },
    {
      course: "Bachelor of Commerce (B.Com. - Plain)",
      duration: "4 years",
      eligibilty: "12th pass(Commerce only)"
    },
    {
      course: "B.Sc. (Chemistry- Mathematics – Physics)",
      duration: "4 years",
      eligibilty: "12th pass (Science only)"
    },
    {
      course: "B.Sc. (Computer Science – Mathematics – Physics)",
      duration: "4 years",
      eligibilty: "12th pass (Science only)"
    },
    {
      course: "BA (History-Hindi-English)",
      duration: "4 years",
      eligibilty: "12th pass (Humanities and Arts)"
    },
    {
      course: "BA (Economics-English-Psychology)",
      duration: "4 years",
      eligibilty: "12th pass (Humanities and Arts)"
    },
    {
      course: "Bachelor of Commerce (B.Com. - Tax)",
      duration: "4 years",
      eligibilty: "12th pass(Commerce)"
    },
    {
      course: "BJMC – (Print Journalism, Broadcast (Radio and TV) Journalism and Web Journalism)",
      duration: "4 years",
      eligibilty: "12th pass (Any Stream)"
    },
    {
      course: "B.Sc. (BioTechnology-Chemistry-Pharmaceutical Chemistry)",
      duration: "4 years",
      eligibilty: "12th pass(Science Only)"
    },
  ]
  return (
    <div className='pb-10'>
      <table className="min-w-full bg-white">
        <thead className="bg-gray-800 text-white">
          <tr>
            <th className="w-1/5 py-4">Course</th>
            <th className="w-1/5 py-4">Duration</th>
            <th className="w-1/5 py-4">Eligibilty</th>

          </tr>
        </thead>
        <tbody>
          {courses.map((course) => (
            <tr key={course.course} className="text-center border-b">
              <td className="py-4">{course.course}</td>
              <td className="py-4">{course.duration}</td>
              <td className="py-4">{course.eligibilty}</td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
