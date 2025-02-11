"use client";
import React,{useState} from "react";
import SliderMain from "../SliderMain/SliderMain";
import Image from "next/image";
import Counter from "@/app/components/Counter";
import DeptCounter from "../DeptCounter/DeptCounter";
import ProgramCard from "../ProgramCard/ProgramCard";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Slider from "../Slider/Slider";
import { head } from "lodash";
import FacultyCard from "../FacultyCard/FacultyCard";
import Curriculumn from "../Curriculumn/Curriculumn";
// import { useState } from "react/cjs/react.development";

export default function DeptEr({ dept,deps }) {
  const images = ["/ar-3.jpg"];
  const counter = [
    {
      title: "undergraduate students",
      value: "120",
      textColor: "text-blue-800",
      color: "bg-red-500",
      speed: "40",
    },
    {
      title: "postgraduate students",
      value: "60",
      textColor: "text-blue-800",
      color: "bg-[#FF3344]",
      speed: "35",
    },
    {
      title: "doctoral students",
      value: "30",
      textColor: "text-blue-800",
      color: "bg-pink-500",
      speed: "30",
    },
    {
      title: "recent job offers",
      value: "300",
      textColor: "text-blue-800",
      color: "bg-[#FF3344]",
      speed: "30",
    },
    {
      title: "faculties",
      value: "60",
      textColor: "text-blue-800",
      color: "bg-teal-500",
      speed: "30",
    },
  ];

  let headD;
  let headImg;
  let phoneHead;
  let emailHead;
  let faculties;
  let aboutDept;
  let deptImg;
  let slogan;
  let author;
  switch (dept) {
    case "me":
      slogan =
        "Engineering Tomorrow, Innovating Today ,Unleash Your Potential with Us!";
      author = "Dr.Mumuksha Jain ";
      deptImg = "/dept-m-v.jpg";
      aboutDept = "The Commerce Department at Lakshmi Narain College of Professional Studies is dedicated to nurturing future business leaders by providing students with a comprehensive education in the principles of trade, finance, and economics. It offers a diverse curriculum that includes subjects like accounting, business management, marketing, and economics, designed to equip students with the practical skills and theoretical knowledge needed to excel in the business world. Through a blend of classroom learning and real-world application, the Commerce Department prepares students for a wide range of careers in areas such as banking, entrepreneurship, corporate management, and financial services. With a strong focus on critical thinking, problem-solving, and ethical business practices, the department fosters a deep understanding of the economic forces that shape our global marketplace";
      dept = "Commerce";
      headD = "Dr.Mumuksha Jain ";

      headImg = "/mumuksha.jpg";
      phoneHead = "8368766792";
      emailHead = "mumukshaj@gmail.com";
      faculties = [
        {
          image: "/muskanjain.jpg",
          name: "Prof. Muskan Jain",
          position: "Assistant Professor",
          degree: "Pursuing  Ph.D from DAVV,M.Com, B.Com",
          experience: "3 years",
        },
        {
          image: "/chirag.png",
          name: "Prof.Chirag Sharma",
          position: "Assistant Professor",
          degree: "Pursuing Ph.D from DAVV, M.Com, B.com ",
          experience: "3 years",
        },

        // Add more faculty members as needed
      ];

      break;
    case "cse":
      slogan =
        "Empowering Innovation, Shaping the Future: Where Technology Meets Excellence";
      author = "Prof. Swati Patil";
      deptImg = "/dept-m-v.jpg";
      aboutDept ="The Science Department is dedicated to fostering a deep understanding of the natural world through inquiry, experimentation, and critical thinking. Our programs span a wide range of disciplines, including biology, chemistry, physics, and environmental science, offering students the tools to explore and solve complex scientific problems. With state-of-the-art laboratories, cutting-edge research opportunities, and a focus on hands-on learning, we prepare students to become innovators and leaders in their fields. Guided by a commitment to scientific integrity and discovery, the Science Department empowers students to make meaningful contributions to society through research, technology, and applied science.In the Science Department, we are passionate about cultivating curiosity and advancing knowledge that drives progress. Our faculty, composed of leading researchers and educators, mentor students in both foundational theories and cutting-edge developments across the sciences. Through collaborative projects, interdisciplinary studies, and real-world applications, students gain the skills to tackle global challenges such as climate change, public health, and technological innovation.";
      dept = "Science";
      headD = "Prof. Swati Patil";
      headImg = "/faculty/sci_HOD.jpg";
      phoneHead = "9425435798";
      emailHead = "swati.bpl2009@gmail.com ";
      faculties = [
        {
          image: "/sarveshmishra.jpg",
          name: "Prof. SARVESH MISHRA",
          position: "Assistant Professor",
          degree: " M.Sc. GATE-2007, M.Tech.(L.S.A.) C.G. SET-2017 , Ph.D. Pursuing ",
          experience: "12 years",
        },
        // {
        //   image: "",
        //   name: "Prof.kiti Bamaniya",
        //   position: "Assistant Professor",
        //   degree: "M.Sc(Applied Chemistry),B.Sc",
        //   experience: "1 years",
        // },
        {
          image: "/nikitayadav.jpg",
          name: "Prof Nikita yadav",
          position: "Assistant Professor",
          degree: "Ph.D Pursuing, M.Sc(BioChemistry),B.Sc",
          experience: "1 years",
        },
        {
          image: "",
          name: "Prof Monika Lal",
          position: "Assistant Professor",
          degree: " Ph.D Pursuing ,UGC NET, M.Sc(BioTechnology),B.Sc",
          experience: "",
        },
        // Add more faculty members as needed
      ];

      break;
    case "ece":
      slogan =
        "Connecting Ideas, Creating Futures: Innovate with Electronics and Communication!";
      author = "Manisha Singh";
      deptImg = "/dept-m-v.jpg";
      aboutDept = "The Arts Department is a vibrant hub of creativity, expression, and innovation. Our programs offer a rich blend of traditional techniques and contemporary practices, encouraging students to explore their artistic potential across various disciplines, including visual arts, music, theater, and design. With a commitment to fostering critical thinking and cultural awareness, we provide a dynamic environment where aspiring artists can develop their craft and contribute to the world of art.In the Arts Department, we celebrate the transformative power of creativity and imagination. Our faculty, comprised of accomplished artists and scholars, guide students through immersive learning experiences, combining hands-on practice with theoretical exploration. Whether through painting, sculpture, digital media, or performance, we encourage students to push boundaries, challenge conventions, and develop their unique artistic voices. Our vibrant community thrives on collaboration, diversity, and a shared passion for the arts, preparing graduates to make meaningful contributions to both local and global cultural landscapes.";
      dept = "Arts";
      headD = "Prof.Manisha Singh";
      headImg = "/manishasingh.jpg";
      phoneHead = "9977791266";
      emailHead = "Email.gautammanisha305@gmail.com";
      faculties = [
        // {
        //   image: "",
        //   name: "Prof. Hemant Vijay Bharat Singh",
        //   position: "HOD of Journalism & Mass Communication",
        //   degree: "M.Sc. in Mass Communication Journalism And Advertising",
        //   experience: "12 years",
        // },
        {
          image: "/harshsir.jpg",
          name: "Prof. Harsh Sharma",
          position: "Assistant Professor",
          degree: "MMA in Hindi Literature MBA ( Finance-Marketing) PGDCA",
          experience: "3 years",
        },
        { image: "/shalinisoni.jpg",
          name: "Prof.Shalini Soni",
          position: "Assistant Professor",
          degree: "M.A,M.Com, PGDM",
          experience: "1 years",
        },
        { image: "",
          name: "Prof.Prabhat Mishra",
          position: "Assistant Professor",
          degree: " MA (Hindi) , BA",
          experience: "",
        },
        // Add more faculty members as needed
      ];

      break;
    case "eet":
      slogan =
        "Empowering Voices, Shaping Truth.";
      author = "Prof. Krishna Patel";
      deptImg = "/dept-m-v.jpg";
      aboutDept ="The Department of Journalism is dedicated to cultivating skilled communicators and critical thinkers who can navigate the evolving media landscape with integrity and precision. By offering a curriculum that blends theoretical foundations with hands-on training, the department equips students with the tools to excel in diverse media platforms, from traditional print to digital journalism. Courses emphasize the importance of ethics, accuracy, and storytelling, ensuring graduates are prepared to report on complex issues with clarity and responsibility. Through a focus on investigative reporting, media law, and multimedia production, the department prepares students to become informed, impactful journalists in a rapidly changing world.";
      dept = "Journalism";
      headD = "Prof. Krishna Patel";
      headImg = "/krishna.jpg";
      phoneHead = "";
      emailHead = "";
      faculties = [
        // {
        //   image: "",
        //   name: "MS. GARIMA MAHESHWARI",
        //   position: "Assistant Professor",
        //   degree: "M.E.",
        //   experience: "9 years",
        // },
        {
          name: "uploading soon ",
          position: "",
          degree: "",
          experience: "",
        },
        // {
        //   name: "Emily Johnson",
        //   position: "Project Manager",
        //   degree: "MBA",
        //   experience: "7 years",
        // },
        // Add more faculty members as needed
      ];

      break;
    case "it":
      slogan = "Leading with Vision, Succeeding with Strategy.";
      author = "Dr.Mumuksha Jain";
      deptImg = "/dept-m-v.jpg";
      aboutDept = "The Department of Management plays a pivotal role in shaping future leaders by providing a comprehensive understanding of business operations, strategic decision-making, and leadership principles. Through a blend of theoretical knowledge and practical application, the department equips students with the necessary skills to thrive in a dynamic and competitive business environment. Its curriculum focuses on areas such as organizational behavior, human resources, finance, and marketing, ensuring a holistic development of managerial competencies. The department fosters critical thinking, innovation, and ethical decision-making, preparing graduates to excel in various industries and contribute meaningfully to their organizations.";
      dept = "Dept. Of Management";
      headD = "Dr.Mumuksha Jain";
      headImg = "/mumuksha.jpg";
      phoneHead = "1234567890";
      emailHead = "abc@gmail.com";
      faculties = [
        {
          image: "/jayant.jpg",
          name: "prof. Adv. Jayant Chourey",
          position: "Assistant Professor ",
          degree: "",
          experience: "5 years",
        },
        {
          image: "",
          name: "Prof. Rimjhim Kushwah",
          position: "Assistant Professor",
          degree: "",
          experience: "",
        },
        // {
        //   image: "",
        //   name: "Emily Johnson",
        //   position: "Project Manager",
        //   degree: "MBA",
        //   experience: "7 years",

        // },
        // Add more faculty members as needed
      ];

      break;

    default:
      break;
  }
 const [active, setActive] = useState(0)



 let deptImgs;
 let mission;
 let vision;
 
 switch (deps) {
   case "me":
     deptImgs = "/civil-img.jpg";
     mission = "The Commerce Department's mission for students is to empower future business leaders with strong foundations in economics, finance, and trade. We focuses on building practical skills, fostering entrepreneurship, and preparing students for global careers in business. Through hands-on learning, industry exposure, and digital innovation, students are equipped to thrive in the fast-paced world of commerce and drive economic growth.";
     vision = "The vision of the Commerce Department is to create a hub of future-ready business leaders by providing innovative education, fostering entrepreneurial spirit, and driving global business insights. It aims to shape students into dynamic professionals through cutting-edge curricular, industry partnerships, and digital transformation, while continuously evolving as a center for commerce research and economic development.";
     break;
   
   case "cse":
     deptImgs = "/mechanical-img.jpg";
     mission = "The mission of the Science Department is to provide a dynamic and rigorous academic environment that fosters curiosity, critical thinking, and scientific inquiry. We are committed to equipping students with a strong foundation in scientific principles and the skills needed to excel in research, innovation, and practical applications of science. By offering hands-on laboratory experiences, interdisciplinary learning opportunities, and exposure to cutting-edge technologies, we aim to develop scientifically literate graduates who are prepared to address real-world challenges. Our department strives to cultivate a passion for discovery, problem-solving, and ethical responsibility in the pursuit of knowledge that benefits society";
     vision = "The vision of the Science Department is to be a leader in scientific education and research, recognized for fostering innovation, collaboration, and a deep understanding of the natural world. We aspire to create an academic community where students and faculty engage in transformative learning and groundbreaking research that pushes the boundaries of scientific knowledge. Through our commitment to excellence, interdisciplinary approaches, and global awareness, we aim to produce graduates who are not only proficient in their scientific disciplines but also capable of addressing complex global challenges, contributing to sustainable development, and improving the quality of life for future generations.";
     break;
   
   case "ece":
     deptImgs = "/mechanical-img.jpg";
     mission = "Making the arts accessible, inclusive, and meaningful through diverse approaches to creative and technological innovation, integrated with visual, oral, and written communication.";
     vision = "The Department of Art and Design will lead in promoting the visual arts by fostering critical and creative thinking, artistic expression, effective communication, cultural awareness, and community engagement.";
     break;
   
   case "eet":
     deptImgs = "/mechanical-img.jpg";
     mission = "To provide technical education that will create mechanical engineers who contribute to the industry and society.";
     vision = "To be a leader in mechanical engineering education, offering innovative solutions for the advancement of technology.";
     break;
   
   case "it":
     deptImgs = "/mechanical-img.jpg";
     mission = "To provide technical education that will create mechanical engineers who contribute to the industry and society.";
     vision = "To be a leader in mechanical engineering education, offering innovative solutions for the advancement of technology.";
     break;
   
  //  case "og":
  //    deptImgs = "/mechanical-img.jpg";
  //    mission = "To provide technical education that will create mechanical engineers who contribute to the industry and society.";
  //    vision = "To be a leader in mechanical engineering education, offering innovative solutions for the advancement of technology.";
  //    break;
   
  //  case "pm":
  //    deptImgs = "/mechanical-img.jpg";
  //    mission = "To provide technical education that will create mechanical engineers who contribute to the industry and society.";
  //    vision = "To be a leader in mechanical engineering education, offering innovative solutions for the advancement of technology.";
  //    break;
   
  //  case "pfm":
  //    deptImgs = "/mechanical-img.jpg";
  //    mission = "To provide technical education that will create mechanical engineers who contribute to the industry and society.";
  //    vision = "To be a leader in mechanical engineering education, offering innovative solutions for the advancement of technology.";
  //    break;
   
  //  case "rep":
  //    deptImgs = "/mechanical-img.jpg";
  //    mission = "To provide technical education that will create mechanical engineers who contribute to the industry and society.";
  //    vision = "To be a leader in mechanical engineering education, offering innovative solutions for the advancement of technology.";
  //    break;
   
  //  case "pharm":
  //    deptImgs = "/mechanical-img.jpg";
  //    mission = "To provide technical education that will create mechanical engineers who contribute to the industry and society.";
  //    vision = "To be a leader in mechanical engineering education, offering innovative solutions for the advancement of technology.";
  //    break;
   
  //  case "anotomy":
  //    deptImgs = "/mechanical-img.jpg";
  //    mission = "To provide technical education that will create mechanical engineers who contribute to the industry and society.";
  //    vision = "To be a leader in mechanical engineering education, offering innovative solutions for the advancement of technology.";
  //    break;
   
  //  case "surgery":
  //    deptImgs = "/electrical-img.jpg";
  //    mission = "To produce skilled electrical engineers who can innovate and contribute to the development of sustainable energy solutions.";
  //    vision = "To lead in electrical engineering education and research for a sustainable and technologically advanced future.";
  //    break;
   
   default:
     deptImgs = "/default-img.jpg";
     mission = "Default Mission";
     vision = "Default Vision";
 }




 const buttons=[
  'About The Department','Course-curriculmn','Mission-Vision','Faculty','Academic Programmes'
 ]
  return (
    <>
    
    <div>
      <SliderMain images={images} heading={dept} />
      <div className='mt-10 flex items-center gap-5'>
      {
        buttons.map((item,index)=>(
          <button onClick={()=>setActive(index)} className='border-2 p-4 rounded-lg bg-blue-500 hover:bg-blue-700' key={index}>{item}</button>
        ))
      }
      </div>
      
      <div className="w-full   ">
        {
          active===0 && (
            <div className="w-full flex px-20 py-10  gap-7">
          <div className="w-2/3 ">
            <div className="pt-3 pb-5">
              <h2 className=" text-4xl text-blue-800 my-5">
                About the Department
              </h2>
              {/* <div className="w-full   mt-5">
                <div className="w-full grid grid-cols-3 gap-5 ">
                  {counter.map((count) => (
                    <DeptCounter
                      key={count.title}
                      initialValue={3}
                      targetValue={count.value}
                      speed={count.speed}
                      textColor={count.textColor}
                      text={count.title}
                      color={count.color}
                    />
                  ))}
                </div>
              </div> */}

              <p className=" mt-2 font-extralight text-sm  text-justify  h-[160px]">
                {aboutDept}
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
          )
        }
        {
          active===1 && (
            <div><Curriculumn/></div>
          )
        }
        {
          active===2 && (
            <div>
              <div className="w-full flex px-20 py-4 gap-7">
          <div className="w-3/5 h-[580px]">
            <div className="relative h-full">
              <Image
                src={deptImg}
                alt="foddiesssss"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
          <div className="w-2/5 flex flex-col gap-10 py-20 justify-between">
                  <div className="w-11/12 mx-auto flex flex-col gap-4">
                    <div className="flex items-center gap-2">
                      <Image src="/mission-icon.png" width={70} height={20} alt="Mission Icon" />
                      <h1 className="text-2xl font-bold">Mission</h1>
                    </div>
                    <div>
                      <p className="text-sm font-extralight">{mission}</p>
                    </div>
                  </div>
                  <div className="w-11/12 mx-auto flex flex-col gap-4">
                    <div className="flex items-center gap-2">
                      <Image src="/vision-icon.png" width={70} height={20} alt="Vision Icon" />
                      <h1 className="text-2xl font-bold">Vision</h1>
                    </div>
                    <div>
                      <p className="text-sm font-extralight">{vision}</p>
                    </div>
                  </div>
                </div>
        </div>
            </div>
          )
        }
        {
          active===3 && (
            <>
            <div className="w-full flex flex-col px-20 gap-4 py-6 ">
          <h1 className="font-bold text-4xl text-blue-700">
            Head Of Department
          </h1>
          <div className="flex justify-between gap-10">
            <div className="w-1/2  flex items-center p-4">
              <div className="w-72 h-72 rounded-full border-2 border-black relative overflow-hidden">
                <Image src={headImg} fill />
              </div>
              <div className="flex flex-col justify-center  p-10">
                <h1 className=" font-semibold text-2xl">{headD}</h1>
                <h2 className="text-lg mb-2">Head Of Department</h2>
                <h1 className="text-sm  mt-1">
                  <FaPhoneAlt className="inline mr-1" />
                  {phoneHead}
                </h1>
                <h1 className="text-sm  mt-1">
                  <MdEmail className="inline mr-1" />
                  {emailHead}
                </h1>
              </div>
            </div>
            <div className="w-1/2  flex flex-col justify-center items-center">
              <p className="p-5 text-3xl text-center"> {slogan}</p>
              <h1 className=" italic  text-2xl">- {author}</h1>
            </div>
          </div>
        </div>
        <h1 className="text-3xl text-center font-semibold border-b">Faculty at LNCPS</h1>
        <div className=" grid ">
        <div>
          {faculties.map((faculty, index) => (
            <div
              className=" mt-1 mb-5  p-2  rounded-lg shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] "
              key={index}
            >
              <div className=" flex gap-6 ">
                <div className="w-48 h-40   relative  overflow-hidden rounded-lg">
                  <Image
                    src={faculty.image}
                    alt="Img Not Found"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className=" py-4">
                  <h1 className="my-2 font-bold text-lg mt-1">
                    <span className="font-semibold"> Name : </span>{" "}
                    {faculty.name}
                  </h1>
                  <h1 className="text-sm mt-1">
                    <span className="font-semibold"> Designation : </span>{" "}
                    {faculty.position}
                  </h1>
                  <h2 className="text-sm">
                    <span className="font-semibold"> Qualification : </span>{" "}
                    {faculty.degree}
                  </h2>
                  <h3 className="text-sm mt-1">
                    <span className="font-semibold"> Experience : </span>{" "}
                    {faculty.experience}
                  </h3>
                  <h3 className="text-sm mt-1">
                    <span className="font-semibold"> Gmail </span>
                    {faculty.email}
                  </h3>
                </div>
              </div>
            </div>
          ))}

          {/* Add more rows as needed */}
        </div>
      </div>
            </>
          )
        }
        {
          active===4 && (
            <>
            <div className="w-full flex flex-col px-20 gap-4 py-6">
          <h1 className="text-4xl text-blue-700 font-bold p-2">
            Academic Programmes
          </h1>
          <div className="w-full flex justify-center gap-20 ">
            <ProgramCard
              course={"Undergraduate"}
              bgcolor={"bg-blue-800"}
              admission={"12th pass "}
              dept={"B.Sc(physics,chemistry,maths,computer-science and biotechnology)"}
            />
            {/* <ProgramCard
              course={"Post-Graduate"}
              bgcolor={"bg-blue-800"}
              admission={"JEE"}
              dept={"civil engineering"}
            /> */}
          </div>
        </div>
            </>
          )
        }
        
        

        
        
        {/* <div className="w-full p-2"></div> */}
      </div>
      <div>
      
    </div>
      
      
    </div>
    </>
  );
}
