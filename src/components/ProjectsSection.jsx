import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
const projects = [
    {
        title: "AI Maker product",
        subtitle: "UX Case Study",
        imgMain:
            "https://images.unsplash.com/photo-1551650975-87deedd944c3",
        imgSmall:
            "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e"
    },
    {
        title: "AI Maker product",
        subtitle: "UI Case Study",
        imgMain:
            "https://images.unsplash.com/photo-1569336415962-a4bd9f69c07b",
        imgSmall:
            "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7"
    },
    {
        title: "AI Maker product",
        subtitle: "UX Case Study",
        imgMain:
            "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e",
        imgSmall:
            "https://images.unsplash.com/photo-1551650975-87deedd944c3"
    }
];

export default function ProjectsSection() {
    return (
        <section className="bg-[#F5F5F5] py-28">
            <div className="max-w-[1200px] mx-auto px-6">

                {/* Header */}
                <div className="text-center mb-16">
                    <span className="border border-gray-300 px-4 py-1 rounded-full text-sm text-gray-600">
                        Portfolio
                    </span>

                    <h2 className="text-4xl font-bold mt-6">
                        Explore our most successful projects
                    </h2>
                </div>

                {/* Cards */}
                <div className="grid md:grid-cols-3 gap-8">

                    {projects.map((project, index) => (

                        <motion.div
                            key={index}
                            whileHover={{ y: -10 }}
                            transition={{ duration: 0.3 }}
                            className="bg-white rounded-2xl p-6 shadow-sm relative"
                        >

                            {/* Arrow button */}
                            <div className="absolute top-5 right-5 bg-black text-white w-10 h-10 rounded-full flex items-center justify-center">
                                <ArrowUpRight size={18} />
                            </div>

                            {/* Title */}
                            <p className="text-gray-400 text-sm">
                                {project.subtitle}
                            </p>

                            <h3 className="font-semibold mb-6">
                                {project.title}
                            </h3>

                            {/* Image stack */}
                            <div className="relative h-[180px] flex items-center justify-center">

                                {/* Main image */}
                                <img
                                    src={project.imgMain}
                                    className="w-[200px] rounded-xl shadow-md"
                                />

                                {/* Small overlay image */}
                                <img
                                    src={project.imgSmall}
                                    className="absolute w-[120px] -right-4 bottom-2 rotate-[-8deg] rounded-xl shadow-lg border border-gray-200"
                                />

                            </div>

                        </motion.div>

                    ))}

                </div>

                {/* Button */}
                <div className="flex justify-center mt-16">
                    <motion.div whileHover={{ scale: 1.05 }}>
                        <Link
                            to="/portfolio"
                            className="bg-black text-white px-8 py-3 rounded-full flex items-center gap-2"
                        >
                            See all projects
                            <ArrowUpRight size={18} />
                        </Link>
                    </motion.div>
                </div>

            </div>
        </section>
    );
} <div className="flex justify-center mt-16">
    <motion.div whileHover={{ scale: 1.05 }}>
        <Link
            to="/portfolio"
            className="bg-black text-white px-8 py-3 rounded-full flex items-center gap-2"
        >
            See all projects
            <ArrowUpRight size={18} />
        </Link>
    </motion.div>
</div>