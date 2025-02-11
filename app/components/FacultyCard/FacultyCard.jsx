import Image from "next/image";
import React from "react";

export default function FacultyCard() {
  return (
    <>
    
    <div className=" grid grid-cols-3 gap-5">
      
      <div className=" mt-1 mb-5  p-2  rounded-lg shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] ">
        <div className=" flex gap-6 ">
          <div className="w-48 h-40   relative  overflow-hidden rounded-lg">
            <Image
              src="/muskanjain.jpg"
              alt="foddiesssss"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className=" py-4">
            <h1 className="my-2 font-bold text-lg mt-1">
            Prof. Muskan Jain
            </h1>
            <h1 className="text-sm mt-1">Position: Assistant Professor</h1>
            <h2 className="text-sm">Experience:3 years</h2>
            <h3 className="text-sm mt-1">Qualification:Pursuing  Ph.D from DAVV,M.Com, B.Com</h3>
            {/* <h3 className="text-sm mt-1">Gmail :</h3> */}
          </div>
        </div>
      </div>
      <div className=" mt-1 mb-5  p-2  rounded-lg shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] ">
        <div className=" flex gap-6 ">
          <div className="w-48 h-40   relative  overflow-hidden rounded-lg">
            <Image
              src="/chirag.png"
              alt="Not found"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className=" py-4">
            <h1 className="my-2 font-bold text-lg mt-1">
            Prof.Chirag Sharma
            </h1>
            <h1 className="text-sm mt-1">Position: Assistant Professor</h1>
            <h2 className="text-sm">Experience:3 years</h2>
            <h3 className="text-sm mt-1">Qualification:Pursuing Ph.D from DAVV, M.Com, B.com</h3>
            {/* <h3 className="text-sm mt-1">Gmail :</h3> */}
          </div>
        </div>
      </div>
      {/* <div className=" mt-1 mb-5  p-2  rounded-lg shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] ">
        <div className=" flex gap-6 ">
          <div className="w-48 h-40   relative  overflow-hidden rounded-lg">
            <Image
              src="/welcome.jpeg"
              alt="foddiesssss"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className=" py-4">
            <h1 className="my-2 font-bold text-lg mt-1">
              Prof. Suparbhat Chouksey
            </h1>
            <h1 className="text-sm mt-1">Professor :</h1>
            <h2 className="text-sm">Experience :</h2>
            <h3 className="text-sm mt-1">Physics :</h3>
            <h3 className="text-sm mt-1">Gmail :</h3>
          </div>
        </div>
      </div> */}
      {/* <div className=" mt-1 mb-5  p-2  rounded-lg shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] ">
        <div className=" flex gap-6 ">
          <div className="w-48 h-40   relative  overflow-hidden rounded-lg">
            <Image
              src="/welcome.jpeg"
              alt="foddiesssss"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className=" py-4">
            <h1 className="my-2 font-bold text-lg mt-1">
              Prof. Suparbhat Chouksey
            </h1>
            <h1 className="text-sm mt-1">Professor :</h1>
            <h2 className="text-sm">Experience :</h2>
            <h3 className="text-sm mt-1">Physics :</h3>
            <h3 className="text-sm mt-1">Gmail :</h3>
          </div>
        </div>
      </div> */}
      {/* <div className=" mt-1 mb-5  p-2  rounded-lg shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] ">
        <div className=" flex gap-6 ">
          <div className="w-48 h-40   relative  overflow-hidden rounded-lg">
            <Image
              src="/welcome.jpeg"
              alt="foddiesssss"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className=" py-4">
            <h1 className="my-2 font-bold text-lg mt-1">
              Prof. Suparbhat Chouksey
            </h1>
            <h1 className="text-sm mt-1">Professor :</h1>
            <h2 className="text-sm">Experience :</h2>
            <h3 className="text-sm mt-1">Physics :</h3>
            <h3 className="text-sm mt-1">Gmail :</h3>
          </div>
        </div>
      </div> */}
      {/* <div className=" mt-1 mb-5  p-2  rounded-lg shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] ">
        <div className=" flex gap-6 ">
          <div className="w-48 h-40   relative  overflow-hidden rounded-lg">
            <Image
              src="/welcome.jpeg"
              alt="foddiesssss"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className=" py-4">
            <h1 className="my-2 font-bold text-lg mt-1">
              Prof. Suparbhat Chouksey
            </h1>
            <h1 className="text-sm mt-1">Professor :</h1>
            <h2 className="text-sm">Experience :</h2>
            <h3 className="text-sm mt-1">Physics :</h3>
            <h3 className="text-sm mt-1">Gmail :</h3>
          </div>
        </div>
      </div> */}
      </div>
    </>
  );
}
