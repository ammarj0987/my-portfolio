// app/projects/[slug]/page.tsx
import Link from 'next/link'
import { notFound } from "next/navigation";

import CarClassification from '@/app/projects/[slug]/car-classification'
import RedditBot from '@/app/projects/[slug]/reddit-bot';
import UWPathfinder from '@/app/projects/[slug]/uw-pathfinder';

import { projectsList } from '../../data/projects-meta'

type Project = {
  slug: string;
  title: string;
  description: string;
};

export async function generateStaticParams() {
  return projectsList.map((project: Project) => ({
    slug: project.slug,
  }));
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  // const { slug } = await params;
  // const project = projects[slug];
  const project = projectsList.find((p: Project) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className='min-h-screen bg-gray-100 py-6'>
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
        <p className='ml-1'>{project?.slug}</p>
      </nav>
      <div className="rounded-lg bg-gray-200 px-6 py-16">     
        {/* content */}
        {project?.slug == "car-classification" ? (<CarClassification />) : (<></>)}
        {project?.slug == "reddit-bot" ? (<RedditBot />) : (<></>)}
        {project?.slug == "uw-pathfinder" ? (<UWPathfinder />) : (<></>)}
      </div>
    </div>
    </div>
  );
}
