import { api } from "@/app/lib/middleware/apiInceptor";
import {  SEMINAR } from "@/app/lib/services";
import React from "react";
import SeminarDetails from "@/app/components/Seminar/SeminarDetails";

export default async function page({ params }) {
  const res = await api.get(`${SEMINAR}/${params.id}`);
  console.log(res);
  const seminar = res.data.payload;
  return (
    <div>
      <SeminarDetails
        image={seminar.file}
        title={seminar.title}
        content={seminar.description}
      />
    </div>
  );
}
