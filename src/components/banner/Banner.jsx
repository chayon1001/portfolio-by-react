import React from 'react';
import firstImg from '../../assets/chayon_1-removebg-preview.png';
import secondImg from '../../assets/chayon_2-removebg-preview.png';
import { FaCloudDownloadAlt, FaGithub, FaLinkedin, FaFacebook, FaDiscord } from "react-icons/fa";

const Banner = () => {
    return (
        <div className="min-h-screen w-10/12 mx-auto mt-12">
            <div className="flex flex-col gap-5 lg:flex-row-reverse">
                {/* Image Container */}
                <div className="w-1/3 relative">
                    <img
                        src={secondImg}
                        className="w-full h-full max-w-lg rounded-2xl transform -translate-y-5 relative -top-0 lg:-top-32"
                        alt="Profile"
                    />
                </div>

                {/* Text Content */}
                <div className="w-2/3">
                    <div className="w-full">
                        <h1 className="text-6xl font-bold uppercase text-white">Harishankar Barman</h1>
                        <p className="text-5xl text-white py-3">
                            I'm a <span className="text-orange-700 text-6xl">Frontend Developer.</span>
                        </p>
                        <p className="text-2xl font-semibold text-white py-10">
                            I'm a frontend developer, focused on transforming ideas into visually stunning and functional digital experiences. I am skilled in HTML, CSS, JavaScript, and modern frameworks like React. With a deep understanding of user experience (UX) principles, I ensure that every project I work on is accessible, intuitive, and responsive across all devices.
                        </p>
                        <div className='flex  items-center gap-3'>
                            <div>
                                <button className="px-6 py-3 text-2xl rounded-full bg-gradient-to-r from-[#dd2476] to-orange-500 text-white font-semibold shadow-lg hover:scale-105 transform duration-300">Contact me </button>
                            </div>

                            <div className='flex items-center justify-center gap-3 ml-3 text-2xl'>
                                <p className='text-2xl text-orange-400'>My Resume </p>
                                <FaCloudDownloadAlt />
                            </div>
                        </div>
                    </div>
                    <div className="flex mt-20  items-center space-x-6">
                        {/* GitHub */}
                        <a
                            href="https://github.com/chayon1001"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white text-3xl hover:text-gray-400 transition"
                        >
                            <FaGithub />
                        </a>

                        {/* LinkedIn */}
                        <a
                            href="https://www.linkedin.com/in/harishankar-barman-045a5b32b/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white text-3xl hover:text-blue-600 transition"
                        >
                            <FaLinkedin />
                        </a>

                        {/* Facebook */}
                        <a
                            href="https://www.facebook.com/profile.php?id=100004818454266&mibextid=ZbWKwL"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white text-3xl hover:text-blue-500 transition"
                        >
                            <FaFacebook />
                        </a>

                        {/* Discord */}
                        <a
                            href="https://discord.com/channels/@me"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white text-3xl hover:text-indigo-500 transition"
                        >
                            <FaDiscord />
                        </a>
                    </div>
                </div>
            </div>

            

        </div>
    );
};

export default Banner;
