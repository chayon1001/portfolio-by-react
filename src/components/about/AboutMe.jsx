import React from 'react';
import profileImage from '../../assets/chayon_2-removebg-preview.png'; // Replace this with your actual image path
import { FaCloudDownloadAlt } from "react-icons/fa";

const AboutMe = () => {
    return (
        <div className="min-h-screen w-10/12 mx-auto mt-12 flex flex-col lg:flex-row items-center justify-center">
            {/* Left Side: Profile Image */}
            <div className="w-full lg:w-1/2 flex relative">
                <img
                    src={profileImage}
                    alt="Profile"
                    className="rounded-2xl w-2/3 lg:w-3/4  transform hover:scale-105 duration-300 relative -top-0 md:-top-24"
                />
            </div>

            {/* Right Side: Information */}
            <div className="w-full lg:w-1/2 text-center lg:text-left mt-10 lg:mt-0 lg:pl-12">
                <h2 className="text-5xl font-bold uppercase text-orange-500 mb-6">About Me</h2>
                <p className="text-2xl text-white font-semibold mb-6">
                    I'm a MERN Stack Developer with 1+ years of experience. My expertise lies in creating seamless and dynamic user interfaces, focusing on HTML, Tailwind CSS, JavaScript, React, and modern backend technologies like MongoDB, Node.js, and Express. I also have hands-on experience with Firebase, Python, C++, and Networking.
                </p>
                <p className="text-xl text-gray-300 mb-10">
                    With 12+ completed projects and 2 satisfied clients, I am passionate about delivering intuitive and visually compelling solutions that meet client needs.
                </p>

                {/* Stats */}
                <div className="flex justify-center lg:justify-start space-x-12 mb-10">
                    <div>
                        <h3 className="text-4xl text-orange-400 font-bold">1+</h3>
                        <p className="text-lg text-white">Years of Experience</p>
                    </div>
                    <div>
                        <h3 className="text-4xl text-orange-400 font-bold">12+</h3>
                        <p className="text-lg text-white">Projects Completed</p>
                    </div>
                    <div>
                        <h3 className="text-4xl text-orange-400 font-bold">2+</h3>
                        <p className="text-lg text-white">Satisfied Clients</p>
                    </div>
                </div>

                {/* Buttons */}
                <div className="flex items-center justify-center lg:justify-start space-x-6">
                    <button className="px-6 py-3 text-xl rounded-full bg-gradient-to-r from-[#dd2476] to-orange-500 text-white font-semibold shadow-lg hover:scale-105 transform duration-300">
                        Contact Me
                    </button>
                    <a
                        href="/resume.pdf" // Update with your resume link
                        className="text-orange-400 text-xl flex items-center space-x-2 hover:underline"
                    >
                        <span>My Resume</span>
                        <FaCloudDownloadAlt />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
