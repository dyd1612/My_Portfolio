
import { motion } from 'framer-motion';

const ActivityGraph = () => {
    // Generate mock data for the last 12 months (simplified)
    // This basically creates a visual grid of "commits"
    const weeks = 52;
    const days = 7;

    // Create a predictable pattern of "activity"
    const getActivityLevel = (week: number, day: number) => {
        // Mock logic to generate levels 0-4
        const seed = (week * day * 13) % 100;
        if (seed > 85) return 4;
        if (seed > 60) return 3;
        if (seed > 40) return 2;
        if (seed > 20) return 1;
        return 0;
    };

    const getColor = (level: number) => {
        switch (level) {
            case 4: return 'bg-green-600';
            case 3: return 'bg-green-500';
            case 2: return 'bg-green-400';
            case 1: return 'bg-green-300';
            default: return 'bg-gray-100';
        }
    };

    return (
        <section className="py-16 bg-white border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-10">
                    <h3 className="text-xl font-bold text-gray-900">Coding Activity</h3>
                    <p className="text-gray-500 text-sm">Demonstrating consistent daily coding activity and commitment</p>
                </div>

                <div className="flex justify-center overflow-x-auto pb-4">
                    <div className="flex gap-1">
                        {Array.from({ length: weeks }).map((_, w) => (
                            <div key={w} className="flex flex-col gap-1">
                                {Array.from({ length: days }).map((_, d) => (
                                    <motion.div
                                        key={`${w}-${d}`}
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: (w + d) * 0.005 }}
                                        className={`w-3 h-3 rounded-sm ${getColor(getActivityLevel(w, d))}`}
                                        title={`Activity level: ${getActivityLevel(w, d)}`}
                                    />
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex justify-center items-center gap-2 mt-4 text-xs text-gray-500">
                    <span>Less</span>
                    <div className="w-3 h-3 rounded-sm bg-gray-100"></div>
                    <div className="w-3 h-3 rounded-sm bg-green-300"></div>
                    <div className="w-3 h-3 rounded-sm bg-green-400"></div>
                    <div className="w-3 h-3 rounded-sm bg-green-500"></div>
                    <div className="w-3 h-3 rounded-sm bg-green-600"></div>
                    <span>More</span>
                </div>
            </div>
        </section>
    );
};

export default ActivityGraph;
