import React from 'react';

const About = () => {
    return (
        <section id='about' className='mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24'>
            <div className='sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0'>
                <h2 className='text-sm lg:text-4xl font-bold tracking widest text-slate-200'>About Me</h2>
            </div>
            <div>
                <p className='mb-4'>
                    I am a passionate software engineer. I have strong skills in Python, C, and JavaScript. I am deeply committed to coding and problem-solving. I am always excited by the potential of building new things.
                </p>
                <p className='mb-4'>
                    Beyond coding, I enjoy traveling and driving long distances, which allows me to clear my mind and find inspiration. I am also focusing on improving my health and fitness, with plans to join a boxing club and a shooting range(just like starting another project). My love for learning extends beyond software—I am fascinated by IoT technology, a field I believe holds great promise for future innovation.
                </p>

            </div>
        </section>
    );
};

export default About;