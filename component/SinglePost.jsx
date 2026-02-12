import { motion } from "framer-motion";
import Link from "next/link";
import useFetch from "@/hook/useFecth";

const SingePost = () => {
    const url = 'https://lux-ventus-api.onrender.com/blogs';
    const { data, loading, error } = useFetch(url) 

    const shuffledNews = [...data].sort(() => 0.5 - Math.random())
    const randomNews = shuffledNews.slice(0, 1);

    if (error) return <p>Error: {error}</p>;

    return (
        <motion.div
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
                <div className="relative bg-white w-full mb-10 shadow-lg rounded-xl">

                    <div className="bg-gren w-full h-single min-h-full rounded-xl"></div>
                    <div className="absolute top-5 left-5 bg-gray-900 rounded-3xl px-16 py-4"></div>

                    <div className="px-10 sm:px-3 py-6">

                        <div className="flex w-full items-center justify-between">

                            <div className="flex items-center justify-center gap-x-5">
                                <div className="bg-gren w-12 h-12 rounded-full"></div>
                                <div className="bg-gren py-1.5 px-10 rounded-md"></div> 
                            </div>

                            <div className="bg-gren py-1.5 px-14 rounded-md"></div>
                            <div className="bg-red-500 py-2 px-16 rounded-md sm:hidden"></div>

                        </div>

                        <div className="bg-gren py-3 rounded-md mt-5"></div>
                        <div className="bg-gren py-20 rounded-md my-5"></div>

                        <div className="flex items-center">
                            <div className="bg-gren py-2.5 px-10 rounded-md"></div>
                        </div>

                    </div>

                </div>
            )}

            {
                randomNews && randomNews.map((blog, index) => (

                    <div 
                        key={index}
                        className="relative bg-white w-full mb-10 shadow-lg rounded-xl"
                    >

                        <img 
                            src={blog.image} 
                            alt={`Image ${index}`}
                            className="w-full h-single min-h-full object-cover rounded-xl" 
                        />

                        <div 
                            className="absolute top-5 left-5 uppercase bg-gray-900 text-white rounded-3xl font-semibold px-10 py-1.5"
                        >
                           {blog.category}
                        </div>

                        <div className="px-10 sm:px-3 py-6">
                            
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

                                <p className="sm:hidden font-bold text-red-500 uppercase">coming in hot!</p>

                            </div>

                            <h2 className="text-2xl font-bold mt-5">
                                {blog.name}
                            </h2>

                            <p className="text-lg text-black text-opacity-65 font-medium my-5">
                                {
                                    blog.description
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

                    </div>

                ))
            }

        </motion.div>
    );
}
 
export default SingePost;