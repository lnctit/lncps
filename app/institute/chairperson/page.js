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
        <h1 className=" uppercase font-bold text-5xl">chairperson</h1>
      </div>
      <div className="w-full  border-2 p-20 ">
        <div className=" flex  rounded-xl bg-blue-100">
          <div className="w-1/3 flex flex-col gap-2 bg-blue-500">
            <div className="w-full h-72 border-2 relative overflow-hidden">
                <Image
                src="/chairperson.png"
                alt="chairman"
                width="500"
                height="500"

                />
            </div>
            <div>
              <h1  className="py-2 px-10 font-bold text-2xl">Smt. Pratibha Chouksey</h1>
              <h2 className="py-2 px-10 text-lg">Managing Trustee and Chairperson</h2>
              <h3 className="py-2 px-10 "> LNCPS Group</h3>
            </div>
          </div>
          <div className="w-2/3 p-10">
            <p className="text-sm mb-3">
            Life without difficulties is life devoid of bliss.
            Hardships are the stepping stones to success when they are overcome by wisdom.
            In every juncture of life we make friends but they may not necessarily remain loyal to us. 
            Never assess anyone’s personality by the boastful words uttered or the ample amount of money possessed by the person. 
            A person is termed ‘Great’ only when it is acknowledged by others without any selfish motive.
            Every student should thrive to be great and can get his name etched in the history in golden letters as done by Mahatma Gandhi, 
            Lal Bahadur Shastri, Dr. A.P.J. Abdul Kalam and the most recent example is our Prime-Minister Mr. Narendra Modi.
            One may achieve great heights by remaining focused on his prime objective.
            Never leave behind the values one needs to inculcate. 
            Respect your parents, elders and behave well as a civilized person in society.
            My blessings and best wishes are with all the students. Surrender completely to your main duty 
            with honesty and dedication during the student life, which is ‘to study’.
            This will enable you acquire perfect knowledge and achieve great heights.


            
            </p>


            <p className="text-sm mb-3 font-bold" >
            Smt. Pratibha Chouksey
            </p>
            <p className="text-sm mb-3">
            Managing Trustee and Chairperson
            </p>
            <p className="text-sm mb-3">
             LNCPS Group
            </p>
            
          </div>
        </div>
      </div>
    </>
  );
}
