"use client";
import { useParams } from "next/navigation";
import useFetch from "@/hook/useFecth";
import TopRated from "@/component/TopRated";
import BlogProfile from "@/component/BlogProfile";
import Comment from "@/component/Comment";
import Categories from "@/component/Catergories";
import Navbar from "@/component/Navbar";
import Footer from "@/component/Footer";
import { useState } from "react";
import { motion } from "framer-motion";

const BlogDetails = () => {
    const { id } = useParams();
    const [refresh, setRefresh] = useState(false);

    const url = `http://localhost:4000/blogs/${id}?refresh=${refresh}`;
    const { data: blog, loading, error } = useFetch(url);

    const urls = `http://localhost:4000/blogs`;
    const { data } = useFetch(urls);

    if (error) return <p>Error loading data</p>;
    if (!blog) return <p>Blog not found</p>;

    return (
        <div>

            {loading ? (
                <div className="bg-white flex justify-center items-center h-screen w-full">
                    <div className="border-4 border-gren border-t-transparent rounded-full w-16 h-16 animate-spin"></div>
                </div>
            ) : (
                <div>
                    <Navbar />

                    <div className="flex lg:flex-col-reverse justify-between w-full px-8 lg:px-3 mt-28">

                        <div className="w-[68%] lg:w-full">

                            <motion.div 
                                className="flex gap-x-3 w-full px-7 py-3 bg-gray-300 rounded-3xl mb-5"
                                initial= 'hidden'
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.1 }}
                                variants={{
                                    hidden: { opacity: 0, y: 75 },
                                    visible: { opacity: 1, y: 0 }
                                }}
                                transition={{ duration: 0.8, delay: 2.5 }}
                            >
                                <p className="uppercase font-bold">home |</p>
                                <p className="uppercase font-bold">{blog.category}</p>
                            </motion.div>

                            <div className="flex w-full items-center justify-between mb-7">

                                <motion.div 
                                    className="flex items-center justify-center gap-x-5"
                                    initial= 'hidden'
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.1 }}
                                    variants={{
                                        hidden: { opacity: 0, x: 75 },
                                        visible: { opacity: 1, x: 0 }
                                    }}
                                    transition={{ duration: 0.8, delay: 3 }}
                                >

                                    <img 
                                        src="/images/blogger-profile-pic.png" 
                                        alt="Blogger Profile Picture"
                                        className="w-12 rounded-full" 
                                    />

                                    <p className="text-black text-opacity-55 font-semibold">
                                        {blog.author}
                                    </p>

                                </motion.div>

                                <motion.p 
                                    className="text-black text-opacity-55 font-semibold xs:hidden"
                                    initial= 'hidden'
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.1 }}
                                    variants={{
                                        hidden: { opacity: 0, y: 75 },
                                        visible: { opacity: 1, y: 0 }
                                    }}
                                    transition={{ duration: 0.8, delay: 3.3 }}
                                >
                                    {blog.date}
                                </motion.p>

                                <motion.div 
                                    className='flex items-center gap-x-3'
                                    initial= 'hidden'
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.1 }}
                                    variants={{
                                        hidden: { opacity: 0, x: -75 },
                                        visible: { opacity: 1, x: 0 }
                                    }}
                                    transition={{ duration: 0.8, delay: 3 }}
                                >

                                    <img 
                                        src="/icons/coment.png" 
                                        alt="Comment Icon"
                                        className="w-10 bg-gren rounded-full p-2" 
                                    />

                                    <p>
                                        {
                                            blog.comment && blog.comment.length > 0
                                                ? blog.comment.length
                                                : 0
                                        }
                                    </p>

                                </motion.div>

                            </div>

                            <motion.h2 
                                className="text-3xl font-bold my-3"
                                initial= 'hidden'
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.1 }}
                                variants={{
                                    hidden: { opacity: 0, x: -75 },
                                    visible: { opacity: 1, x: 0 }
                                }}
                                transition={{ duration: 0.8, delay: 3.5 }}
                            >
                                    {blog.name}
                            </motion.h2>

                            <div className="bg-white rounded-3xl mb-8 shadow-lg">
                                <motion.img 
                                    src={blog.image} 
                                    alt={blog.name} 
                                    className="w-full h-96 object-cover rounded-3xl my-4" 
                                    initial= 'hidden'
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.1 }}
                                    variants={{
                                        hidden: { opacity: 0, y: 75 },
                                        visible: { opacity: 1, y: 0 }
                                    }}
                                    transition={{ duration: 0.8, delay: 3.8 }}
                                />
                                <motion.p 
                                    className="text-lg font-semibold px-7 xs:px-4 py-5"
                                    initial= 'hidden'
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.1 }}
                                    variants={{
                                        hidden: { opacity: 0, y: 75 },
                                        visible: { opacity: 1, y: 0 }
                                    }}
                                    transition={{ duration: 0.8, delay: 0.4 }}
                                >
                                    {blog.description}
                                </motion.p>
                            </div>

                            <BlogProfile blog={blog} />

                            <motion.div 
                                className='flex items-center gap-x-3 mt-10'
                                initial= 'hidden'
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.1 }}
                                variants={{
                                    hidden: { opacity: 0, x: -75 },
                                    visible: { opacity: 1, x: 0 }
                                }}
                                transition={{ duration: 0.8, delay: 0.7 }}
                            >
                                <img 
                                    src="/icons/coment.png" 
                                    alt="Comment Icon"
                                    className="w-10 bg-gren rounded-full p-2" 
                                />

                                <p className="text-xl font-bold">
                                    {
                                        blog.comment && blog.comment.length > 0
                                            ? `Comment ( ${blog.comment.length} )`
                                            : 'No comment yet'
                                    }
                                    
                                </p>
                            </motion.div>

                            <div className="mt-7">
                                {blog.comment && blog.comment.length > 0 ? (
                                    blog.comment.map((comment, index) => (
                                        <div 
                                            key={index} 
                                            className="flex flex-col items-start w-full"
                                        >

                                            <hr className="lg:hidden bg-black bg-opacity-30 w-full h-0.5 my-3 z-50" />

                                            <motion.div 
                                                className="flex items-center gap-x-4 mb-5"
                                                initial= 'hidden'
                                                whileInView="visible"
                                                viewport={{ once: true, amount: 0.1 }}
                                                variants={{
                                                    hidden: { opacity: 0, x: -75 },
                                                    visible: { opacity: 1, x: 0 }
                                                }}
                                                transition={{ duration: 0.8, delay: 0.7 }}
                                            >
                                                <img
                                                    src={comment.image}
                                                    alt={comment.name}
                                                    className="w-12 h-12 rounded-full object-cover"
                                                />  
                                                <p className="font-medium text-2xl">{comment.name}</p>
                                            </motion.div>
                                        
                                            <motion.p 
                                                className="font-medium pl-5"
                                                initial= 'hidden'
                                                whileInView="visible"
                                                viewport={{ once: true, amount: 0.1 }}
                                                variants={{
                                                    hidden: { opacity: 0, x: 75 },
                                                    visible: { opacity: 1, x: 0 }
                                                }}
                                                transition={{ duration: 0.8, delay: 0.7 }}
                                            >
                                                {comment.description}
                                            </motion.p>

                                        </div>
                                    ))
                                    ) : (
                                    <p>Be the first to commnet.</p>
                                )}
                            </div>

                            <Comment blogId={id} onCommentPosted={() => setRefresh(!refresh)} />

                        </div>
                        
                        <div className="flex flex-col w-[29%] lg:w-full gap-y-12">

                            <TopRated data={data} />
                            <Categories />

                        </div>
                        
                    </div>

                    <Footer />
                </div>
            )}

        </div>
    );
}; 

export default BlogDetails;