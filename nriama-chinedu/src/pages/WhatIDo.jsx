import webIcon from '../assets/web logo.png'; 
import appIcon from '../assets/app logo.png';
import graphicsIcon from '../assets/graphics logo.png';

const WhatIDo = () => {
    return (
        <section id="what-i-do" className="py-20 px-6 bg-gray-50">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-2xl font-bold text-secondary text-center relative after:content-[''] after:block after:w-14 after:h-[2px] after:bg-secondary after:mt-1 after:mx-auto mb-10">
                    What I Do
                </h2>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {/* Web Development Card */}
                    <div className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
                        <img src={webIcon} alt="Web Development" className="w-18 h-18 mx-auto mb-4 object-contain"/>
                        <h3 className="text-lg font-bold text-secondary mb-4 uppercase">
                            Web Development
                        </h3>
                        <p className="text-md text-gray-700 leading-relaxed text-justify">
                            I design, build, and maintain dynamic and responsive websites. I create visually appealing and responsive user interfaces using HTML, CSS, Bootstrap, JavaScript, and React while implementing efficient server-side applications and databases with PHP and MySQL. With a strong focus on responsive design and performance optimization, I deploy web applications, manage databases, and document my code.
                        </p>
                    </div>
                    {/* App Development Card */}
                    <div className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
                        <img src={appIcon} alt="App Development" className="w-18 h-18 mx-auto mb-4 object-contain"/>
                        <h3 className="text-lg font-bold text-secondary mb-4 uppercase">
                            App Development
                        </h3>
                        <p className="text-md text-gray-700 leading-relaxed text-justify">
                            I build applications that run on mobile devices, computers, or other platforms. I engage with you to comprehend your project objectives and bring your ideas to life. Leveraging Flutter and Dart (The Cross Platform Language), I code robust and user-friendly mobile applications, integrating the best features with your demanded features.
                        </p>
                    </div>

                    {/* Graphics Design Card */}
                    <div className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
                        <img src={graphicsIcon} alt="Graphics Design" className="w-18 h-18 mx-auto mb-4 object-contain"/>
                        <h3 className="text-lg font-bold text-secondary mb-4 uppercase">
                            Graphics Design
                        </h3>
                        <p className="text-md text-gray-700 leading-relaxed text-justify">
                            I specialize in creating impactful designs that capture attention and communicate clearly. Whether you're a startup, a personal brand, or an established business, I offer tailored design solutions to elevate your visual identity.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhatIDo;