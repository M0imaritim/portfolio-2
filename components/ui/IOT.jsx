const IoTSection = () => {
    return (
        <section id="IOT" className="scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0">
                <h2 className="text-sm lg:text-4xl font-bold uppercase tracking-widest text-slate-200">
                    IoT Experience
                </h2>
            </div>
            <div>
                <p className="mt-3 text-lg font-medium tracking leading-tight sm:text-xl text-slate-200 px-2">
                    I am learning and working on Internet of Things (IoT), focusing on:
                </p>
                <ul className="text-left list-disc list-inside space-y-2 text-slate-200 dark:text-gray-300 p-4">
                    <li><strong>Embedded Systems</strong> - Designing circuits and programming microcontrollers.</li>
                    <li><strong>Sensor Integrations</strong> - Connecting and collecting data from sensors.</li>
                    <li><strong>IoT Cloud Platforms</strong> - Sending and analyzing data on the cloud.</li>
                    <li><strong>Automation & Control</strong> - Implementing smart systems.</li>
                </ul>
                <div className="mt-6 px-4">
                    <h3 className="text-lg font-semibold text-slate-200">IoT Projects</h3>
                    <ul className="mt-2 space-y-2">
                        <li>
                            🔗 <a href="https://github.com/M0imaritim/SmartHomeSystems" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                                IoT Smart Home System
                            </a>
                        </li>

                    </ul>
                </div>
                <div className="mt-6 px-4">
                    <h3 className="text-lg font-semibold text-slate-200">🎓 Certification</h3>
                    <p className="mt-2">
                        📜 <a href="https://drive.google.com/file/d/1F1AepLcKeKu7G4XMAlY2YCEDGK4YkwgX/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                            IoT Certification
                        </a>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default IoTSection;
