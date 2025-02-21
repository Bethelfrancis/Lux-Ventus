import { motion } from "framer-motion";
import Link from "next/link";

const Trending = ({ data , loading, error, title }) => {
    const shuffledNews = [...data].sort(() => 0.5 - Math.random())
    const randomNews = shuffledNews.slice(0, 2);

    if (error) return <p>Error: {error}</p>;
    
    return (
        <div className="w-full my-6">

            <h2 className="text-2xl font-bold mb-10">{title}</h2>

            <motion.div 
                className="flex lp:flex-col w-full gap-x-10"
                initial= 'hidden'
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.8, delay: 1 }}
            >

                {loading && (
                    <>
                        <div className="relative bg-white w-full mb-10 shadow-lg rounded-xl">

                            <div className="bg-gren w-full h-trend rounded-xl"></div>
                            <div className="absolute top-5 left-5 bg-gray-900 rounded-3xl px-16 py-4"></div>

                            <div className="px-5 py-4">
                                
                                <div className="flex w-full items-center justify-between">
                                    <div className="flex items-center justify-center gap-x-5">
                                        <div className="bg-gren w-12 h-12 rounded-full"></div>
                                        <div className="bg-gren py-1.5 px-10 rounded-md"></div> 
                                    </div>
                                    <div className="bg-gren py-1.5 px-14 rounded-md"></div>
                                </div>

                                <div className="bg-gren py-3 rounded-md mt-5"></div>
                                <div className="bg-gren py-20 rounded-md my-5"></div>

                                <div className="flex items-center">
                                    <div className="bg-gren py-2.5 px-10 rounded-md"></div>
                                </div>

                            </div>

                        </div>

                        <div className="relative bg-white w-full mb-10 shadow-lg rounded-xl">

                            <div className="bg-gren w-full h-trend rounded-xl"></div>
                            <div className="absolute top-5 left-5 bg-gray-900 rounded-3xl px-16 py-4"></div>

                            <div className="px-5 py-4">
                                
                                <div className="flex w-full items-center justify-between">
                                    <div className="flex items-center justify-center gap-x-5">
                                        <div className="bg-gren w-12 h-12 rounded-full"></div>
                                        <div className="bg-gren py-1.5 px-10 rounded-md"></div> 
                                    </div>
                                    <div className="bg-gren py-1.5 px-14 rounded-md"></div>
                                </div>

                                <div className="bg-gren py-3 rounded-md mt-5"></div>
                                <div className="bg-gren py-20 rounded-md my-5"></div>

                                <div className="flex items-center">
                                    <div className="bg-gren py-2.5 px-10 rounded-md"></div>
                                </div>

                            </div>

                        </div>

                    </>
                )}

                {
                    randomNews && randomNews.map((blog, index) => (
                        <motion.div 
                            className="relative bg-white w-full mb-10 shadow-lg rounded-xl"
                            key={index}
                            initial= 'hidden'
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.1 }}
                            variants={{
                                hidden: { opacity: 0, y: 75 },
                                visible: { opacity: 1, y: 0 }
                            }}
                            transition={{ duration: 0.8, delay: 1 }}
                        >

                            <img 
                                src={blog.image} 
                                alt={index}
                                className="w-full h-trend object-cover rounded-xl" 
                            />

                            <div 
                                className="absolute top-5 left-5 uppercase bg-gray-900 text-white rounded-3xl font-semibold px-7 py-1.5"
                            >
                                {blog.category}
                            </div>

                            <div className="px-5 py-4">
                                
                                <div className="flex w-full items-center justify-between">

                                    <div className="flex items-center justify-center gap-x-5">

                                        <img 
                                            src="/images/blogger-profile-pic.png" 
                                            alt="Blogger Profile Picture"
                                            className="w-12 rounded-full" 
                                        />

                                        <p className="text-black text-opacity-55 font-semibold xs:hidden">
                                            {
                                                blog.author.length > 10
                                                    ? `${blog.author.slice(0, 10)}...`
                                                    : blog.author
                                            }
                                        </p>

                                    </div>

                                    <p className="text-black text-opacity-55 font-semibold">{blog.date}</p>

                                </div>

                                <h2 className="text-2xl font-bold mt-5">
                                    {
                                        blog.name.length > 40
                                            ? `${blog.name.slice(0, 40)}...`
                                            : blog.name
                                    }
                                </h2>

                                <p className="text-lg text-black text-opacity-65 font-medium my-5">
                                    {
                                        blog.description.length > 200
                                            ? `${blog.description.slice(0, 200)}...`
                                            : blog.description
                                    }
                                </p>

                                <Link 
                                    href={`/blog/${blog.id}`}
                                    className="flex items-center gap-x-3"
                                >
                                    <img 
                                        src="/icons/right.png" 
                                        alt="Right Arrow"
                                        className="w-4"
                                    />

                                    <p className="uppercase font-semibold text-gren text-sm">read more</p>
                                </Link>

                            </div>

                        </motion.div>
                    ))   
                }

            </motion.div>

        </div>
    );
}
 
export default Trending;