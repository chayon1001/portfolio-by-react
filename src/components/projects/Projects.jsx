import React, { useState } from 'react';
import { FaGithub, FaLink, FaClone } from 'react-icons/fa'; // Importing React icons

const projectsData = [
    {
        id: 1,
        title: "Volunteer Management",
        imageUrl: "https://i.ibb.co/7Vq5qPd/photo-1616680214084-22670de1bc82-mark-https-images-unsplash-com-opengraph-logo-png-mark-w-64-mark-al.jpg",
        liveSite: "https://volunteer-management-c92d2.web.app/",
        githubClient: "https://github.com/chayon1001/volunteer-management-client-side",
        githubServer: "https://github.com/chayon1001/volunteer-management-server-side",
        description: "Volunteer management refers to the process of organizing, coordinating, and supporting individuals who offer their time and effort to serve a cause without financial compensation. The primary purpose of volunteer management is to ensure that both volunteers and organizations achieve their goals effectively and efficiently while fostering a meaningful and satisfying experience for everyone involved.",
    },
    {
        id: 2,
        title: "Game Review",
        imageUrl: "https://i.ibb.co/hg6BVMt/photo-1523875194681-bedd468c58bf-mark-https-images-unsplash-com-opengraph-logo-png-mark-w-64-mark-al.jpg",
        liveSite: "https://game-review-86d76.web.app",
        githubClient: "https://github.com/chayon1001/game-review-client",
        githubServer: "https://github.com/chayon1001/game-review-server-side",
        description: '[Game Title] is a captivating journey into a richly detailed world, offering an immersive gaming experience that combines stunning visuals, engaging gameplay mechanics, and a compelling narrative. With a seamless blend of [specific elements like exploration, combat, or puzzles], the game sets a new standard for its genre.',
    },
    {
        id: 3,
        title: "Coupon Collecting",
        imageUrl: "https://i.ibb.co/s1dqsyH/premium-photo-1728544618993-c61624eaefa3-mark-https-images-unsplash-com-opengraph-logo-png-mark-w-64.jpg",
        liveSite: "https://obsequious-grain.surge.sh/",
        githubClient: "https://github.com/chayon1001/coupon-collection",
        description: "The purpose of your project depends on its specific goals and features, but here’s a general outline based on the context of your current project (involving React, Firebase Authentication, AOS animations, and e-commerce-like functionality)",
    }
];

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    const handleToggleDetails = (projectId) => {
        if (selectedProject && selectedProject.id === projectId) {
            setSelectedProject(null); // Hide details if the same project is clicked again
        } else {
            const project = projectsData.find(p => p.id === projectId);
            setSelectedProject(project);
        }
    };

    return (
        <div className="max-w-7xl mx-auto p-6 mt-12">
            <h2 className="text-5xl font-bold text-center text-orange-500 mb-8">Projects</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {projectsData.map((project) => (
                    <div
                        key={project.id}
                        className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-2xl relative group"
                    >
                        <img
                            src={project.imageUrl}
                            alt={project.title}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-6">
                            <h3 className="text-xl font-semibold text-gray-800 mb-4 group-hover:text-orange-500 transition-colors duration-300">
                                {project.title}
                            </h3>

                            <div className="flex flex-col space-y-3 mb-4">
                                <a
                                    href={project.liveSite}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center text-blue-600 hover:text-blue-700 transition-colors duration-300"
                                >
                                    <FaLink className="mr-2" />
                                    Live Site
                                </a>

                                <a
                                    href={project.githubClient}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center text-green-600 hover:text-green-700 transition-colors duration-300"
                                >
                                    <FaGithub className="mr-2" />
                                    GitHub Client
                                </a>

                                <a
                                    href={project.githubServer}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center text-purple-600 hover:text-purple-700 transition-colors duration-300"
                                >
                                    <FaGithub className="mr-2" />
                                    GitHub Server
                                </a>
                            </div>

                            <button
                                onClick={() => handleToggleDetails(project.id)}
                                className="mt-4 bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors duration-300"
                            >
                                More Information
                            </button>
                        </div>

                        {selectedProject && selectedProject.id === project.id && (
                            <div className="absolute top-0 left-0 right-0 bottom-0 bg-white bg-opacity-95 p-6 rounded-lg shadow-xl flex flex-col">
                                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                                    Project Details
                                </h3>
                                <p className="text-gray-700 mb-4">{project.description}</p>

                                <button
                                    onClick={() => handleToggleDetails(project.id)}
                                    className="bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition-colors duration-300"
                                >
                                    Close Details
                                </button>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
