import React from 'react';

const About = () => {
    return (
        <section id='about' className='mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24'>
            <div className='sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0'>
                <h2 className='text-sm lg:text-4xl font-bold tracking widest text-slate-200'>About Me</h2>
            </div>
            <div>
                <p className='mb-4'>
                I am a passionate software engineer. I have strong skills in Python and C, and a growing knowledge of JavaScript. One of my most notable projects is an e-commerce website built using Django and TailwindCSS, which I deployed on DigitalOcean. For media management, I integrated Cloudinary, and I automated deployments using GitHub pipelines. While I do not have much to showcase yet, I am deeply committed to coding and problem-solving, always excited by the potential of building new things.
                </p>
                <p className='mb-4'>
                Beyond coding, I enjoy traveling and driving long distances, which allows me to clear my mind and find inspiration. I am also focusing on improving my health and fitness, with plans to join a boxing club and a shooting range. My love for learning extends beyond software—I&#39;m currently exploring IoT technology, a field I believe holds great promise for future innovation.
                </p>
                <p className='mb-4'>
                Although I&#39;m relatively new to the world of software development, I am a fast learner, always seeking to expand my knowledge. As I embark on this journey, I&#39;m eager to apply my skills, build more projects, and continue honing my craft in software engineering.
                </p>
            </div>
        </section>
    );
};

export default About;