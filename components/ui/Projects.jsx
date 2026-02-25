import React from 'react';
import Image from 'next/image';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";

const Projects = () => {
    const projects = [
        {
            title: "Portfolio",
            description: "A minimalistic portfolio project. Single page app built using Nextjs and hosted on vercel.",
            image: "/images/portfolio.png",
            liveLink: "/",
            codeLink: "https://github.com/M0imaritim/portfolio-2",
        },
        {
            title: "Patient Management System",
            description: "Currently building a web-based system for managing patient records, built with Django and Nextjs.",
            image: "/images/PMS.png",
            liveLink: "#",
            codeLink: "https://github.com/M0imaritim/patient-management-system",
        },
        {
            title: "Maze game",
            description: "A real-time 3D maze exploration game built with C and SDL2, featuring raycasting-based rendering for a pseudo-3D experience.",
            image: "/images/Maze1.png",
            liveLink: "https://www.youtube.com/watch?v=xk7hwCbyz9s",
            codeLink: "https://github.com/M0imaritim/Maze",
        },
        {
            title: "Runsafi Errands",
            description: "A tech-powered errand service platform for Nairobi. Built with Next.js, React, and Tailwind CSS, it features a responsive UI, animated GIF carousel, and smooth scroll interactions for a seamless user experience.",
            image: "/images/runsafi.png",
            liveLink: "#",
            codeLink: "https://github.com/M0imaritim/e-boy",
        },
        {
            title: "The Star Kenya",
            description: "A leading Kenyan news platform delivering breaking news, politics, business, and entertainment coverage. I am part of the development team responsible for building and maintaining this high-traffic digital news site.",
            image: "/images/the-star.png",
            liveLink: "https://the-star.co.ke",
        },
        {
            title: "Mpasho",
            description: "Kenya&apos;s premier celebrity gossip and entertainment news website. I am part of the team developing and maintaining this popular culture and lifestyle platform, known for its vibrant content and engaged readership.",
            image: "/images/mpasho.png",
            liveLink: "https://mpasho.co.ke",
        },
        {
            title: "Radio Jambo",
            description: "The official digital platform for Radio Jambo, one of Kenya&apos;s most popular Swahili radio stations. I am part of the team behind the web presence, supporting live streaming, news, and entertainment features for their online audience.",
            image: "/images/radio-jambo.png",
            liveLink: "https://radio-jambo.co.ke",
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
                            <CardTitle className="text-slate-200">{project.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-slate-200 mb-4">{project.description}</p>
                            {/* Wrapper div required for Next.js Image with fill prop */}
                            <div className="relative w-full h-48 rounded overflow-hidden">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </CardContent>
                        <CardFooter className="flex justify-between">
                            <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                                View Project
                            </a>
                            {project.codeLink && (
                                <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                                    View Code
                                </a>
                            )}
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </section>
    );
};

export default Projects;