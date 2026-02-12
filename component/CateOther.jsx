"use client"
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import useFetch from "@/hook/useFecth";

const CategoryBlog = () => {
    const url = 'https://lux-ventus-api.onrender.com/blogs';
    const { data, loading, error } = useFetch(url) 

    const [ currentPage, setCurrentPage ] = useState(1)
    const itemsPerPage = 4;

    const nextPage = currentPage * itemsPerPage
    const firstPage = nextPage - itemsPerPage
    const currentPages = data.slice(firstPage, nextPage)

    const totalPages = Math.ceil(data.length / itemsPerPage)

    const handleNext  = () => {
        if (currentPage < totalPages) {
            setCurrentPage(prePage => prePage + 1)
        }
    }

    const handlePrevious  = () => {
        if (currentPage > 1) {
            setCurrentPage(prePage => prePage - 1)
        }
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [currentPage])

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div className="flex flex-col mt-5 mb-16 w-full">

            {
                currentPages.map(blog => (
                    <motion.div 
                        key={blog.id}
                        className="relative flex lp:flex-col bg-white w-full mb-10 shadow-lg rounded-xl h-other lp:h-full min-h-other"
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
                            alt={blog.id}
                            className="w-[50%] lp:w-full h-full lp:h-topics object-cover rounded-xl" 
                        />
        
                        <div 
                            className="absolute top-5 left-5 uppercase bg-gray-900 text-white rounded-3xl font-semibold px-7 py-1.5"
                        >
                            {blog.category  }
                        </div>
        
                        <div className="px-7 lp:px-3 py-4 w-[70%] lp:w-full">
                            
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
                                    blog.description.length > 100
                                        ? `${blog.description.slice(0, 100)}...`
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

            {currentPages.length > 0 && (
                <div className="flex justify-between items-center lg:ml-3 ml-6 mt-4">
                    <div 
                        className={`flex items-center justify-center border rounded-lg p-2 gap-3 hover:shadow-lg animi
                            ${currentPage === 1 ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}`} 
                        onClick={handlePrevious}
                    >
                        <img 
                            src='/icons/right.png' 
                            alt="Left Arrow"
                            className="w-4 h-4 -rotate-180" 
                        />
                        <p className="font-medium text-gren">Previous</p>
                    </div>
                    <p>
                        <span className="text-gren mx-2">{currentPage}</span>
                        /
                        <span className="text-gren ml-2">{totalPages}</span>
                    </p>
                    <div 
                        className={`flex items-center justify-center border rounded-lg p-2 gap-3 hover:shadow-lg animi ${currentPage === totalPages ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}`} 
                        onClick={handleNext}
                    >
                        <p className="font-medium text-gren">Next</p>
                        <img 
                            src='/icons/right.png' 
                            alt="Right Arrow" 
                            className="w-4 h-4"
                        />
                    </div>
                </div>
            )}
            
        </div>
    );
}
 
export default CategoryBlog;