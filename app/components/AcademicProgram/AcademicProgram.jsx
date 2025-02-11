"use client"
import React, { useState } from 'react'


export default function AcademicProgram() {
    const [activeTab, setActiveTab] = useState("postgraduate");

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
      };
  return (
    <section
    className="academic-programme mx-auto mt-5 flex justify-center overflow-auto"
    style={{
      background: "url('/baggi.jpg')",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    }}
  >
    <div className="container  flex flex-col lg:flex-row  items-center bg-opacity-75 bg-blue-600 h-auto lg:h-[580px] p-4">
      <nav className="nav flex flex-col lg:w-1/4 w-full lg:items-start items-center p-4 overflow-hidden">
      <h1 className=' font-semibold text-center w-auto mx-auto text-3xl '>Academic Program</h1>
      
  <div className=' h-[480px]  overflow-y-scroll '>
        <ul className="space-y-2 bg-white   p-4 w-full lg:w-auto">
          <li className="bg-white rounded-lg text-black hover:bg-blue-500">
            <button
              onClick={() => handleTabClick("undergraduate")}
              className={`p-4 w-full lg:w-auto text-left nav-link ${
                activeTab === "undergraduate" ? "active" : ""
              }`}
              role="tab"
            >
              Bachelor of Business Administration (BBA)
            </button>
          </li>
          <li className="bg-white rounded-lg text-black hover:bg-blue-500">
            <button
              onClick={() => handleTabClick("postgraduate")}
              className={`p-4 w-full lg:w-auto text-left nav-link ${
                activeTab === "postgraduate" ? "active" : ""
              }`}
              role="tab"
            >
              Bachelor of Commerce (B.Com. - Plain)
            </button>
          </li>
          <li className="bg-white rounded-lg text-black hover:bg-blue-500">
            <button
              onClick={() => handleTabClick("bcmp")}
              className={`p-4 w-full lg:w-auto text-left nav-link ${
                activeTab === "bcmp" ? "active" : ""
              }`}
              role="tab"
            >
          B.Sc. (Chemistry- Mathematics – Physics)
            </button>
          </li>
          <li className="bg-white rounded-lg text-black hover:bg-blue-500">
            <button
              onClick={() => handleTabClick("bcs")}
              className={`p-4 w-full lg:w-auto text-left nav-link ${
                activeTab === "bcs" ? "active" : ""
              }`}
              role="tab"
            >
      B.Sc. (Computer Science – Mathematics – Physics)
            </button>
          </li>
          <li className="bg-white rounded-lg text-black hover:bg-blue-500">
            <button
              onClick={() => handleTabClick("bah")}
              className={`p-4 w-full lg:w-auto text-left nav-link ${
                activeTab === "bah" ? "active" : ""
              }`}
              role="tab"
            >
             BA (History-Hindi-English)
            </button>
          </li>
          <li className="bg-white rounded-lg text-black hover:bg-blue-500">
            <button
              onClick={() => handleTabClick("bee")}
              className={`p-4 w-full lg:w-auto text-left nav-link ${
                activeTab === "postgraduate" ? "active" : ""
              }`}
              role="tab"
            >
         BA (Economics-English-Psychology)
            </button>
          </li>
          <li className="bg-white rounded-lg text-black hover:bg-blue-500">
            <button
              onClick={() => handleTabClick("doctoral")}
              className={`p-4 w-full lg:w-auto text-left nav-link ${
                activeTab === "doctoral" ? "active" : ""
              }`}
              role="tab"
            >
           Bachelor of Commerce (B.Com. - Tax)
            </button>
          </li>
          <li className="bg-white rounded-lg text-black hover:bg-blue-500">
            <button
              onClick={() => handleTabClick("executive")}
              className={`p-4 w-full lg:w-auto text-left nav-link ${
                activeTab === "executive" ? "active" : ""
              }`}
              role="tab"
            >
            BJMC – (Print Journalism, Broadcast (Radio and TV) Journalism and Web Journalism)
            </button>
          </li>
          <li className="bg-white rounded-lg text-black hover:bg-blue-500">
            <button
              onClick={() => handleTabClick("parttime")}
              className={`p-4 w-full lg:w-auto text-left nav-link ${
                activeTab === "parttime" ? "active" : ""
              }`}
              role="tab"
            >
            B.Sc. (BioTechnology-Chemistry-Pharmaceutical Chemistry)
            </button>
          </li>
        </ul>
        </div>
      </nav>
      <div className="tab-content lg:w-3/4 w-full p-4">
        {activeTab === "undergraduate" && (
          <article className="tab-pane fade text-black" role="tabpanel">
            <h2 className="text-white font-bold text-3xl">BBA</h2>
            <p className="text-white text-justify">
            Duration: 3 Years
  <br></br>
  BBA 1st semester syllabus (click to download)
  <br></br>
  BBA 2nd semester syllabus (click to download)
  <br></br>
  BBA 3rd and 4th semester syllabus (click to download)
  
  <div>
  <h1 className=' text-white'>Branch/Specialization</h1>
  
  B.A. (Economics) - Intake 60
  Eligibility Criteria: 12th in any stream
  
  Institute: Lakshmi Narain College of Professional Studies
  
  University: Devi Ahilya Vishwavidyalaya
  
  Help Line Number: +91 9752410847
    </div> (
              <a
                href="https://josaa.nic.in/"
                className="outside-link"
                target="_blank"
                rel="noreferrer"
              >
            
              </a>
              ) 
            </p>
          </article>
        )}
        {activeTab === "postgraduate" && (
          <article className="tab-pane fade active show text-black" role="tabpanel">
            <h2 className="text-white font-bold text-3xl">B.COM</h2>
            <h4 className="text-white mt-5">M. Tech.</h4>
            <p className="text-white text-justify  ">
            Duration: 3 Years
  
  B.Com. syllabus (click to download)
  Foundation Course (click to download)
            </p>
            <div className=' text-white'>
            Branch/Specialization:
  
  Bachelor of Commerce (Plain) (60)
  Bachelor of Commerce (Tax) (60)
  Eligibility Criteria: 12th in any stream (for HONS. minimum 60% marks)
  
  Institute: Lakshmi Narain College of Professional Studies
  
  University: Devi Ahilya Vishwavidyalaya
  
  Help Line Number: +91 9752410847
  
  Admission Procedure: Admissions to various courses of LNCPS are based on merit positions on the basis of percentage of marks obtained by the student in the qualifying examination.
  The candidate is eligible to apply for the admission only when he/she fulfils the document requirements for the particular programme in which the admission is sought. It is the responsibility of the student to obtain all the relevant information about his/her eligibility. In case a student who is provisionally admitted on the basis of the information/documents furnished by him is found ineligible/fake, The Director/Principal reserves the right to cancel the admission without any intimation to the candidate.
  
  Documents:
  
  Copy of mark sheet of 10th and 12th class.
  Transfer Certificate (in original).
  Migration Certificate (in original).
  Character Certificate (in original)
  5 Photographs of candidate.
  1 Photograph of Father and 1 of Mother.
  Caste certificate in case of SC / ST / OBC category.
  Minority certificate for minorities.
  Gap certificate in case of any gap during study.
  Reservation: The institute follows the provisions contained in the constitution of India and the decision of Supreme Court of India as applicable to self-financing educational institutions established and administered by MINORITY COMMUNITY.
  
  Refund of Fee: The fee is non-refundable in case a student takes admission to any of the academic programs conducted by the institute and deposits the fee, but subsequently does not join the course or leaves the course during the Year/Semester.
            </div>
            {/* Add content for other postgraduate programs */}
          </article>
        )}
        {activeTab === "doctoral" && (
          <article className="tab-pane fade text-black" role="tabpanel">
            <h2 className="text-white font-bold text-3xl">B.COM</h2>
            <p className="text-white text-justify">
            Duration: 3 Years
  
  B.Com. 1st, 2nd, 3rd semester syllabus (click to download)
  Foundation Course (click to download)
            </p>
            <h4 className="text-white mb-4 font-bold text-3xl">  Branch/Specialization</h4>
            <p className="text-white text-justify">
          
  
  Bachelor of Commerce (Plain) (60)
  Bachelor of Commerce (Tax) (60)
  Eligibility Criteria: 12th in any stream (for HONS. minimum 60% marks)
  
  Institute: Lakshmi Narain College of Professional Studies
  
  University: Devi Ahilya Vishwavidyalaya
  
  Help Line Number: +91 9752410847
  
  Admission Procedure: Admissions to various courses of LNCPS are based on merit positions on the basis of percentage of marks obtained by the student in the qualifying examination.
  The candidate is eligible to apply for the admission only when he/she fulfils the document requirements for the particular programme in which the admission is sought. It is the responsibility of the student to obtain all the relevant information about his/her eligibility. In case a student who is provisionally admitted on the basis of the information/documents furnished by him is found ineligible/fake, The Director/Principal reserves the right to cancel the admission without any intimation to the candidate.
  
  Documents:
  
  Copy of mark sheet of 10th and 12th class.
  Transfer Certificate (in original).
  Migration Certificate (in original).
  Character Certificate (in original)
  5 Photographs of candidate.
  1 Photograph of Father and 1 of Mother.
  Caste certificate in case of SC / ST / OBC category.
  Minority certificate for minorities.
  Gap certificate in case of any gap during study.
  Reservation: The institute follows the provisions contained in the constitution of India and the decision of Supreme Court of India as applicable to self-financing educational institutions established and administered by MINORITY COMMUNITY.
  
  Refund of Fee: The fee is non-refundable in case a student takes admission to any of the academic programs conducted by the institute and deposits the fee, but subsequently does not join the course or leaves the course during the Year/Semester.
            </p>
            </article>
      )}
      {activeTab === "executive" && (
        <article className="tab-pane fade text-black" role="tabpanel">
          <h2 className="text-white font-bold text-3xl">BJMC</h2>
          <p className="text-white text-justify">
          Duration: 3 Years

BJMC syllabus (click to download)
          </p>
        </article>
      )}



{activeTab === "bcmp" && (
        <article className="tab-pane fade text-black" role="tabpanel">
          <h2 className="text-white font-bold text-3xl">BsC</h2>
          <p className="text-white text-justify">
          Duration: 3 Years

Admission criteria – 12th with science for BSc courses and 12th passed with out science can apply for all except BSc

Chemistry syllabus(click to download)
Foundation Course(click to download)
BA Mathematics Scheme of Examination & Syllabus(click to download)
BA Physics Scheme of Examination & Syllabus(click to download)
          </p>
          <div className=' text-white'>
          Branch/Specialization:

B.Sc (Computer Science) (Intake 60)
B.Sc (Biotechnology) (Intake 60)
B.Sc (Plain) (Intake 60)
Eligibility Criteria: 12th with Physics-Chemistry-Mathematics/ Physics-Chemistry-Biology

Institute: Lakshmi Narain College of Professional Studies

University: Devi Ahilya Vishwavidyalaya

Help Line Number: +91 9752410847

Admission Procedure: Admissions to various courses of LNCPS are based on merit positions on the basis of percentage of marks obtained by the student in the qualifying examination.
The candidate is eligible to apply for the admission only when he/she fulfils the document requirements for the particular programme in which the admission is sought. It is the responsibility of the student to obtain all the relevant information about his/her eligibility. In case a student who is provisionally admitted on the basis of the information/documents furnished by him is found ineligible/fake, The Director/Principal reserves the right to cancel the admission without any intimation to the candidate.

Documents:

Copy of mark sheet of 10th and 12th class.
Transfer Certificate (in original).
Migration Certificate (in original).
Character Certificate (in original)
5 Photographs of candidate.
1 Photograph of Father and 1 of Mother.
Caste certificate in case of SC / ST / OBC category.
Minority certificate for minorities.
Gap certificate in case of any gap during study.
Reservation: The institute follows the provisions contained in the constitution of India and the decision of Supreme Court of India as applicable to self-financing educational institutions established and administered by MINORITY COMMUNITY.

Refund of Fee: The fee is non-refundable in case a student takes admission to any of the academic programs conducted by the institute and deposits the fee, but subsequently does not join the course or leaves the course during the Year/Semester.
          </div>
        </article>
      )}


{activeTab === "bcs" && (
        <article className="tab-pane fade text-black" role="tabpanel">
          <h2 className="text-white font-bold text-3xl">BSC</h2>
          <p className="text-white text-justify">
          Duration: 3 Years

Admission criteria – 12th with science for BSc courses and 12th passed with out science can apply for all except BSc

Physics Scheme of Examination & Syllabus(click to download)
Foundation Course(click to download)
BA Mathematics Scheme of Examination & Syllabus(click to download)
          </p>
          <div className=' text-white'>
          Branch/Specialization:

B.Sc (Computer Science) (Intake 60)
B.Sc (Biotechnology) (Intake 60)
B.Sc (Plain) (Intake 60)
Eligibility Criteria: 12th with Physics-Chemistry-Mathematics/ Physics-Chemistry-Biology

Institute: Lakshmi Narain College of Professional Studies

University: Devi Ahilya Vishwavidyalaya

Help Line Number: +91 9752410847

Admission Procedure: Admissions to various courses of LNCPS are based on merit positions on the basis of percentage of marks obtained by the student in the qualifying examination.
The candidate is eligible to apply for the admission only when he/she fulfils the document requirements for the particular programme in which the admission is sought. It is the responsibility of the student to obtain all the relevant information about his/her eligibility. In case a student who is provisionally admitted on the basis of the information/documents furnished by him is found ineligible/fake, The Director/Principal reserves the right to cancel the admission without any intimation to the candidate.

Documents:

Copy of mark sheet of 10th and 12th class.
Transfer Certificate (in original).
Migration Certificate (in original).
Character Certificate (in original)
5 Photographs of candidate.
1 Photograph of Father and 1 of Mother.
Caste certificate in case of SC / ST / OBC category.
Minority certificate for minorities.
Gap certificate in case of any gap during study.
Reservation: The institute follows the provisions contained in the constitution of India and the decision of Supreme Court of India as applicable to self-financing educational institutions established and administered by MINORITY COMMUNITY.

Refund of Fee: The fee is non-refundable in case a student takes admission to any of the academic programs conducted by the institute and deposits the fee, but subsequently does not join the course or leaves the course during the Year/Semester.
          </div>
        </article>
      )}



{activeTab === "bah" && (
        <article className="tab-pane fade text-black" role="tabpanel">
          <h2 className="text-white font-bold text-3xl">BA</h2>
          <p className="text-white text-justify">
          Duration: 3 Years

BA English Literature Syllabus(click to download)
Foundation Course(click to download)
BA Mathematics Scheme of Examination & Syllabus(click to download)
          </p>
          <div className=' text-white'>
          Branch/Specialization:

B.A. (Economics) - Intake 60
Eligibility Criteria: 12th in any stream

Institute: Lakshmi Narain College of Professional Studies

University: Devi Ahilya Vishwavidyalaya

Help Line Number: +91 9752410847
          </div>
        </article>
      )}


{activeTab === "bee" && (
        <article className="tab-pane fade text-black" role="tabpanel">
          <h2 className="text-white font-bold text-3xl">BA</h2>
          <p className="text-white text-justify">
          Duration: 3 Years

Syllabus Of BA Psychology(click to download)
Foundation Course(click to download)
BA Mathematics Scheme of Examination & Syllabus(click to download)
          </p>
          <div className=' text-white'>
          Branch/Specialization:

B.A. (Economics) - Intake 60
Eligibility Criteria: 12th in any stream

Institute: Lakshmi Narain College of Professional Studies

University: Devi Ahilya Vishwavidyalaya

Help Line Number: +91 9752410847
          </div>
        </article>
      )}
      {activeTab === "parttime" && (
        <article className="tab-pane fade text-black" role="tabpanel">
          <h2 className="text-white font-bold text-3xl">BSC</h2>
          <p className="text-white text-justify">
          Duration: 3 Years
Admission criteria – 12th with science for BSc courses and 12th passed with out science can apply for all except BSc
Biotechnology syllabus (click to download)
Foundation Course (click to download)
Pharmaceutical Chemistry (click to download)
          </p>
          <div className=' text-white'>
          Branch/Specialization:
B.Sc (Computer Science) (Intake 60)
B.Sc (Biotechnology) (Intake 60)
B.Sc (Plain) (Intake 60)
Eligibility Criteria: 12th with Physics-Chemistry-Mathematics/ Physics-Chemistry-Biology
Institute: Lakshmi Narain College of Professional Studies
University: Devi Ahilya Vishwavidyalaya
Help Line Number: +91 9752410847
Admission Procedure: Admissions to various courses of LNCPS are based on merit positions on the basis of percentage of marks obtained by the student in the qualifying examination.
The candidate is eligible to apply for the admission only when he/she fulfils the document requirements for the particular programme in which the admission is sought. It is the responsibility of the student to obtain all the relevant information about his/her eligibility. In case a student who is provisionally admitted on the basis of the information/documents furnished by him is found ineligible/fake, The Director/Principal reserves the right to cancel the admission without any intimation to the candidate.
Documents:
Copy of mark sheet of 10th and 12th class.
Transfer Certificate (in original).
Migration Certificate (in original).
Character Certificate (in original)
5 Photographs of candidate.
1 Photograph of Father and 1 of Mother.
Caste certificate in case of SC / ST / OBC category.
Minority certificate for minorities.
Gap certificate in case of any gap during study.
Reservation: The institute follows the provisions contained in the constitution of India and the decision of Supreme Court of India as applicable to self-financing educational institutions established and administered by MINORITY COMMUNITY.
Refund of Fee: The fee is non-refundable in case a student takes admission to any of the academic programs conducted by the institute and deposits the fee, but subsequently does not join the course or leaves the course during the Year/Semester.
          </div>
        </article>
      )}
    </div>
  </div>
</section>
  )
}
