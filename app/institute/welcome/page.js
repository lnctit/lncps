import React from "react";
import Navbar from "@/app/components/Navbar";
import Image from "next/image";
import Monument from "@/app/components/Monument/Monument";

export default function page() {
  return (
    <>

      <div
        className="w-full border-2 h-96 flex justify-center  items-center"
        style={{
          backgroundImage: "url('/clg.jpg')",
          backgroundSize: "cover",
        }}
      >
        <h1 className=" uppercase font-bold text-5xl">welcome to -LNCPS</h1>
      </div>
      <div
        className="w-full h-screen  "
        style={{ height: "calc(100vh - 60px)" }}
      >
        <div className="w-full flex px-5 py-5  gap-5">
          <div className="w-2/3 ">
            <div className="p-10">
              <h2 className=" tracking-[10px] text-lg text-blue-800">WELCOME TO</h2>
              <h1 className="my-6 text-4xl  font-bold"> LNCPS INDORE</h1>

              <p className=" mt-2 font-extralight text-sm  text-justify">
                Lakshmi Narain College of Professional Studies (LNCPS) has been established in 2018 with a vision to spread the culture of staying rooted with values and ethics and at the same time develop
                skills and competencies to help every student that joins the institute to give back to society and take nation to the zenith.
                The institute is poised to impart the best quality of Higher Education, through the versatile infrastructure of Indore campus. 
                The institute has an excellent Library, laboratories and fully equipped Computer Lab with Wi-Fi facility.
                We offer full time regular under graduate courses affiliated with Devi Ahilya Vishwavidyalaya, Indore. 
                MP Higher Education. In Science stream: B.Sc. (Computer Science), B.Sc. (Biotechnology with Pharmaceutical Chemistry). B.Sc. (PCM). In Commerce: stream B.Com (Tax), B.Com (Plain) and In Business Studies: BBA, BA (Economics) and MBA in dual specialization of Marketing, Finance, HRM, Operations and IT.
              </p>

              <p className=" mt-2 font-extralight text-sm text-justify">
              Welcome to the Lakshmi Narain College of Professional Studies, where academic excellence meets real-world application. Our programs are designed to equip students with the skills and knowledge needed to excel in today is dynamic professional landscape.
              With a focus on interdisciplinary learning, practical experience, and innovation, we offer a wide range of undergraduate and graduate programs tailored to meet the needs of diverse industries. Our faculty comprises experienced professionals and scholars dedicated to fostering a learning environment that encourages critical thinking, collaboration, and personal growth.
              Whether you are advancing your current career or embarking on a new professional journey, 
              the College of Professional Studies is committed to helping you achieve your goals
              </p>
            </div>
          </div>
          <div className="w-1/3  p-4">
            <div className="relative h-full">
              <Image
                src="/welcome.jpeg"
                alt="foddiesssss"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full mx-auto py-2 px-20">
        <Monument />
      </div>
    </>
  );
}
