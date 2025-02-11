import Image from "next/image";
import React from "react";

export default function Dma() {
  return (
    <div className=" w-full flex flex-col">
      <section className="bg-white py-12 px-6 lg:px-8" style={{ backgroundImage:'url("/dma.svg")'}}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">
              Director&apos;s Message
            </h2>
            <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              A Word to Our Alumni
            </h3>
          </div>
          <div className="mt-10 w-full  flex  lg:gap-8 lg:items-center">
            <div className=" w-1/3">
              <div className="relative mx-auto  w-72  h-60">
                <Image
                  className=" rounded-md"
                  src="/md-sir.JPG"
                  alt="director"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              
            </div>
            <div className="mt-8 lg:mt-0 w-2/3 flex flex-col">
              <p className="text-lg leading-relaxed text-gray-700">
                Welcome, esteemed alumni! As we look back on our journey, we are
                proud of the milestones we&apos;ve achieved together. Your dedication
                and contributions have been instrumental in shaping our
                institution&apos;s legacy. We look forward to continuing this journey
                with you, celebrating your successes, and supporting your
                endeavors. Thank you for being a part of our community.
              </p>
              <div className=" text-end  px-10 mt-10 ">
                <h4 className="text-xl font-semibold text-gray-900">
                  Mr.Suparbhat Chouksey
                </h4>
                <p className="text-base font-medium text-gray-600">
                  Director, SKC-LNCPS
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
