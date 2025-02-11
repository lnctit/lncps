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
                <h1 className=" uppercase font-bold text-5xl">Principal</h1>
            </div>
            <div className="w-full  border-2 p-20 ">
                <div className=" flex  rounded-xl bg-blue-100">
                    <div className="w-1/3 flex flex-col gap-2 bg-blue-500">
                        <div className="w-full h-72 border-2 relative overflow-hidden">
                            <Image
                                src="/faculty/principle.jpg"
                                alt="img not found"
                                width="500"
                                height="500"

                            />
                        </div>
                        <div>
                            <h1 className="py-2 px-10 font-bold text-2xl">Dr. Indira Dixit</h1>
                            <h2 className="py-2 px-10 text-lg">Principal- Lakshmi Narain college of Professional Studies, Indore </h2>
                            <h3 className="py-2 px-10 "></h3>
                        </div>
                    </div>
                    <div className="w-2/3 p-10">
                        <p className="text-sm mb-3">
                        Dr. Indira Dixit is an academician in the area of Commerce and Management. She is also a trainer and counselor..She has more than 17 years of experience in teaching and Academic.
Her qualifications include M.Com, M.Phil, MBA and Ph. D in Commerce. she is working as Principal in Lakshmi Narain College of Professional studies Indore and also associated with research Foundation of India as MP state coordinator. She has been recognized with various awards in academics. She is research guide in Devi Ahilya University .Dr. Dixit has published more than 40 research papers in reputed International & National UGC CARE and UGC approved referred Journals having ISSN No. and in books having ISBN No. She has also presented 25 research papers in the National &amp; International Conferences held in various institutes. She is invited as a expert, guest in various workshops and FDP Subject to her field. She has also being a Editor for the ISBN Book and Co-Editor for the NAAC sponsored National conference Proceedings in ISBN book. she is associate with various social NGO.



                        </p>
                        <p>
                            <h1>

                                Warm regards,
                            </h1>
                            <h1>

                            Dr. Indira Dixit
                            </h1>
                            <h1>

                                Principal
                            </h1>
                            <h1>

                                LNCPS
                            </h1>
                        </p>


                    </div>
                </div>
            </div>
        </>
    );
}
