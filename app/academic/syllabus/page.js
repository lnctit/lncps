import Curriculumn from '@/app/components/Curriculumn/Curriculumn'
import SliderMain from '@/app/components/SliderMain/SliderMain'
import React from 'react'


export default function page() {
  const images = ["/ar-3.jpg"];
  return (
    <div>
      <SliderMain images={images} heading="Syllabus and Curriculum" />
      <Curriculumn/></div>
  )
}
