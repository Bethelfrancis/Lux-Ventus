"use client"
import BloggerProfile from "@/component/BloggerProfile";
import Categories from "@/component/Catergories";
import Hero from "@/component/Hero";
import Newsletter from "@/component/Newsletter";
import OtherPosts from "@/component/OtherPost";
import SingePost from "@/component/SinglePost";
import TopRated from "@/component/TopRated";
import Trending from "@/component/Trending";
import useFetch from "@/hook/useFecth";
import Navbar from "@/component/Navbar";
import Footer from "@/component/Footer";

const Home = () => {
  const url = 'https://lux-ventus-api.onrender.com/blogs';
  const { data, loading, error } = useFetch(url) 

  return (
    <div>

      <Navbar />

      <div className="px-8 lg:px-3">

        <Hero />

        <div className="flex lg:flex-col-reverse justify-between w-full">

          <div className="w-[68%] lg:w-full">

            <SingePost data={data} loading={loading} error={error} />
            <Trending data={data} loading={loading} error={error} title={'Trending'} />
            <OtherPosts data={data} loading={loading} error={error} />

          </div>

          <div className="flex flex-col w-[29%] lg:w-full gap-y-12">
            <BloggerProfile />
            <Newsletter />
            <TopRated data={data} loading={loading} error={error} />
            <Categories />
          </div>

        </div>

      </div>

      <Footer />

    </div>
  );
}

export default Home