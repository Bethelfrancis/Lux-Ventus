"use client"
import Navbar from "@/component/Navbar";
import Footer from "@/component/Footer";
import BloggerProfile from "@/component/BloggerProfile";
import CategoryHero from "@/component/CateHero";
import Categories from "@/component/Catergories";
import TopRated from "@/component/TopRated";
import useFetch from "@/hook/useFecth";
import { useParams } from "next/navigation";
import CategoryBlog from "@/component/CateOther";

const Category = () => {
    const { category } = useParams();

    const url = `https://lux-ventus-api.onrender.com/blogs`;
    const { data, loading, error } = useFetch(url);

    const filteredData = data.filter(article => article.category.toLowerCase() === category.toLowerCase())

    if (error) return <p>Error loading data</p>;
  
    return (
        <div className='overflow-x-hidden'>

            {loading ? (
                <div className="bg-white flex justify-center items-center h-screen w-full">
                    <div className="border-4 border-gren border-t-transparent rounded-full w-16 h-16 animate-spin"></div>
                </div>
            ) : (
                <div>

                    <Navbar />

                    <div className="px-8 lg:px-3 mt-10">

                        <CategoryHero activeCategory={category} />

                        <div className="flex lg:flex-col-reverse justify-between w-full">

                            <div className="w-[68%] lg:w-full">
                                <CategoryBlog data={filteredData} />
                            </div>

                            <div className="flex flex-col w-[29%] lg:w-full gap-y-12">
                                <BloggerProfile />
                                <TopRated data={data} />
                                <Categories />
                            </div>

                        </div>

                    </div>

                    <Footer />

                </div>
            )}
            
        </div>
  );
}

export default Category