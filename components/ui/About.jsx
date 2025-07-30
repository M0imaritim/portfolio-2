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
  <p className="mb-4">I solve problems with code. That&apos;s what drives me every day as a backend developer who&apos;s found his groove in Django and PostgreSQL.</p>

  <p className="mb-4">What started as curiosity about how things work under the hood has grown into expertise in building systems that actually last. I&apos;ve spent the last few years knee-deep in everything from ecommerce platforms that handle real transactions to news scrapers that never miss a beat, and affiliate bots that just work without babysitting.</p>

  <p className="mb-4">Recently, I&apos;ve been expanding beyond the backend comfort zone into full-stack territory with React and TailwindCSS. It&apos;s been a learning curve, but there&apos;s something satisfying about controlling the entire user experience from database to interface. I&apos;ve earned my <a href="https://drive.google.com/file/d/1XddbL9xZCQ8dg2EbGjRwXQm1GR5X4_oP/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Full-Stack Development certification</a> to formalize this expertise.</p>

  <p className="mb-4">My development philosophy is straightforward: if it&apos;s worth building, it&apos;s worth building right. That means Docker containers for consistent deployments, comprehensive tests with Django REST Framework, and architectures that won&apos;t fall apart when traffic spikes or requirements change.</p>

  <p className="mb-4">I&apos;ve also ventured into the Internet of Things space, working with embedded systems and sensor networks that bridge the physical and digital worlds. There&apos;s something fascinating about code that interacts with real hardware – whether it&apos;s collecting environmental data or automating physical processes. My <a href="https://drive.google.com/file/d/1F1AepLcKeKu7G4XMAlY2YCEDGK4YkwgX/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">IoT certification</a> backs up this hands-on experience with connected devices and edge computing.</p>

  <p className="mb-4">I learn best with my hands on the keyboard. Give me a problem and some documentation, and I&apos;ll figure out the rest. Whether it&apos;s debugging a multi-service setup at 2 AM or refactoring legacy code that makes my eyes water, I stay calm and work through it systematically.</p>

  <p className="mb-4">What you&apos;ll get working with me is honesty about timelines, code that&apos;s built to be maintained (not just shipped), and someone who takes ownership of their work from concept to deployment. I&apos;m not interested in cutting corners or building technical debt castles.</p>

  <p className="mb-4">I build tools that work, scale when they need to, and make sense to the next developer who has to touch them.</p>
</div>
        </section>
    );
};

export default About;
