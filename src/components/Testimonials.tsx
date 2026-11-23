
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
    {
        quote: "Yesudass delivered high-quality code that perfectly aligned with our business requirements. His ability to optimize database performance was impressive.",
        author: "Project Manager",
        role: "Loyolasoft Technology"
    },
    {
        quote: "An excellent problem solver. He transformed our slow legacy modules into fast, modern interfaces using AJAX and Partial Views.",
        author: "Senior Developer",
        role: "Loyolasoft Technology"
    },
    {
        quote: "Deep understanding of the .NET ecosystem. He built the entire fee management module from scratch with zero critical bugs.",
        author: "Client Feedback",
        role: "School Management System"
    }
];

const Testimonials = () => {
    return (
        <section className="py-20 bg-blue-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Feedback</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                        What People Say
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.5 }}
                            className="bg-white p-8 rounded-2xl shadow-lg relative"
                        >
                            <Quote className="absolute top-6 left-6 w-8 h-8 text-blue-100" />
                            <p className="text-gray-600 italic mb-6 relative z-10 pt-4">
                                "{item.quote}"
                            </p>
                            <div className="flex items-center">
                                <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-lg">
                                    {item.author[0]}
                                </div>
                                <div className="ml-4">
                                    <h4 className="text-sm font-bold text-gray-900">{item.author}</h4>
                                    <p className="text-xs text-gray-500">{item.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
