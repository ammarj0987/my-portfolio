// app/projects/[slug]/page.tsx
import React from "react";
import { projectsList } from '../../data/projects-meta'

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
    <div className="border max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{slug}</h1>
    </div>
  );
}
