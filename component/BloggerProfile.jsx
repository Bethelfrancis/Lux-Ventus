import Link from "next/link";
import { motion } from "framer-motion";

const BloggerProfile = () => {
    return (
        <motion.div 
            className="side-bar"
            initial= 'hidden'
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.8, delay: 1.5 }}
        >

            <div className="flex lg:flex-row flex-wrap flex-col items-center lg:gap-x-7 lg:justify-between">

                <div className="flex items-center justify-center xs:w-full">
                    <img 
                        src="/images/blogger-profile-pic.png" 
                        alt="Blogger Profile Picture"
                        className="w-24 h-24 object-cover rounded-full border-4 border-gren mb-6"
                    />
                </div>

                <div className="flex flex-col items-center xs:w-full">
                    <p className="uppercase text-black text-opacity-55 font-semibold text-sm">your host</p>

                    <h3 className="text-2xl">
                        Mallory Reyn
                    </h3>

                    <Link href='/create-blog'>
                        <button
                            className='hidden lg:block px-6 py-1.5 font-semibold rounded-full bg-gren cursor-pointer hover:shadow-xl animi my-3'
                        >
                            Create Blog Post
                        </button>
                    </Link>
                </div>

            </div>

            <hr className="lg:hidden bg-black bg-opacity-30 w-full h-0.5 my-3"/>

            <p className="lg:hidden text-sm font-medium text-black text-opacity-60 text-left mt-5">
                Lorem ipsum dolor sit amet, ipsa, asperiores molestias explicabo laborum accusamus ipsum inventore dolores vero doloremque! Corporis, ad.
            </p>

            <Link href='/create-blog'>
                <button
                    className='lg:hidden px-6 py-1.5 font-semibold rounded-full bg-gren cursor-pointer hover:shadow-xl animi my-9'
                >
                    Create a Blog Post
                </button>
            </Link>

        </motion.div>
    );
}
 
export default BloggerProfile;