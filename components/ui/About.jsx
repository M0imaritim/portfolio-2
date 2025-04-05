import React from 'react';

const About = () => {
    return (
        <section
            id='about'
            className='mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24'
            aria-labelledby='about-heading'
        >
            <header className='sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0'>
                <h2
                    id='about-heading'
                    className='text-sm lg:text-4xl font-bold tracking-widest text-slate-200'
                >
                    About Me
                </h2>
            </header>

            <div>
                <p className='mb-4'>
                    I&apos;m a passionate software engineer with strong skills in Python, C, and JavaScript. I enjoy coding, solving problems, and building meaningful projects.
                </p>
                <p className='mb-4'>
                    Outside of development, I love traveling and long-distance driving—it helps me recharge and think creatively. I&apos;m currently focusing on fitness, and plan to join a boxing club and shooting range. I&apos;m also exploring IoT technology, which I believe is the next frontier of innovation.
                </p>
            </div>
        </section>
    );
};

export default About;
