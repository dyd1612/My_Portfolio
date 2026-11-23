
import { motion } from 'framer-motion';
import { Database, Layout, Search, Code, Rocket, CheckCircle } from 'lucide-react';

const steps = [
    {
        title: "Analysis",
        description: "Understanding requirements and identifying key objectives.",
        icon: Search
    },
    {
        title: "Design",
        description: "Database schema creation and UI/UX wireframing.",
        icon: Layout
    },
    {
        title: "Development",
        description: "Writing clean, scalable C# code and building APIs.",
        icon: Code
    },
    {
        title: "Optimization",
        description: "Refining SQL queries and enhancing performance.",
        icon: Database
    },
    {
        title: "Testing",
        description: "Rigorous testing to ensure bug-free deployment.",
        icon: CheckCircle
    },
    {
        title: "Deployment",
        description: "Launching the application and monitoring stability.",
        icon: Rocket
    }
];

const DevWorkflow = () => {
    return (
        <section id="workflow" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">My Process</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                        Development Workflow
                    </p>
                    <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
                        A structured approach ensuring quality from concept to code.
                    </p>
                </div>

                <div className="relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-gray-100 -translate-y-1/2 z-0"></div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 relative z-10">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                className="bg-white p-6 rounded-xl border border-gray-100 shadow-lg hover:shadow-xl transition-shadow text-center"
                            >
                                <div className="w-12 h-12 mx-auto bg-blue-50 rounded-full flex items-center justify-center mb-4 text-blue-600">
                                    <step.icon size={24} />
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                                <p className="text-sm text-gray-500 leading-relaxed">
                                    {step.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DevWorkflow;
