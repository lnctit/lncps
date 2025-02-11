import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <>
      <div
        className="w-full h-36 flex justify-center  items-center"
        style={{
          // backgroundImage: "url('/logo1.png')",
          backgroundColor:"#43b2ff",
          backgroundSize: "cover",
        }}
      >
        <h1 className=" uppercase font-bold text-5xl"> Managing Director</h1>
      </div>
      <div className="w-full  border-2 p-20 ">
        <div className=" flex  rounded-xl bg-blue-100">
          <div className="w-1/3 flex flex-col gap-2 bg-blue-500">
            <div className="w-full h-72 border-2 relative overflow-hidden">
              <Image
                src="/md-sir.JPG"
                alt="chairman"
                width="500"
                height="500"

              />
            </div>
            <div>
              <h1 className="py-2 px-10 font-bold text-2xl">Mr.Suprabhat Chouksey</h1>
              <h2 className="py-2 px-10 text-lg">Managing Director</h2>
              <h3 className="py-2 px-10 "></h3>
            </div>
          </div>
          <div className="w-2/3 p-10">
            <p className="text-sm mb-3">
              Welcome to [College Name]! As the Director, I am delighted to extend my warmest greetings to all of you as we embark on another remarkable academic year.

              Our institution prides itself on being a beacon of knowledge, innovation, and excellence. At -LNCPS indore, we are dedicated to fostering an environment where you can thrive academically, personally, and professionally. Our goal is to provide you with the tools, resources, and support you need to succeed in your educational journey and beyond.

              We believe that education is a powerful catalyst for change, and we are committed to nurturing your intellectual curiosity and critical thinking skills. Our esteemed faculty, cutting-edge facilities, and diverse programs are tailored to ensure that you receive a comprehensive and enriching educational experience. Whether you are pursuing studies in science, arts, technology, business, or any other field, we are here to guide and support you every step of the way.

              Beyond academics, we encourage you to engage in the vibrant campus life that -LNCPS indore offers. Participate in clubs, societies, sports, and cultural activities. These experiences will not only enhance your skills and broaden your horizons but also help you build lasting friendships and create cherished memories.

              As you navigate your college years, remember that the journey is as important as the destination. Embrace the challenges, celebrate the achievements, and learn from every experience. Your time here will shape your future, and we are committed to helping you make the most of it.

              Our doors are always open, and we are here to support you in any way we can. Do not hesitate to reach out for guidance, assistance, or simply a listening ear. Together, we will strive to make -LNCPS,indore a place of inspiration, growth, and success.

              I am excited to witness your academic and personal growth during your time with us. Let us work together to make this academic year a truly exceptional one.

              Wishing you all the best for a rewarding and fulfilling year ahead.
            </p>

            <p className="text-sm mb-3">
              Warm regards,
</p>
              <p className="text-sm mb-3 font-bold">
              Mr. Suprabhat Chouksey
              </p>
              <p>Managing Director</p>
              <p>-LNCPS Group</p>
         
          </div>
        </div>
      </div>
    </>
  );
}
