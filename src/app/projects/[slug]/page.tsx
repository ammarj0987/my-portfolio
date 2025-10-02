// app/projects/[slug]/page.tsx
import Link from 'next/link'
import React from "react";
import CarClassification from '@/app/projects/[slug]/car-classification'

interface ProjectPageProps {
  params: { slug: string };
}

// const projects: Record<string, { title: string; content: string }> = {
//   "wheel-classification": {
//     title: "Wheel Classification",
//     content: "This project uses machine learning to classify car wheels...",
//   },
//   "car-social-app": {
//     title: "Car Social App",
//     content: "A social platform for car enthusiasts with collections and profiles...",
//   },
//   "portfolio-site": {
//     title: "Portfolio Website",
//     content: "My personal portfolio built with Next.js, Tailwind, and animations...",
//   },
// };

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  // const project = projects[slug];

  // if (!project) {
  //   return <h1 className="text-center mt-10 text-2xl">Project not found</h1>;
  // }

  return (
    <div className='bg-gray-100 py-6'>
    <div className="font-sans max-w-4xl mx-auto">
      {/* nav */}
      <nav className="flex py-2">
        <p>&lt;</p>
        <Link
          href="/"
          className='text-blue-600 underline mr-1 ml-1'
        >
          home      
        </Link>
        /
        <Link
          href="/#projects"
          className='text-blue-600 underline ml-1 mr-1'
        >
          projects     
        </Link>
        /
        <p className='ml-1'>{slug}</p>
      </nav>
      <div className="rounded-lg bg-gray-200 px-6 py-16">     
        {/* content */}
        {slug == "car-classification" ? (<CarClassification />) : (<></>)}
      </div>
    </div>
    </div>
  );
}
