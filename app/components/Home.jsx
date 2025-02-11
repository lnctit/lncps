"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import Counter from "@/app/components/Counter";
import Card from "@/app/components/Card";
import Seminar from "@/app/components/Seminar";

import Notices from "@/app/components/News-Notices";

import { ParallaxScroll } from "./ParallaxScroll/ParallaxScroll";
import { InfiniteMovingCardsDemo } from "./InfiniteMovingCardsDemo/InfiniteMovingCardsDemo";
import Pahal from "./Pahal/Pahal";
import AcademicProgram from "./AcademicProgram/AcademicProgram";
import Footer from "./Footer/Footer";
import AbouttheInstitute from "./AbouttheInstitute/AbouttheInstitute";
import NumberOne from "./NumberOne/NumberOne";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Set default active tab to 'postgraduate'

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  };
  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 2000); // Adjust the interval as needed (currently set to 5000 milliseconds or 5 seconds)
    return () => {
      clearInterval(intervalId);
    };
  }, [currentSlide]);

  // Function to toggle submenu

  const images = ["/Lncpsbuild.png", "/lncpsbuild2.jpg", "/GRPlncps.jpg"];
  const imagesss = ["/Lncpsbuild.png", "/lncpsbuild2.jpg", "/mdsir.jpg"];

  const EventData = [
    {
      title: "Event 1",
      startDate: "2024-04-10",
      type: "event",
      uuid: "event1_uuid",
    },
    {
      title: "Event 2",
      startDate: "2024-04-15",
      type: "event",
      uuid: "event2_uuid",
    },
    {
      title: "Event 3",
      startDate: "2024-04-20",
      type: "event",
      uuid: "event3_uuid",
    },
    // Add more events as needed
  ];

  const carouselData = [
    {
      id: 1,
      title: "News 1",
      description: "Description for News 1",
      imageUrl: "/Lncpsbuild.png",
    },
    {
      id: 2,
      title: "News 2",
      description: "Description for News 2",
      imageUrl: "/lncpsbuild2.jpg",
    },
    {
      id: 3,
      title: "News 3",
      description: "Description for News 3",
      imageUrl: "/yt.png",
    },
    {
      id: 4,
      title: "News 4",
      description: "Description for News 4",
      imageUrl: "/yt.png",
    },
    // Add more news items as needed
  ];

  const additionalCarouselData = [
    {
      id: 1,
      title: "News 1",
      description: "Description for News 1",
      imageUrl: "/ar-1.jpg",
    },
    {
      id: 2,
      title: "News 2",
      description: "Description for News 2",
      imageUrl: "/ar-3.jpg",
    },
    {
      id: 3,
      title: "News 3",
      description: "Description for News 3",
      imageUrl: "/yt.png",
    },
    {
      id: 4,
      title: "News 4",
      description: "Description for News 4",
      imageUrl: "/ar-2.jpg",
    },
  ];

  const EventsData = [
    {
      title: "Event 1",
      startDate: "2024-04-10",
      type: "event",
      uuid: "event1_uuid",
    },
    {
      title: "Event 2",
      startDate: "2024-04-15",
      type: "event",
      uuid: "event2_uuid",
    },
    {
      title: "Event 3",
      startDate: "2024-04-20",
      type: "event",
      uuid: "event3_uuid",
    },
    {
      title: "Event 1",
      startDate: "2024-04-10",
      type: "event",
      uuid: "event1_uuid",
    },
    {
      title: "Event 2",
      startDate: "2024-04-15",
      type: "event",
      uuid: "event2_uuid",
    },
    {
      title: "Event 3",
      startDate: "2024-04-20",
      type: "event",
      uuid: "event3_uuid",
    },
    // Add more events as needed
  ];

  // const imagess = [
  //   "/speaker.JPG",
  //   "/award.JPG",
  //   "/principals.JPG",
  //   "/carasol2.jpg",
  //   "/grp.jpg",
  //   "/Sports.jpg",
  //   "/LNCPS-sports.jpg",
  //   "/LNCPS-stunt.jpg",
  //   "/mdsir.jpg",
  //   "/carasol1.jpg",
  //   "/studentgrp.jpg",
  //   "/baja2.jpg",
  //   "/mdmaam.jpg",
  //   "/student.jpg",
  //   "/ar-1.jpg",
  //   "/ar-2.jpg",
  //   "/ar-3.jpg",
  //   "/ar-1.jpg",
  //   "/ar-2.jpg",
  //   "/ar-3.jpg",
  //   "/ar-1.jpg",
  //   "/ar-2.jpg",
  //   "/ar-3.jpg",
  // ];

  const ScarouselData = [
    {
      id: 1,
      title: "News 1",
      description: "Description for News 1",
      imageUrl: "/yt.png",
    },
    {
      id: 2,
      title: "News 2",
      description: "Description for News 2",
      imageUrl: "/yt.png",
    },
    {
      id: 3,
      title: "News 3",
      description: "Description for News 3",
      imageUrl: "/yt.png",
    },
    {
      id: 4,
      title: "News 4",
      description: "Description for News 4",
      imageUrl: "/yt.png",
    },
    // Add more news items as needed
  ];
  const additionalCarouselDataseminar = [
    {
      id: 1,
      title: "News 1",
      description: "Description for News 1",
      imageUrl: "/yt.png",
    },
    {
      id: 2,
      title: "News 2",
      description: "Description for News 2",
      imageUrl: "/yt.png",
    },
    {
      id: 3,
      title: "News 3",
      description: "Description for News 3",
      imageUrl: "/yt.png",
    },
    {
      id: 4,
      title: "News 4",
      description: "Description for News 4",
      imageUrl: "/yt.png",
    },

    // Add more news items as needed
  ];

  return (
    <div className=" text-white">
      <div className="md:w-full lg:w-full sm:w-full w-full">
        <Image
          className="duration-500 w-full min-h-[500px] max-h-[500px]"
          src={images[currentSlide]}
          alt="Hero Image"
          width={700}
          height={650}
        />
      </div>

      <NumberOne
        img="/number-1.png"
        title="WHY  LNCPS"
        content="Today, LNCPS Group is one of the Largest and most preferred Educational Group for Engineering, Management, Pharmacy, Medical with ISO-9001 certification and NBA accreditation for many Engineering courses.. Bright young students from all across the country are coming to fulfill their dream in this group."
      />
      <section className="  w-11/12 mx-auto">
        <Notices
          eventData={EventData}
          carouselData={carouselData}
          additionalCarouselData={additionalCarouselData}
        />
      </section>
      <section className="mt-10 w-11/12 mx-auto mb-10">
        <Seminar
          eventData={EventsData}
          carouselData={ScarouselData}
          additionalCarouselData={additionalCarouselDataseminar}
        />
      </section>
      <div className=" w-full ">
        <InfiniteMovingCardsDemo />
      </div>
      {/* <div className=" w-11/12 mx-auto">
        <ParallaxScroll images={imagess} />
      </div> */}
      <AcademicProgram />

      <AbouttheInstitute />

      <section class=" flex  lg:h-[300px] w-11/12 mx-auto mt-10 lg:flex-row flex-col  ">
        <div class="items flex-1 w-full bg-blue-800 text-white p-6 pt-14 text-center  ">
          <h2 className="font-semibold text-2xl">Thought of the Day</h2>
          <h5 className="font-semibold text-xl py-5 text-justify">
            Sometimes the biggest strength can be found in how you understand
            and confront your greatest weaknesses.
          </h5>
          <h5 className="font-semibold text-2xl">
            <i>--Michael Springer--</i>
          </h5>
        </div>
        <div class="item flex-1 w-full bg-blue-800 p-6 pt-14  items-center text-center ">
          <h2 className="font-semibold text-2xl">bg-[#C80D1D] the Day</h2>
          <h5 className="font-semibold text-xl py-5">कार्यात्मक</h5>
          <h5 className="font-semibold text-2xl">FUNCTIONAL</h5>
        </div>
      </section>
      <section className=" w-11/12 mx-auto mt-10">
        <div
          className=""
          style={{
            backgroundImage: "url('/svg/linessvg.svg')",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <div className=" w-8/9   sm:p-4  md:p-4 lg:p-5 p-4  border-black grid md:grid-cols-1 lg:grid-cols-4   sm:grid-cols-1  justify-center items-center   dark:bg-dyellow  ">
            <div className="  ">
              <Counter
                initialValue={0}
                targetValue={2000}
                speed={0.001}
                text="Highest Package"
                textColor="text-blue-800"
                title="First Counter"
                color=""
              />
            </div>
            <div className=" ">
              <Counter
                initialValue={20}
                targetValue={100}
                speed={100}
                text="Dream Company Offers"
                textColor="text-green-700"
                title="Second Counter"
                color=""
              />
            </div>
            <div className="">
              <Counter
                initialValue={5}
                targetValue={15}
                speed={200}
                text="Placements Batch 22-23"
                textColor=""
                title="Third Counter"
                color=""
              />
            </div>
            <div className="">
              <Counter
                initialValue={5}
                targetValue={15}
                speed={200}
                text="LNCPSians Serving MNC"
                textColor="text-blue-800"
                title="Third Counter"
                color=""
              />
            </div>
          </div>
          <div className=" rounded-b-md   sm:p-4  md:p-4 lg:p-5 p-4  border-black grid md:grid-cols-1 lg:grid-cols-4   sm:grid-cols-1  justify-center items-center   dark:bg-dyellow  mb-12">
            <div className=" ">
              <Counter
                initialValue={0}
                targetValue={2000}
                speed={0.001}
                text="NIRF All India Rank"
                textColor="text-blue-800"
                title="First Counter"
                color=""
              />
            </div>
            <div className=" ">
              <Counter
                initialValue={20}
                targetValue={100}
                speed={100}
                text="Companies Visited 2022"
                textColor="text-green-700"
                title="Second Counter"
                color=""
              />
            </div>
            <div className="">
              <Counter
                initialValue={5}
                targetValue={15}
                speed={200}
                text="Offers For Core Branch"
                textColor="text-blue-800"
                title="Third Counter"
                color=""
              />
            </div>
            <div className="">
              <Counter
                initialValue={5}
                targetValue={15}
                speed={200}
                text="Ph.D Faculties"
                textColor="text-blue-800"
                title="Third Counter"
                color=""
              />
            </div>
          </div>
        </div>
      </section>
      <section className="lg:w-11/12 w-full mx-auto mb-10">
        <div
          className=" "
          style={{
            backgroundImage: "url('/svg/linessvg.sv')",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <div
            //
            className="flex lg:flex-row flex-col "
            style={{
              backgroundImage: "url('/HomeBg.svg')",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <div className="md:w-full lg:w-1/2 sm:w-full    ">
              {/* <h3 className="font-bold text-3xl p-5 ">
                Ranking and Recognition &nbsp; &nbsp;&nbsp;
                <Link href="/ranking" className="text-sm">
                  View All...
                </Link>
              </h3> */}
              <Image
                className="duration-200 px-5 min-h-[515px] max-h-[400px] rounded-lg pt-6 flex mx-auto items-center"
                src={imagesss[currentSlide]}
                alt="Hero Image"
                width={700}
                height={650}
              />
            </div>
            <div className="md:w-full lg:w-1/2 sm:w-full  flex flex-col justify-center  ">
              <div className="w-ful rounded-md  sm:p-4  md:p-4 lg:p-5 p-8 shadow-none  border-black grid md:grid-cols-1 lg:grid-cols-2   sm:grid-cols-1 gap-5  justify-center items-center   dark:bg-dyellow">
                <div className=" flex-col justify-center items-center inline-flex sm:w-full md:w-1/3  flex-wrap  ">
                  <Card
                    title="Department"
                    content="10"
                    imageUrl="/department.png"
                  />
                </div>
                <div className=" flex-col justify-center items-center inline-flex sm:w-full md:w-1/3 flex-wrap ">
                  <Card title="Faculty" content=" 70+" imageUrl="/staff.png" />
                </div>
                <div className=" flex-col justify-center items-center inline-flex sm:w-full md:w-1/3 flex-wrap ">
                  <Card
                    title="Faculty"
                    content="3050+"
                    imageUrl="/student-icon.png"
                  />
                </div>
                <div className="  flex-col justify-center items-center inline-flex sm:w-full md:w-1/3  flex-wrap">
                  <Card title="Faculty" content="100" imageUrl="/faculty.png" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
