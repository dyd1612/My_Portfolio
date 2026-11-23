
import { motion } from 'framer-motion';
import { Code, Database, Globe, Wrench, GitBranch, Terminal } from 'lucide-react';

const skillsData = [
    {
        category: "Programming",
        icon: <Code className="w-6 h-6" />,
        skills: ["C#", "ASP.NET (MVC)", "ASP.NET (REST API)"]
    },
    {
        category: "Web Technologies",
        icon: <Globe className="w-6 h-6" />,
        skills: ["HTML", "JavaScript", "jQuery", "AJAX", "Bootstrap"]
    },
    {
        category: "Database",
        icon: <Database className="w-6 h-6" />,
        skills: ["SQL Server", "MySQL"]
    },
    {
        category: "Tools",
        icon: <Wrench className="w-6 h-6" />,
        skills: ["Visual Studio 2022", "VS Code"]
    },
    {
        category: "Version Control",
        icon: <GitBranch className="w-6 h-6" />,
        skills: ["Git", "GitHub"]
    },
    {
        category: "Primary Skills",
        icon: <Terminal className="w-6 h-6" />,
        skills: [".Net Framework", "C#", "ASP.NET (MVC)", "ASP.NET (Rest API)"]
    }
];

const Skills = () => {
    return (
        <section id="skills" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Expertise</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                        Technical Skills
                    </p>
                    <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
                        A comprehensive toolset for building modern web applications.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skillsData.map((category, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300 border border-gray-100"
                        >
                            <div className="flex items-center space-x-3 mb-4">
                                <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                                    {category.icon}
                                </div>
                                <h3 className="text-lg font-bold text-gray-900">{category.category}</h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill, idx) => (
                                    <span
                                        key={idx}
                                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
