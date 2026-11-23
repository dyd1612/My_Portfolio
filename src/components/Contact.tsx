
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-blue-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl mb-6">
                            Let's Connect
                        </h2>
                        <p className="text-xl text-blue-200 mb-8 max-w-lg">
                            I am currently open to new opportunities. Feel free to reach out if you have a question or want to discuss a potential project or role.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center space-x-4">
                                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-800 flex items-center justify-center">
                                    <Mail className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <p className="text-sm text-blue-300">Email</p>
                                    <a href="mailto:yesudass162000@gmail.com" className="text-lg font-medium hover:text-blue-100 transition-colors">
                                        yesudass162000@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center space-x-4">
                                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-800 flex items-center justify-center">
                                    <Phone className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <p className="text-sm text-blue-300">Phone</p>
                                    <a href="tel:+919566465782" className="text-lg font-medium hover:text-blue-100 transition-colors">
                                        (+91) 9566465782
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center space-x-4">
                                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-800 flex items-center justify-center">
                                    <MapPin className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <p className="text-sm text-blue-300">Location</p>
                                    <p className="text-lg font-medium">
                                        Sesurajapuram, Krishnagiri district, Tamil Nadu-6355102
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-white rounded-2xl p-8 text-gray-900 shadow-xl"
                    >
                        <form className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-gray-50 p-3"
                                    placeholder="Your Name"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-gray-50 p-3"
                                    placeholder="you@example.com"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-gray-50 p-3"
                                    placeholder="How can I help you?"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
                            >
                                Send Message
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
