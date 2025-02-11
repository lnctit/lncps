"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function Footer() {
  const path = usePathname();
  return (
    <>
      {path.includes("admin") || path.includes("payments") ? (
        <></>
      ) : (
        <footer class="bg-blue-600 text-white  py-12">
          <div class="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div class="item">
             
                <div class="item-img w-28 m-auto">
                  <a
                    href="/assets/images/gallery3.jpg"
                    data-fancybox="mygallery"
                    data-caption=""
                    title=""
                  >
                    <img src="/LNCPS-IND.png" class="w-full" alt=""></img>
                  </a>
                </div>
           
              <p class="font-bold text-center mt-6">
                Bhawrasla Sanwer Road, Reoti  Range
                Behind Shree Aurobindo Hospital, Indore (M.P)
                Pin Code-453111

              </p>
              <div class="contact-info text-center mt-8">
                <ul>
                  <li>
                    <i class="bi bi-telephone"></i> +91-8770821382/ +91-9752410844
                  </li>
                  <li>
                    {" "}
                    <i class="bi bi-envelope"></i> lncps2022@gmail.com
                  </li>
                </ul>
              </div>
              <div class="social-links flex justify-center mt-4">
                <a
                  href="https://www.instagram.com/nitrourkela1961/"
                  class="outside-link mr-2"
                  target="_blank"
                  title="Instagram"
                >
                  <i class="fab fa-instagram-square"></i>
                </a>
                <a
                  href="https://twitter.com/nitrourkela"
                  class="outside-link mr-2"
                  target="_blank"
                  title="Twitter"
                >
                  <i class="fab fa-twitter-square"></i>
                </a>
                <a
                  href="https://www.facebook.com/nitrkl1"
                  class="outside-link mr-2"
                  target="_blank"
                  title="Facebook"
                >
                  <i class="fab fa-facebook-square"></i>
                </a>
                <a
                  href="https://www.linkedin.com/school/national-institute-of-technology-rourkela/"
                  class="outside-link mr-2"
                  target="_blank"
                  title="Linkedin"
                >
                  <i class="fab fa-linkedin"></i>
                </a>
                <a
                  href="https://www.youtube.com/@NITROURKELA1961"
                  class="outside-link"
                  target="_blank"
                  title="Youtube"
                >
                  <i class="fab fa-youtube-square"></i>
                </a>
              </div>
            </div>
            <div class="item">
              <h4 class="font-bold">IMPORTANT LINKS</h4>
              <div class="footer-link text-sm">
                <ul>
                  <li className="p-2">
                    <a href="https://mail.nitrkl.ac.in/">Career</a>
                  </li>
                  <li className="p-2">
                    <a href="https://eapplication.nitrkl.ac.in/nitris/">
                      {" "}
                      Gallery
                    </a>
                  </li>
                  <li className="p-2">
                    <a href="/Academic/Holidays"> Campus Life</a>
                  </li>
                  <li className="p-2">
                    <a href="/Academic/AcademicCalendar">Placement Overview</a>
                  </li>
                  <li className="p-2">
                    <a href="/Academic/AcademicTimeTable">
                      {" "}
                      Library
                    </a>
                  </li>
                  <li className="p-2">
                    <a href="/Student/Advertisements">
                      {" "}
                      Online Fee Payment
                    </a>
                  </li>
                  <li className="p-2">
                    <a href="https://website.nitrkl.ac.in/FacultyStaff/Career/">
                      {" "}
                      Contact Us
                    </a>
                  </li>
                  <li className="p-2">
                    <a href="https://website.nitrkl.ac.in/FacultyStaff/Stores-Purchase/Tender/">
                      Annual Reports
                    </a>
                  </li>
                  <li className="p-2">
                    <a href="https://guesthouse.nitrkl.ac.in/">Rules and Regulations</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="item">
              <h4 class="font-bold">OTHER LINKS</h4>
              <div class="footer-link text-sm">
                <ul>
                  <li className="p-2">
                    <a href="/Institute/NIRF">Placement Overview</a>
                  </li>
                  <li className="p-2">
                    <a href="/Institute/NBA"> Leading Recruiters</a>
                  </li>
                  <li className="p-2">
                    <a href="https://www.ftbi-nitrkl.org/"> Central Research Facility</a>
                  </li>
                  <li className="p-2">
                    <a href="https://website.nitrkl.ac.in/Institute/NAD/">
                      {" "}
                      Health Care
                    </a>
                  </li>
                  <li className="p-2">
                    <a href="https://nitrkl.ac.in/UBA/">
                      {" "}
                      Academic Programs
                    </a>
                  </li>
                  <li className="p-2">
                    <a href="https://icc.nitrkl.ac.in/">
                      Admission Process
                    </a>
                  </li>
                  <li className="p-2">
                    <a href="https://www.ics-nitrkl.in/">
                      {" "}
                      Why LNCPS
                    </a>
                  </li>
                  <li className="p-2">
                    <a href="https://nitrkl.ac.in/CRF/">
                      Student Testimonial
                    </a>
                  </li>
                  <li className="p-2">
                    <a href="https://gati.nitrkl.ac.in/">Career Development Cell</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="item">
              {/* <h4 class="font-bold">Photo Gallery</h4> */}
              <div class="grid grid-cols-1 text-2xl gap-8 p-2">
                <div class="item-img">
                  <a
                    href="/assets/images/gallery1.jpg"
                    data-fancybox="mygallery"
                    data-caption=""
                    title=""
                  >
                    <div className="flex gap-2 items-center"><span>Apply Now</span> <span><img src="/right-arrow.svg" className="w-6"></img></span></div>
                  </a>
                </div>
                <div class="item-img">
                  <a
                    href="/assets/images/gallery2.jpg"
                    data-fancybox="mygallery"
                    data-caption=""
                    title=""
                  >
                    <div className="flex gap-2 items-center"><span>About Us Us</span> <span><img src="/right-arrow.svg" className="w-6"></img></span></div>
                  </a>
                </div>

                <div class="item-img">
                  <a
                    href="/assets/images/gallery3.jpg"
                    data-fancybox="mygallery"
                    data-caption=""
                    title=""
                  >
                    <div className="flex gap-2 items-center"><span>Contact Us</span> <span><img src="/right-arrow.svg" className="w-6"></img></span></div>
                  </a>
                </div>

                <div class="item-img">
                  <a
                    href="/assets/images/gallery3.jpg"
                    data-fancybox="mygallery"
                    data-caption=""
                    title=""
                  >

                    <div className="flex gap-2 items-center"><span>Admissions</span> <span><img src="/right-arrow.svg" className="w-6"></img></span></div>
                  </a>
                </div>
                <div class="item-img">
                  <a
                    href="/assets/images/gallery3.jpg"
                    data-fancybox="mygallery"
                    data-caption=""
                    title=""
                  >
                    <div className="flex gap-2 items-center"><span>FAQ&apos;S</span> <span><img src="/right-arrow.svg" className="w-6"></img></span></div>
                  </a>
                </div>

                <div>
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
              <li><a href=""><img src="/svg/yt.svg" className="mb-1 w-7 h-7 rounded-full" /></a></li>

            </ul>
                </div>



              </div>
            </div>
          </div>
          <hr class=" mb-2"></hr>
          <div class="copy-right-other-links container mx-auto">
            <div class="flex justify-between items-center">
              <div class="item-copy p-2 text-sm">
                Copyright © 2024 Lakshmi Narain College of professional studies. All
                Rights Reserved.
              </div>
              <div class="item-othtes-links ">
                <ul className="flex lg:flex-row flex-col px-4 gap-4 text-sm">
                  <li className="p-2">
                    <a href="/Home/TermCondition">Terms &amp; Conditions</a>
                  </li>
                  <li className="p-2">
                    <a href="/Home/HyperLink"> Hyperlinking Policy</a>
                  </li>
                  <li className="p-2">
                    <a href="/Home/PrivacyPolicy"> Privacy Policy</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr class="mt-2"></hr>
          <section class="gov-logo">
            <div class="container mx-auto">
              <div class="owl-carousel owl-theme gov-slider owl-loaded owl-drag"></div>
            </div>
          </section>
        </footer>
      )}
    </>
  );
}