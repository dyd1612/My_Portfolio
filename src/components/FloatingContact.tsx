
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Mail, X, MessageSquare } from 'lucide-react';
import { useState } from 'react';

const FloatingContact = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end space-y-3">
            <AnimatePresence>
                {isOpen && (
                    <>
                        <motion.a
                            initial={{ opacity: 0, y: 10, scale: 0.8 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.8 }}
                            href="mailto:yesudass162000@gmail.com"
                            className="flex items-center bg-white text-gray-700 px-4 py-2 rounded-full shadow-lg border border-gray-100 font-medium hover:bg-gray-50 transition-colors"
                        >
                            <span className="mr-2 text-sm">Email Me</span>
                            <div className="w-8 h-8 rounded-full bg-red-500 flex items-center justify-center text-white">
                                <Mail size={16} />
                            </div>
                        </motion.a>

                        <motion.a
                            initial={{ opacity: 0, y: 10, scale: 0.8 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.8 }}
                            href="https://wa.me/919566465782"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center bg-white text-gray-700 px-4 py-2 rounded-full shadow-lg border border-gray-100 font-medium hover:bg-gray-50 transition-colors"
                        >
                            <span className="mr-2 text-sm">WhatsApp</span>
                            <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white">
                                <MessageCircle size={16} />
                            </div>
                        </motion.a>
                    </>
                )}
            </AnimatePresence>

            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`w-14 h-14 rounded-full shadow-xl flex items-center justify-center text-white transition-all transform hover:scale-105 active:scale-95 ${isOpen ? 'bg-gray-900 rotate-90' : 'bg-blue-600'
                    }`}
            >
                {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
            </button>
        </div>
    );
};

export default FloatingContact;
