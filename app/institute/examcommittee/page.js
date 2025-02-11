import SliderMain from '@/app/components/SliderMain/SliderMain'
import React from 'react'

export default function CoursesOffered() {
  const courses = [
    {
        course: "Prof. Muskan Jain",
        duration: "Assiatant Professor",
        eligibilty: "muskanjain1899@gmail.com"
      },
    {
      course: "C/T Neeraj Soni",
      duration: "NCC(Officer)",
      eligibilty: "nsoni2357@gmail.com "
    },
    {
      course: "Prof. Harsh Sharma",
      duration: "Assistant Professor",
      eligibilty: "sharma20696@gmail.com"
    },
    
    {
      course: "prof. Nikita Yadav",
      duration: "Assistant Professor",
      eligibilty: "yadavnikita215@gmail.com"
    },
    // {
    //   course: "BA (History-Hindi-English)",
    //   duration: "4 years",
    //   eligibilty: "12th pass (Humanities and Arts)"
    // },
    // {
    //   course: "BA (Economics-English-Psychology)",
    //   duration: "4 years",
    //   eligibilty: "12th pass (Humanities and Arts)"
    // },
    // {
    //   course: "Bachelor of Commerce (B.Com. - Tax)",
    //   duration: "4 years",
    //   eligibilty: "12th pass(Commerce)"
    // },
    // {
    //   course: "BJMC – (Print Journalism, Broadcast (Radio and TV) Journalism and Web Journalism)",
    //   duration: "4 years",
    //   eligibilty: "12th pass (Any Stream)"
    // },
    // {
    //   course: "B.Sc. (BioTechnology-Chemistry-Pharmaceutical Chemistry)",
    //   duration: "4 years",
    //   eligibilty: "12th pass(Science Only)"
    // },
  ]
  return (
    <div className='pb-10'>
        <div
                className="w-full h-36 flex justify-center  items-center"
                style={{
                    // backgroundImage: "url('/logo1.png')",
                    backgroundColor:"#43b2ff",
                    backgroundSize: "cover",
                }}
            >
                <h1 className=" uppercase font-bold text-5xl">Examination Committee</h1>
            </div>
      <table className="min-w-full bg-white">
        <thead className="bg-blue-800 text-white">
          <tr>
            <th className="w-1/5 py-4">Name</th>
            <th className="w-1/5 py-4">Designation</th>
            <th className="w-1/5 py-4">Contact details</th>

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
