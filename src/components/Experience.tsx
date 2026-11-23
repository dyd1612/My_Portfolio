
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const Experience = () => {
    return (
        <section id="experience" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Career</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                        Professional Experience
                    </p>
                </div>

                <div className="max-w-3xl mx-auto relative border-l-4 border-blue-200 pl-8 ml-4 md:ml-0 space-y-12">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="relative"
                    >
                        <div className="absolute -left-[41px] top-0 h-6 w-6 rounded-full border-4 border-blue-600 bg-white" />

                        <div className="mb-2">
                            <h3 className="text-2xl font-bold text-gray-900">Software Developer</h3>
                            <h4 className="text-xl text-blue-700 font-semibold">Loyolasoft Technology Pvt. Ltd.</h4>
                            <p className="text-gray-500 font-medium mt-1">MAY 2023 – Present | Krishnagiri</p>
                        </div>

                        <div className="text-gray-600 text-lg space-y-3 mt-4">
                            <p>
                                Currently involved in the design and development of College Management System and School Management System modules.
                            </p>
                            <ul className="list-disc list-outside ml-5 space-y-2">
                                <li>Developed reusable partial views and implemented asynchronous data calls for smooth UI interactions.</li>
                                <li>Strong experience in developing data-driven applications, integrating front-end technologies with server-side logic.</li>
                                <li>Proficient in using HTML5, CSS3, JavaScript, jQuery, Bootstrap, and AJAX for responsive and dynamic UI design.</li>
                                <li>Adept at implementing business logic, database design, and performance optimization using stored procedures, views, and triggers.</li>
                                <li>Solid understanding of Software Development Life Cycle (SDLC) and Agile methodology.</li>
                            </ul>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
