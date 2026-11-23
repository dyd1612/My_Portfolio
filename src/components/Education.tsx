
import { motion } from 'framer-motion';
import { GraduationCap, School, Award } from 'lucide-react';

const educationData = [
    {
        degree: "B.E - Computer Science",
        institution: "Anna University",
        score: "80.01%",
        icon: GraduationCap,
        color: "text-blue-600",
        bg: "bg-blue-100"
    },
    {
        degree: "HSC (Higher Secondary)",
        institution: "St Joseph's Higher Secondary School",
        location: "Sesurajapuram",
        score: "81.04%",
        icon: School,
        color: "text-purple-600",
        bg: "bg-purple-100"
    },
    {
        degree: "SSLC (Secondary)",
        institution: "St Joseph's Higher Secondary School",
        location: "Sesurajapuram",
        score: "92.02%",
        icon: Award,
        color: "text-green-600",
        bg: "bg-green-100"
    }
];

const Education = () => {
    return (
        <section id="education" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Learning Path</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                        Academic Details
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    {educationData.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.5 }}
                            className="relative pl-8 pb-12 last:pb-0 border-l-2 border-gray-200 last:border-0"
                        >
                            {/* Timeline Dot */}
                            <div className={`absolute -left-[11px] top-0 w-6 h-6 rounded-full border-4 border-white shadow-sm ${item.bg} ${item.color}`} />

                            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                    <div className="flex items-start gap-4">
                                        <div className={`p-3 rounded-lg ${item.bg} ${item.color}`}>
                                            <item.icon size={24} />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-900">{item.degree}</h3>
                                            <p className="text-gray-600 font-medium">{item.institution}</p>
                                            {item.location && <p className="text-sm text-gray-500">{item.location}</p>}
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-lg self-start md:self-center">
                                        <span className="text-sm text-gray-500 font-medium">Score:</span>
                                        <span className={`text-lg font-bold ${item.color}`}>{item.score}</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
