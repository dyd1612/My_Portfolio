
import { motion } from 'framer-motion';
import { Zap, Server, ShieldCheck, Users } from 'lucide-react';

const reasons = [
    {
        title: "Full-Stack Mindset",
        description: "I bridge the gap between complex SQL backends and responsive front-end interfaces, ensuring a seamless user experience.",
        icon: Server
    },
    {
        title: "Performance First",
        description: "I write optimized LINQ queries and efficient C# logic to ensure applications run fast and scale well under load.",
        icon: Zap
    },
    {
        title: "Clean Architecture",
        description: "I follow industry best practices and design patterns to create maintainable, readable, and testable codebases.",
        icon: ShieldCheck
    },
    {
        title: "Team Player",
        description: "I collaborate effectively with cross-functional teams, contributing to code reviews and knowledge sharing.",
        icon: Users
    }
];

const WhyHireMe = () => {
    return (
        <section className="py-20 bg-blue-900 text-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-base text-blue-300 font-semibold tracking-wide uppercase">Value Proposition</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
                        Why Hire Me?
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {reasons.map((reason, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="bg-blue-800/50 backdrop-blur-sm p-6 rounded-2xl border border-blue-700/50 hover:bg-blue-800 transition-colors"
                        >
                            <div className="w-14 h-14 bg-blue-600/30 rounded-2xl flex items-center justify-center mb-6 text-blue-300">
                                <reason.icon size={28} />
                            </div>
                            <h3 className="text-xl font-bold mb-3">{reason.title}</h3>
                            <p className="text-blue-100/80 leading-relaxed">
                                {reason.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyHireMe;
