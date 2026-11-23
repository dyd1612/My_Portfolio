
import { motion } from 'framer-motion';
import { User, MapPin, Phone, Mail } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
                >
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">Professional Objective</h2>
                        <p className="text-lg text-gray-600 leading-relaxed mb-6">
                            Motivated and results-driven <span className="font-semibold text-blue-900">.NET Developer</span> with 2 years of experience in designing, developing, and maintaining web-based applications using <span className="font-semibold text-blue-900">ASP.NET MVC, C#, and SQL Server</span>.
                        </p>
                        <p className="text-lg text-gray-600 leading-relaxed mb-6">
                            Skilled in delivering scalable, high-performance software solutions with a strong focus on clean code, usability, and maintainability. Seeking a challenging position where I can leverage my technical expertise to contribute to innovative software development and organizational success.
                        </p>
                    </div>

                    <div className="bg-gray-50 p-8 rounded-2xl shadow-lg border border-gray-100">
                        <h3 className="text-xl font-bold text-gray-900 mb-6">Personal Details</h3>
                        <div className="space-y-4">
                            <div className="flex items-start space-x-3">
                                <User className="w-5 h-5 text-blue-600 mt-1" />
                                <div>
                                    <p className="text-sm text-gray-500">Name</p>
                                    <p className="font-medium text-gray-900">Yesudass D</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-3">
                                <MapPin className="w-5 h-5 text-blue-600 mt-1" />
                                <div>
                                    <p className="text-sm text-gray-500">Location</p>
                                    <p className="font-medium text-gray-900">Sesurajapuram, Krishnagiri district, Tamil Nadu-6355102</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-3">
                                <Phone className="w-5 h-5 text-blue-600 mt-1" />
                                <div>
                                    <p className="text-sm text-gray-500">Mobile</p>
                                    <p className="font-medium text-gray-900">+91 9566465782</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-3">
                                <Mail className="w-5 h-5 text-blue-600 mt-1" />
                                <div>
                                    <p className="text-sm text-gray-500">Email</p>
                                    <p className="font-medium text-gray-900">yesudass162000@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
