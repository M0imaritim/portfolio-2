import React from 'react';
import Image from 'next/image';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
const Projects = () => {
    const projects = [
      {
        title: "Portfolio",
        description: "A minimalistic portfolio project. Single page app built using React and hosted on vercel.",
        image: "/images/portfolio", 
        liveLink: "/", 
        codeLink: "https://github.com/M0imaritim/portfolio-2", 
      },
      
    ];
  
    return (
      <section id="projects" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
        <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0">
          <h2 className="text-sm lg:text-4xl font-bold uppercase tracking-widest text-slate-200">
            Projects
          </h2>
        </div>
  
        <div className="mt-8">
          {projects.map((project, index) => (
            <Card key={index} className="flex flex-col mt-8 bg-slate-800 rounded-md transition motion-reduce:transition-none lg:hover:bg-slate-800/50 lg:hover:shadow-[inset_0_1px_0_rgba(148,163,184,0.1)] lg:hover:drop-shadow-lg">
              <CardHeader>
                <CardTitle className="text-slate-200" >{project.title}</CardTitle>
            </CardHeader>
              <CardContent>
                <p className='text-slate-200 mb-4' >{project.description}</p>
                <img src={project.image} alt="Portfolio" />               
                                
              </CardContent>
              <CardFooter className="flex justify-between">
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                  View Project
                </a>
                <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                  View Code
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    );
  };
  
  export default Projects;
  