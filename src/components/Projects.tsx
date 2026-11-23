
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Monitor, X, ExternalLink, CheckCircle } from 'lucide-react';

const projects = [
    {
        title: "College Management System",
        shortDescription: "A comprehensive system for managing student lifecycle and academic processes.",
        tags: ["ASP.NET MVC", "SQL Server", "Crystal Reports", "LINQ", "jQuery"],
        challenge: "Managing massive student data (enrollment, attendance, exams) manually was error-prone and slow. Crystal Reports generation was also sluggish due to unoptimized queries.",
        solution: "Implemented a robust ASP.NET MVC architecture with Role-Based Access Control (RBAC). Optimized LINQ queries and indexed SQL tables for faster reporting.",
        impact: "Reduced administrative workload by 40% and improved report generation speed by 3x.",
        features: [
            "Developed modules for student enrollment, examination management, and attendance tracking.",
            "Integrated user roles (Admin, Faculty, Student) with secure authentication.",
            "Implemented asynchronous data loading using jQuery and AJAX."
        ]
    },
    {
        title: "School Management System",
        shortDescription: "An integrated platform to streamline administrative tasks in schools.",
        tags: ["ASP.NET MVC", "SQL Server", "Partial Views", "Stored Procedures", "AJAX"],
        challenge: "The existing system lacked real-time feedback and had redundant page reloads, causing a poor user experience for staff managing fees and timetables.",
        solution: "Redesigned the UI using Partial Views and AJAX for smooth, single-page-like interactions. Migrated complex logic to SQL Stored Procedures.",
        impact: "Improved UI responsiveness significantly and ensured data consistency across modules.",
        features: [
            "Designed core modules including staff management, timetable scheduling, and fee management.",
            "Optimized SQL queries and introduced stored procedures to improve database performance."
        ]
    }
];

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

    return (
        <section id="projects" className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Portfolio</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                        Project Spotlights
                    </p>
                    <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
                        Click on a project to see the Case Study (Challenge, Solution, Impact).
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            layoutId={`project-card-${index}`}
                            onClick={() => setSelectedProject(project)}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.5 }}
                            className="flex flex-col overflow-hidden rounded-2xl shadow-lg bg-white border border-gray-100 cursor-pointer hover:shadow-2xl transition-all transform hover:-translate-y-1"
                        >
                            <div className="p-8 flex-1">
                                <div className="flex items-center space-x-3 mb-4">
                                    <div className="p-2 bg-blue-50 rounded-lg">
                                        <Monitor className="w-6 h-6 text-blue-600" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900">{project.title}</h3>
                                </div>
                                <p className="text-gray-500 mb-6 italic">{project.shortDescription}</p>

                                <div className="flex flex-wrap gap-2 mt-4">
                                    {project.tags.map((tag, tagIdx) => (
                                        <span key={tagIdx} className="inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-blue-100 text-blue-800">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <div className="mt-6 text-blue-600 font-medium flex items-center group">
                                    View Case Study <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
                        onClick={() => setSelectedProject(null)}
                    >
                        <motion.div
                            layoutId={`project-card-${projects.indexOf(selectedProject)}`} // Not strictly necessary for simple modal but good for shared layout if set up correctly
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto relative"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setSelectedProject(null)}
                                className="absolute top-4 right-4 p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
                            >
                                <X className="w-6 h-6 text-gray-600" />
                            </button>

                            <div className="p-8 md:p-10">
                                <h2 className="text-3xl font-bold text-gray-900 mb-4">{selectedProject.title}</h2>
                                <div className="flex flex-wrap gap-2 mb-8">
                                    {selectedProject.tags.map((tag, idx) => (
                                        <span key={idx} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="space-y-8">
                                    <div className="bg-red-50 p-6 rounded-xl border border-red-100">
                                        <h3 className="text-lg font-bold text-red-800 mb-2 flex items-center">
                                            The Challenge
                                        </h3>
                                        <p className="text-gray-700">{selectedProject.challenge}</p>
                                    </div>

                                    <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                                        <h3 className="text-lg font-bold text-blue-800 mb-2 flex items-center">
                                            The Solution
                                        </h3>
                                        <p className="text-gray-700">{selectedProject.solution}</p>
                                    </div>

                                    <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                                        <h3 className="text-lg font-bold text-green-800 mb-2 flex items-center">
                                            The Result & Impact
                                        </h3>
                                        <p className="text-gray-700">{selectedProject.impact}</p>
                                    </div>

                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-4">Key Features Implemented</h3>
                                        <ul className="space-y-3">
                                            {selectedProject.features.map((feature, idx) => (
                                                <li key={idx} className="flex items-start">
                                                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                                                    <span className="text-gray-600">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Projects;
