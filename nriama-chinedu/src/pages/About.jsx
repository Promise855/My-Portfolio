import htmlLogo from '../assets/HTML.png';
import cssLogo from '../assets/CSS.png';
import jsLogo from '../assets/JavaScript.png';
import bootstrapLogo from '../assets/Bootstrap.png';
import reactLogo from '../assets/React.png';
import mysqlLogo from '../assets/MySQL.png';

const about = () => {
  return (
    <section id="about-skills" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl md:text-2xl font-bold text-secondary inline-block relative after:content-[''] after:block after:w-14 after:h-[2px] after:bg-secondary after:mt-1 after:mx-auto mb-10">
                About Me
            </h2>
            <div className="max-w-5xl mx-auto mb-18">
                <p className="text-lg md:text-lg text-gray-700 leading-relaxed">
                    My name is Nriama Chinedu Promise. I am an enthusiastic and motivated Computer Science professional 
                    with expertise in website and application development and a passion for innovative technologies. Specializing in 
                    both front-end and back-end development, I'm currently exploring fintech and blockchain to create secure, 
                    user-centric solutions. As a quick learner with strong problem-solving skills, I'm committed to delivering 
                    impactful projects and continuous professional growth. <br></br>I use the following technologies:
                </p>
            </div>

            {/* Skills List */}
            <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-6 gap-8 justify-items-center">
                <div className="flex flex-col items-center">
                    <img src={htmlLogo} alt="HTML" className="w-20 h-20 md:w-24 md:h-24 object-contain mb-4 transition-transform hover:scale-110" />
                    <span className="text-lg font-semibold text-gray-800">HTML</span>
                </div>
                <div className="flex flex-col items-center">
                    <img src={cssLogo} alt="CSS" className="w-20 h-20 md:w-24 md:h-24 object-contain mb-4 transition-transform hover:scale-110" />
                    <span className="text-lg font-semibold text-gray-800">CSS</span>
                </div>
                <div className="flex flex-col items-center">
                    <img src={jsLogo} alt="JavaScript" className="w-20 h-20 md:w-24 md:h-24 object-contain mb-4 transition-transform hover:scale-110" />
                    <span className="text-lg font-semibold text-gray-800">JavaScript</span>
                </div>
                <div className="flex flex-col items-center">
                    <img src={bootstrapLogo} alt="BOOTSTRAP" className="w-20 h-20 md:w-24 md:h-24 object-contain mb-4 transition-transform hover:scale-110" />
                    <span className="text-lg font-semibold text-gray-800">Bootstrap</span>
                </div>
                <div className="flex flex-col items-center">
                    <img src={reactLogo} alt="React" className="w-20 h-20 md:w-24 md:h-24 object-contain mb-4 transition-transform hover:scale-110" />
                    <span className="text-lg font-semibold text-gray-800">React</span>
                </div>
                <div className="flex flex-col items-center">
                    <img src={mysqlLogo} alt="MySQL" className="w-20 h-20 md:w-24 md:h-24 object-contain mb-4 transition-transform hover:scale-110" />
                    <span className="text-lg font-semibold text-gray-800">MySQL</span>
                </div>
            </div>
        </div>
    </section>
  );
};

export default about;