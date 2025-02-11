"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Navlink from "./Navlink";

import { FaChevronDown } from "react-icons/fa";
import { usePathname } from "next/navigation";
import { FaHome } from "react-icons/fa";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [openSubMenuId, setOpenSubMenuId] = useState(null);
  const [collegeNameIndex, setCollegeNameIndex] = useState(0);
  const menuId = usePathname();
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);

  const collegeNames = [
    "LAKSHMI NARAIN COLLEGE OF PROFESSIONAL STUDIES",
    " लक्ष्मी नारायण कॉलेज ऑफ प्रोफेशनल स्टडीज ",
  ];

  useEffect(() => {
    // Update isSmallScreen state on window resize
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768); // Adjust the threshold as needed
    };

    // Initial check on component mount
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  let dropdownItems = [
    {
      name: "INSTITUTE",
      values: [
        {
          name: "Welcome to LNCPS",
          link: "/institute/welcome",
        },
        {
          name: "Vision and Mission",
          link: "/institute/mission_vision",
        },
        // {
        //   name: "Former Directors",
        //   link: "/institute/former_directors",
        // },
        {
          name: "Campus and Facilities",
          link: "/institute/campus_facilities",
        },
        {
          name: "Contact Us",
          link: "/institute/contact",
        },
      ],
    },

    {
      name: "Administration",
      values: [
        {
          name: "Board of Governors",
          link: "/institute/bog",
        },
        // {
        //   name: "The Senate",
        //   link: "/institute/senate",
        // },
        {
          name: "Principal",
          link: "/principal",
        },
        {
          name: "Chairperson",
          link: "/institute/chairperson",
        },
        {
          name: "Director",
          link: "/institute/director",
        },
        {
          name: "Finance Committee",
          link: "/institute/fc",
        },
        {
          name: "Building and Work Committee",
          link: "/institute/bwc",
        },
      ],
    },
    {
      name: "Key Documents",
      values: [
        {
          name: "Pahal Editions",
          link: "/students/rules_regulations",
        },
        {
          name: "Annual Reports",
          link: "/institute/annual_reports",
        },
        {
          name: "Approval Documents",
          link: "/approval-document",
        },
      ],
    },
    {
      name: "Other Important Links",
      values: [
        {
          name: "Digital Payments",
          link: "/",
        },
        {
          name: "DAVV Regulations",
          link: "https://forms-peach.vercel.app/",
        },
      ],
    },

    {
      name: "Academic",
      values: [
        {
          name: "Academic Overview",
          link: "/academic/overview",
        },
        {
          name: "Academic Programs",
          link: "/academic/programs",
        },
        {
          name: "Academic Regulations",
          link: "/students/rules_regulations",
        },
        {
          name: "Academic Calendar",
          link: "/academic/calender",
        },
        {
          name: "Curriculum and Syllabus",
          link: "/academic/syllabus",
        },
      ],
    },
    {
      name: "Departments",
      values: [
        {
          name: "Commerce",
          link: "/department/me",
        },
        {
          name: "Computer Science",
          link: "/department/cse",
        },
        {
          name: "Science",
          link: "/department/ece",
        },
        {
          name: "Physical Education",
          link: "/department/eet",
        },
        {
          name: "Humanities",
          link: "/department/it",
        },
      ],
    },
    {
      name: "Facilities",
      values: [
        {
          name: "Central Workshop",
          link: "/academic/central-workshop",
        },
        {
          name: "Central Research Facility",
          link: "/academic/central-research",
        },
        {
          name: "High Performance Computing",
          link: "/academic/hfc",
        },
      ],
    },
    {
      name: "Technical Service Units",
      values: [
        {
          name: "Health Care",
          link: "/health-center",
        },
        {
          name: "Lawn and Garden",
          link: "/academic/lawn",
        },
      ],
    },

    {
      name: "College Committees",
      values: [
        {
          name: "Anti-Ragging Committee",
          link: "/institute/antiragging",
        },
        {
          name: "Website Committee",
          link: "/institute/websitecommittee",
        },
        {
          name: "Exam Committee",
          link: "/institute/examcommittee",
        },
        {
          name: "NCC",
          link: "/institute/nccandnsscommittee",
        },
        {
          name: "NSS",
          link: "/institute/fc",
        },
      ],
    },

    {
      name: "Students",
      values: [
        {
          name: "Why LNCPS",
          link: "/why_skclncps",
        },
        {
          name: "Gallery",
          link: "/gallery",
        },
        {
          name: "Campus Life",
          link: "/student/campuslife",
        },
        {
          name: "Academic Programs",
          link: "/academic/programs",
        },
        {
          name: "Admission Process",
          link: "/admission",
        },
      ],
    },
    {
      name: "Existing Students",
      values: [
        // {
        //   name: " Pahal Editions",
        //   link: "/students/rules_regulations",
        // },
        {
          name: "Academic Calendar",
          link: "/academic/calender",
        },
        // {
        //   name: "Time Table",
        //   link: "/institute/former_directors",
        // },
        {
          name: "Online Fee Payment",
          link: "https://www.pratibhaglobalschool.com/payments/login/40e032b8-a995-47ab-a854-c3aec4812c0e",
        },
      ],
    },
    {
      name: "Other Related Links",
      values: [
        {
          name: "Internship Programs",
          link: "/placementcalender",
        },
        {
          name: "Library",
          link: "/institute/library",
        },
        {
          name: "Career Development Cell",
          link: "/cdc",
        },
      ],
    },
    {
      name: "Placement",
      values: [
        {
          name: "Placement Overview",
          link: "/placementview",
        },
        {
          name: "Career Development Cell",
          link: "/cdc",
        },
        {
          name: "Leading Recruiters",
          link: "/leading_recruiters",
        },
        {
          name: "Regular Activities",
          link: "/regular_activite",
        },
        {
          name: "Placement Calendar and Process",
          link: "/placementcalender",
        },
      ],
    },
    {
      name: "For Students",
      values: [
        {
          name: "Student Testimonial",
          link: "/student_testimonial",
        },
        {
          name: "Career",
          link: "/career/?college=LNCPS",
        },
      ],
    },
    {
      name: "Alumni",
      values: [
        {
          name: "Register Alumni",
          link: "/alumni-form",
        },
        {
          name: "About Alumni Cell",
          link: "/alumni",
        },
        {
          name: "Eminent",
          link: "/eminent",
        },
        {
          name: "Director's Message to Alumni",
          link: "/dma",
        },
      ],
    },
    // {
    //   name: "Resources",
    //   values: [
    //     {
    //       name: "Central Research Facility",
    //       link: "/crf",
    //     },
    //     {
    //       name: "Centre for Technology Innovation and Industry Relations",
    //       link: "/relations",
    //     },
    //     {
    //       name: "High Performance Computing",
    //       link: "/highpc",
    //     },
    //     // {
    //     //   name: "Industrial Consultancy",
    //     //   link: "/ic",
    //     // },
    //   ],
    // },
  ];

  const navItems = [
    {
      main: "Institute",
      child: [
        {
          name: "Institute",
          subchild: [
            {
              name: "Welcome to LNCPS",
              link: "/institute/welcome",
            },
            {
              name: "Vision and Mission",
              link: "/institute/mission_vision",
            },
            // {
            //   name: "Former Directors",
            //   link: "/institute/former_directors",
            // },
            {
              name: "Campus and Facilities",
              link: "/institute/campus_facilities",
            },
            {
              name: "Contact Us",
              link: "/institute/contact",
            },
          ],
        },
        {
          name: "Administration",
          subchild: [
            {
              name: "Board of Governors",
              link: "/institute/bog",
            },
            // {
            //   name: "The Senate",
            //   link: "/institute/senate",
            // },
            {
              name: "Principal",
              link: "/principal",
            },
            {
              name: "Chairperson",
              link: "/institute/chairperson",
            },
            {
              name: "Director",
              link: "/institute/director",
            },
            // {
            //   name: "Finance Committee",
            //   link: "/institute/fc",
            // },
            // {
            //   name: "Building and Work Committee",
            //   link: "/institute/bwc",
            // },
          ],
        },
        {
          name: "Key Documents",
          subchild: [
            {
              name: "Pahal Edition",
              link: "/students/rules_regulations",
            },
            {
              name: "Annual Reports",
              link: "/institute/annual_reports",
            },
            {
              name: "Approval Documents",
              link: "/approval-document",
            },
          ],
        },
        // {
        //   name: "Other Important Links",
        //   subchild: [
        //     {
        //       name: "Digital Payments",
        //       link: "https://www.pratibhaglobalschool.com/payments/login/40e032b8-a995-47ab-a854-c3aec4812c0e",
        //     },
        //     {
        //       name: "DAVV Regulations",
        //       link: "https://forms-peach.vercel.app/",
        //     },
        //   ],
        // },
      ],
    },
    {
      main: "Academics",
      child: [
        {
          name: "Academic",
          subchild: [
            {
              name: "Academic Overview",
              link: "/academic/overview",
            },
            // {
            //   name: "Academic Programs",
            //   link: "/academic/programs",
            // },
            // {
            //   name: "Academic Regulations",
            //   link: "/students/rules_regulations",
            // },
            {
              name: "Academic Calendar",
              link: "/academic/calender",
            },
            {
              name: "Curriculum and Syllabus",
              link: "/academic/syllabus",
            },
          ],
        },
        {
          name: "Departments",
          subchild: [
            {
              name: "Commerce",
              link: "/department/me",
            },
            {
              name: "Science",
              link: "/department/cse",
            },
            {
              name: "Arts",
              link: "/department/ece",
            },
            {
              name: "Journalism",
              link: "/department/eet",
            },
            {
              name: "Dept. Of Management",
              link: "/department/it",
            },
          ],
        },
        {
          name: "Facilities",
          subchild: [
            {
              name: "Central Workshop",
              link: "/academic/central-workshop",
            },
            {
              name: "Central Research Facility",
              link: "/academic/central-research",
            },
            {
              name: "High Performance Computing",
              link: "/academic/hfc",
            },
          ],
        },
        {
          name: "Technical Service Units",
          subchild: [
            {
              name: "Health Care",
              link: "/health-center",
            },
            {
              name: "Lawn and Garden",
              link: "/academic/lawn",
            },
          ],
        },
      ],
    },
    {
      main: "College Committees",
      child: [
        {
          name: "Our Committees",
          subchild: [
            {
              name: "Anti-Ragging Committee",
              link: "/institute/antiragging",
            },
            {
              name: "Website Committee",
              link: "/institute/websitecommittee",
            },
            {
              name: "Exam Committee",
              link: "/institute/examcommittee",
            },
            {
              name: "NCC NSS & Sports Committee",
              link: "/institute/nccandnsscommittee",
            },
            
          ],
        },
        {
          name: "",
          subchild:[
            {
              name: "Cultural & Youth Festival Committee",
              link: "/institute/culturalcommittee",
            },
            {
              name: "Research & Development Committee",
              link: "/institute/researchcommittee",
            },
            {
              name: "Women Development Cell",
              link: "/institute/womendevelopmentcommittee",
            },
            {
              name: "Alumni Committee",
              link: "/institute/alumnicommittee",
            },

          ]
        }
        // {
        //   name: "Departments",
        //   subchild: [
        //     {
        //       name: "Commerce",
        //       link: "/department/me",
        //     },
        //     {
        //       name: "Computer Science",
        //       link: "/department/cse",
        //     },
        //     {
        //       name: "Science",
        //       link: "/department/ece",
        //     },
        //     {
        //       name: "Physical Education",
        //       link: "/department/eet",
        //     },
        //     {
        //       name: "Humanities",
        //       link: "/department/it",
        //     },
        //   ],

        // },
        // {
        //   name: "Facilities",
        //   subchild: [
        //     {
        //       name: "Central Workshop",
        //       link: "/academic/central-workshop",
        //     },
        //     {
        //       name: "Central Research Facility",
        //       link: "/academic/central-research",
        //     },
        //     {
        //       name: "High Performance Computing",
        //       link: "/academic/hfc",
        //     },
        //   ],
        // },
        // {
        //   name: "Technical Service Units",
        //   subchild: [
        //     {
        //       name: "Health Care",
        //       link: "/health-center",
        //     },
        //     {
        //       name: "Lawn and Garden",
        //       link: "/academic/lawn",
        //     },
        //   ],
        // },
      ],
    },
    {
      main: "Students",
      child: [
        {
          name: "Prospective Students",
          subchild: [
            {
              name: "Why LNCPS",
              link: "/why_skclncps",
            },
            {
              name: "Gallery",
              link: "/gallery",
            },
            {
              name: "Campus Life",
              link: "/student/campuslife",
            },
            {
              name: "Academic Programs",
              link: "/academic/programs",
            },
            // {
            //   name: "Admission Process",
            //   link: "/admission",
            // },
          ],
        },
        {
          name: "Existing Students",
          subchild: [
            // {
            //   name: "Pahal Edition",
            //   link: "/students/rules_regulations",
            // },
            {
              name: "Academic Calendar",
              link: "/academic/calender",
            },
            // {
            //   name: "Time Table",
            //   link: "/institute/former_directors",
            // },
            {
              name: "Online Fee Payment",
              link: "https://www.pratibhaglobalschool.com/payments/login/40e032b8-a995-47ab-a854-c3aec4812c0e",
            },
          ],
        },
        {
          name: "Other Related Links",
          subchild: [
            {
              name: "Internship Programs",
              link: "/placementcalender",
            },
            {
              name: "Library",
              link: "/institute/library",
            },
            {
              name: "Career Development Cell",
              link: "/cdc",
            },
          ],
        },
      ],
    },
    {
      main: "Placement",
      child: [
        {
          name: "Overview",
          subchild: [
            {
              name: "Placement Overview",
              link: "/placementview",
            },
            {
              name: "Career Development Cell",
              link: "/cdc",
            },
            {
              name: "Leading Recruiters",
              link: "/leading_recruiters",
            },
            {
              name: "Regular Activities",
              link: "/regular_activite",
            },
            {
              name: "Placement Calendar and Process",
              link: "/placementcalender",
            },
          ],
        },
        {
          name: "For Students",
          subchild: [
            {
              name: "Student Testimonial",
              link: "/student_testimonial",
            },
            {
              name: "Career",
              link: "/career/?college=LNCPS",
            },
          ],
        },
      ],
    },
    {
      main: "Alumni",
      child: [
        {
          name: "Alumni",
          subchild: [
            {
              name: "Register Alumni",
              link: "/alumni-form",
            },
            {
              name: "About Alumni Cell",
              link: "/alumni",
            },
            {
              name: "Eminent",
              link: "/eminent",
            },
            {
              name: "Director's Message to Alumni",
              link: "/dma",
            },
          ],
        },
      ],
    },
    // {
    //   main: "Resources",
    //   child: [
    //     {
    //       name: "Resources",
    //       subchild: [
    //         {
    //           name: "Central Research Facility",
    //           link: "/crf",
    //         },
    //         {
    //           name: "Centre for Technology Innovation and Industry Relations",
    //           link: "/relations",
    //         },
    //         {
    //           name: "High Performance Computing",
    //           link: "/highpc",
    //         },
    //         // {
    //         //   name: "Industrial Consultancy",
    //         //   link: "/ic",
    //         // },
    //       ],
    //     },
    //   ],
    // },
    {
      main: "E-Content",
      child: [
        {
          name: "E-Content",
          subchild: [
            {
              name: "Contents",
              link: "/econtent",
            },
            // {
            //   name: "Industrial Consultancy",
            //   link: "/ic",
            // },
          ],
        },
      ],
    },
  ];

  useEffect(() => {
    setOpenSubMenuId(null);
  }, [menuId]);

  // Function to toggle submenu
  const toggleSubMenu = (submenuId) => {
    setOpenSubMenuId(openSubMenuId === submenuId ? null : submenuId);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCollegeNameIndex((prevIndex) =>
        prevIndex === collegeNames.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const path = usePathname();

  return (
    <>
      {path.includes("admin") || path.includes("payments") ? (
        <></>
      ) : (
        <div className="text-white z-50 w-full">
          <div className="flex items-center justify-between p-2 bg-gradient-to-r from-blue-800 to-blue-800">
            <div className="items-center gap-4 hidden lg:flex">
              <p>Admissions</p>
              <p>Placement</p>
              <p>Careers</p>
              <Link href="/courses-offered">Courese-Offered </Link>
              <Link href="/governing-body">Governing Body </Link>
            </div>

            {/* <div className="flex items-center gap-4">
              <img src="/twitter.png" className="w-8 h-8 rounded-full" />
              <img src="/yt.svg" className="w-8 h-8 rounded-full" />
              {/* <img src="/insta.png" className="w-8 h-8 rounded-full" /> */}
            {/* </div> */}
            <ul className="col-span-2 flex justify-start gap-6 lg:col-span-5 lg:justify-end">
              <li>
                <a
                  href="https://www.facebook.com/lncpsindore"
                  rel="noreferrer"
                  target="_blank"
                  className="text-white transition hover:opacity-75"
                >
                  <span className="sr-only">Facebook</span>

                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </li>

              <li>
                <a
                  href="https://instagram.com/lncps2022"
                  rel="noreferrer"
                  target="_blank"
                  className="text-white transition hover:opacity-75"
                >
                  <span className="sr-only">Instagram</span>

                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </li>

              <li>
                <a
                  href="/"
                  rel="noreferrer"
                  target="_blank"
                  className="text-white transition hover:opacity-75"
                >
                  <span className="sr-only">Twitter</span>

                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
              </li>
              <li>
                <a href="">
                  <img
                    src="/svg/yt.svg"
                    className="mb-1 w-7 h-7 rounded-full"
                  />
                </a>
              </li>

              {/* <li>
                <Link
                  href="/"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  <span className="sr-only">GitHub</span>

                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </li>

              <li>
                <Link
                  href="/"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  <span className="sr-only">Dribbble</span>

                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </li> */}
            </ul>

            <div className="flex gap-2">
              <Link
                className="text-xs lg:px-4  lg:py-2 p-2  leading-none rounded-full hover:bg-green-300 hover:text-black border-2"
                href="/loginPage"
              >
                STAFF LOGIN
              </Link>
              <Link
                className="text-xs lg:px-4  lg:py-2 p-2  leading-none rounded-full hover:bg-green-300 hover:text-black border-2"
                href="http://1.22.218.13/AccSoft2/Login.aspx"
                target="_blank"
              >
                LOGIN
              </Link>
            </div>
            {isSmallScreen && (
              <div className="lg:hidden text-center">
                <button className="text-white p-2 " onClick={toggleMenu}>
                  {/* You can use any menu icon here */}
                  <button className="relative group">
                    <div className="relative flex overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all bg-transparent ring-0 ring-gray-300 hover:ring-8 group-focus:ring-4 ring-opacity-30 duration-200 shadow-md">
                      <div className="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden">
                        <div className="bg-white h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:rotate-[42deg]"></div>
                        <div className="bg-white h-[2px] w-1/2 rounded transform transition-all duration-300 group-focus:-translate-x-10"></div>
                        <div className="bg-white h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:-rotate-[42deg]"></div>
                      </div>
                    </div>
                  </button>
                </button>
              </div>
            )}
            {isSmallScreen && (
              <Sidebar
                isOpen={isMenuOpen}
                onClose={closeMenu}
                dropdownItems={dropdownItems}
              />
            )}
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-blue-800 w-full">
            <div className="w-9/12 mx-auto flex items-center justify-between px-4 py-2">
              <div className="flex items-center gap-4 lg:flex-row flex-col">
                <div className="w-[90px] h-[91px] relative">
                  <Image
                    src="/LNCPS-IND.png"
                    layout="fill"
                    objectFit="contain"
                    alt="Logo"
                  />
                </div>
                <h1 className="text-2xl font-semibold">
                  {collegeNames[collegeNameIndex]}
                </h1>
                <div className="slogan">
                  An Institute of National Importance
                </div>
              </div>

              {/* <div>
          <input
            type="text"
            placeholder="Search"
            className="px-4 py-2 rounded-full border border-white focus:outline-none focus:border-gray-300"
          />
        </div> */}
            </div>
          </div>

          {!isSmallScreen && (
            <div className="w-full bg-gradient-to-r from-blue-600 to-blue-600">
              <div className="flex flex-wrap w-full mx-auto gap-4 justify-center bg-blue-800 relative items-center">
                <Link href="/" className="text-3xl p-1">
                  <FaHome className="hover:scale-105 duration-500 hover:text-gray-400 cursor-pointer" />
                </Link>
                {navItems.map((item, index) => {
                  let dropdownWidth;
                  let dropdownLeft;
                  switch (item.main) {
                    case "Institute":
                      dropdownWidth = "w-[950px]";
                      dropdownLeft = "left-[-79px]";
                      break;
                    case "Academics":
                      dropdownWidth = "w-[870px]";
                      dropdownLeft = "left-[-460px]";
                      break;
                    case "College Committees":
                      dropdownWidth = "w-[500px]";
                      dropdownLeft = "left-[-460px]";
                      break;
                    case "Students":
                      dropdownWidth = "w-[690px]";
                      dropdownLeft = "left-20";
                      break;
                    case "Placement":
                      dropdownWidth = "w-[590px]";
                      dropdownLeft = "left-30";
                      break;
                    case "Alumni":
                      dropdownWidth = "w-60";
                      dropdownLeft = "left-40";
                      break;
                    // case "Resources":
                    //   dropdownWidth = "w-[300px]";
                    //   dropdownLeft = "left-50";
                    //   break;
                    default:
                      dropdownWidth = "w-64";
                      dropdownLeft = "left-[-50px]";
                  }

                  return (
                    <div key={index} className="relative group z-50">
                      <Link
                        href="#"
                        className={`text-white font-semibold text-lg hover:text-gray-300 hover:bg-blue-800 flex gap-2 items-center px-3 py-4  ${
                          openSubMenuId === item.main ? "bg-blue-500" : ""
                        }`}
                        onClick={() => toggleSubMenu(item.main)}
                      >
                        {item.main}
                        <FaChevronDown size={15} />
                      </Link>

                      <div
                        className={`absolute top-full mt-2 p-3 bg-white shadow-lg rounded flex ${dropdownWidth} ${
                          openSubMenuId === item.main ? "" : "hidden"
                        }`}
                        style={{ left: dropdownLeft }}
                      >
                        {item.child.map((link, index) => (
                          <div key={index} className="p-2">
                            <h4 className="text-blue-800 font-bold text-lg">
                              <Link href="#">{link.name}</Link>
                            </h4>
                            <ul className="mt-2 space-y-2">
                              {link.subchild.map((navlink, index) => (
                                <li key={index}>
                                  <Navlink
                                    name={navlink.name}
                                    link={navlink.link}
                                  />
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
}

const Sidebar = ({ isOpen, onClose, dropdownItems }) => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const router = useRouter();

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };
  // Sidebar component
  const handleSidebarItemClick = (path) => {
    // Navigate to the specified path using router.push
    router.push(path);
    // Close the sidebar
    onClose();
  };

  return (
    <div>
      {isOpen && (
        <div className="lg:hidden fixed inset-0 z-50 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="fixed inset-y-0 right-0 max-w-full flex ">
              <div className="w-screen max-w-md">
                <div className="h-full flex flex-col bg-white shadow-xl overflow-y-scroll">
                  <button
                    onClick={onClose}
                    className="bg-black p-3 text-white text-xl font-bold"
                  >
                    Close
                  </button>
                  <div className="p-6">
                    {/* Dropdown items and values */}
                    <Link href="/">
                      <div className="font-bold p-5 text-lg">Home</div>
                    </Link>
                    {dropdownItems.map(({ name, values }, index) => (
                      <div key={name}>
                        <div
                          onClick={() => toggleDropdown(index)}
                          className="flex items-center cursor-pointer justify-between p-5"
                        >
                          <p className="font-bold text-blue-800">{name}</p>
                          {values.length > 0 && (
                            <div
                              className={`w-6 h-6 transition-transform border-2 ${
                                activeDropdown === index
                                  ? "transform rotate-180 border-2"
                                  : ""
                              }`}
                            >
                              {/* Insert your SVG icon here */}
                              <svg
                                fill="none"
                                stroke="blue"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M19 9l-7 7-7-7"
                                />
                              </svg>
                            </div>
                          )}
                        </div>
                        {activeDropdown === index && values.length > 0 && (
                          <ul className=" text-black">
                            {values.map((value, index) => (
                              <li key={index} className="py-2">
                                {/* Use handleSidebarItemClick to navigate and close the sidebar */}
                                <div
                                  onClick={() =>
                                    handleSidebarItemClick(value.link)
                                  }
                                  className="p-3 shadow-md rounded-lg  text-blue-800"
                                >
                                  {value.name}
                                </div>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                    <Link href="/contact-us">
                      <div className="font-bold p-5 text-lg">Contact Us</div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
