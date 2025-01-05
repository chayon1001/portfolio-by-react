import React from "react";
import firstImg from "../../assets/chayon_1-removebg-preview.png";
import secondImg from "../../assets/chayon_2-removebg-preview.png";
import {
    FaCloudDownloadAlt,
    FaGithub,
    FaLinkedin,
    FaFacebook,
    FaDiscord,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div className="min-h-screen w-10/12 mx-auto overflow-x-hidden">
            <div className="flex flex-col-reverse lg:flex-row-reverse lg:gap-12 items-center w-full mx-auto mt-8">
                {/* Image Container */}
                <div className="w-full lg:w-1/3 flex justify-center lg:justify-end">
                    <img
                        src={secondImg}
                        className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg rounded-2xl transform -translate-y-5 relative lg:-top-16"
                        alt="Profile"
                    />
                </div>

                {/* Text Content */}
                <div className="w-full lg:w-2/3 text-center lg:text-left">
                    <div className="w-full">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold uppercase text-white">
                            Harishankar Barman
                        </h1>
                        <p className="text-xl sm:text-2xl md:text-3xl lg:text-5xl text-white py-3">
                            I'm a{" "}
                            <span className="text-orange-700 text-2xl sm:text-3xl md:text-5xl lg:text-6xl">
                                Frontend Developer.
                            </span>
                        </p>
                        <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-white py-6 sm:py-10 leading-relaxed">
                            I'm a frontend developer, focused on transforming ideas into
                            visually stunning and functional digital experiences. I am skilled
                            in HTML, CSS, JavaScript, and modern frameworks like React. With a
                            deep understanding of user experience (UX) principles, I ensure
                            that every project I work on is accessible, intuitive, and
                            responsive across all devices.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center gap-4">
                            <Link
                                to="/contact"
                                className="px-6 py-3 text-base sm:text-lg md:text-xl rounded-full bg-gradient-to-r from-[#dd2476] to-orange-500 text-white font-semibold shadow-lg hover:scale-105 transform duration-300"
                            >
                                Contact me
                            </Link>

                            <div className="flex items-center justify-center gap-3 text-base sm:text-lg md:text-xl">
                                <a
                                    href="https://www.resume.com/" 
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3"
                                >
                                    <p className="text-orange-400">My Resume</p>
                                    <FaCloudDownloadAlt />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="flex mt-10 lg:mt-20 items-center justify-center lg:justify-start space-x-6">
                        {/* GitHub */}
                        <a
                            href="https://github.com/chayon1001"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white text-2xl sm:text-3xl hover:text-gray-400 transition"
                        >
                            <FaGithub />
                        </a>

                        {/* LinkedIn */}
                        <a
                            href="https://www.linkedin.com/in/harishankar-barman-045a5b32b/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white text-2xl sm:text-3xl hover:text-blue-600 transition"
                        >
                            <FaLinkedin />
                        </a>

                        {/* Facebook */}
                        <a
                            href="https://www.facebook.com/profile.php?id=100004818454266&mibextid=ZbWKwL"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white text-2xl sm:text-3xl hover:text-blue-500 transition"
                        >
                            <FaFacebook />
                        </a>

                        {/* Discord */}
                        <a
                            href="https://discord.com/channels/@me"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white text-2xl sm:text-3xl hover:text-indigo-500 transition"
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
