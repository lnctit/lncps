import Image from 'next/image'
import React from 'react'
import RuleCard from '../RuleCard/RuleCard'

export default function Pahal() {
  return (
    <>
     <div className="w-full h-36 bg-cover capitalize flex justify-center items-center"
        style={{ backgroundImage: `url('/about-banner.jpg')` }}>
          <h2 className="font-bold text-3xl w-4/5 uppercase text-center text-white">
        pahal - LNCPS INDORE
        </h2>
          </div>
    <h1 className='text-4xl text-black font-semibold p-10'>Pahal</h1>
    <div className="w-full mx-auto flex relative">
        
        <div className="w-2/3 px-10 pt-[36px]  grid grid-cols-3  gap-5 justify-evenly pb-10 ">
          <RuleCard
            bgcolor="bg-red-200"
            link="https://drive.google.com/file/d/18MapckiDFWLhtZuMhEj4d5Pcx5ReHUIw/view?usp=sharing"
            heading="Pahal 1"
          />
          <RuleCard bgcolor="bg-green-200" link="https://drive.google.com/file/d/1f2rMc8Tt1WJWCAgDJV6IjNleinyeSwlL/view" heading="Pahal 2 " />
          <RuleCard bgcolor="bg-gray-200" link="https://drive.google.com/file/d/1KNcGwpKq6B1dIrpO5x5ADGCnM3TaE3o8/view" heading="Pahal 3" />
          <RuleCard bgcolor="bg-blue-300" link="https://drive.google.com/file/d/1BABCug7-rijbPa5tS1u5l6pRPulWiDqE/view?usp=sharing" heading="Pahal 4" />
          <RuleCard bgcolor="bg-pink-200" link="https://drive.google.com/file/d/1TvZlbth4wsHYpvb_ONPTe4ztM7RdH-cf/view?usp=sharing" heading="Pahal 5" />
          <RuleCard bgcolor="bg-yellow-200" link="https://drive.google.com/file/d/1roUsXEyLey_mWMfS4F3EzxzQLpPgRj5o/view?usp=sharing" heading="Pahal 6" />
         
        </div>
        <div className="w-1/3 h-[600px] sticky top-20 left-0 p-10 ">
          <div className="relative h-full ">
            <Image
              src="/welcome.jpeg"
              alt="foddiesssss"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </div>
    </>
  )
}
