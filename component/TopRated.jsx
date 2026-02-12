import { motion } from "framer-motion";
import Link from "next/link";
import useFetch from "@/hook/useFecth";

const TopRated = () => {
    const url = 'https://lux-ventus-api.onrender.com/blogs';
    const { data, loading, error } = useFetch(url) 

    const shuffledNews = [...data].sort(() => 0.5 - Math.random())
    const randomNews = shuffledNews.slice(0, 5);

    if (error) return <p>Error: {error}</p>;

    return (
        <motion.div 
            className="side-bar-left lp:hidden"
            initial= 'hidden'
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.8, delay: 1 }}
        >

            <h2 className="text-2xl font-bold my-5">
                Top Rated
            </h2>

            <div className="w-full mb-6">

                {loading && (
                    <div>

                        <div>
                            
                            <hr className="bg-black bg-opacity-30 w-full h-0.5 my-4"/>

                            <div className="flex gap-x-6 w-full">
                                <div className="bg-gren w-24 h-24 rounded-xl"></div>

                                <div className="flex flex-col justify-around w-[70%]">
                                    <div className="bg-gren py-3 rounded-md"></div>

                                    <div className="flex items-center">
                                        <div className="bg-gren py-2.5 px-10 rounded-md"></div>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div>
                            
                            <hr className="bg-black bg-opacity-30 w-full h-0.5 my-4"/>

                            <div className="flex gap-x-6 w-full">
                                <div className="bg-gren w-24 h-24 rounded-xl"></div>

                                <div className="flex flex-col justify-around w-[70%]">
                                    <div className="bg-gren py-3 rounded-md"></div>

                                    <div className="flex items-center">
                                        <div className="bg-gren py-2.5 px-10 rounded-md"></div>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div>
                            
                            <hr className="bg-black bg-opacity-30 w-full h-0.5 my-4"/>

                            <div className="flex gap-x-6 w-full">
                                <div className="bg-gren w-24 h-24 rounded-xl"></div>

                                <div className="flex flex-col justify-around w-[70%]">
                                    <div className="bg-gren py-3 rounded-md"></div>

                                    <div className="flex items-center">
                                        <div className="bg-gren py-2.5 px-10 rounded-md"></div>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div>
                            
                            <hr className="bg-black bg-opacity-30 w-full h-0.5 my-4"/>

                            <div className="flex gap-x-6 w-full">
                                <div className="bg-gren w-24 h-24 rounded-xl"></div>

                                <div className="flex flex-col justify-around w-[70%]">
                                    <div className="bg-gren py-3 rounded-md"></div>

                                    <div className="flex items-center">
                                        <div className="bg-gren py-2.5 px-10 rounded-md"></div>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div>
                            
                            <hr className="bg-black bg-opacity-30 w-full h-0.5 my-4"/>

                            <div className="flex gap-x-6 w-full">
                                <div className="bg-gren w-24 h-24 rounded-xl"></div>

                                <div className="flex flex-col justify-around w-[70%]">
                                    <div className="bg-gren py-3 rounded-md"></div>

                                    <div className="flex items-center">
                                        <div className="bg-gren py-2.5 px-10 rounded-md"></div>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                )}

                {
                    randomNews.map((blog, index) => (
                        <motion.div 
                            key={index}
                            initial= 'hidden'
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={{
                                hidden: { opacity: 0, x: 75 },
                                visible: { opacity: 1, x: 0 }
                            }}
                            transition={{ duration: 0.8, delay: 1 }}
                        >
                    
                            <hr className="bg-black bg-opacity-30 w-full h-0.5 my-4"/>

                            <div className="flex gap-x-6">

                                <img 
                                    src={blog.image}
                                    alt={index}
                                    className="w-24 h-24 rounded-xl object-cover"
                                />

                                <div className="flex flex-col justify-around">
                                    
                                    <h4 className="text-lg font-bold leading-6">
                                        {
                                            blog.name.length > 30
                                                ? `${blog.name.slice(0, 30)}...`
                                                : blog.name
                                        }
                                    </h4>

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

                            </div>

                        </motion.div>
                    ))
                }

            </div>

        </motion.div>
    );
}
 
export default TopRated;