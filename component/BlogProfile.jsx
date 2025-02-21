import { motion } from "framer-motion";

const BlogProfile = ({ blog }) => {
    const socialIcon = [
        {
            name: 'facebook',
            img: '/icons/facebook.png',
            delay: '0.5'
        },
        {
            name: 'twitter',
            img: '/icons/twitter.png',
            delay: '0.6'
        },
        {
            name: 'linkedIn',
            img: '/icons/linkedin.png',
            delay: '0.7'
        },
        {
            name: 'youtube',
            img: '/icons/youtube.png',
            delay: '0.8'
        },
        {
            name: 'instagram',
            img: '/icons/instagram.png',
            delay: '0.9'
        },
    ]

    return (
        <motion.div 
            className="flex lp:flex-col lp:justify-center justify-between items-center w-full bg-white rounded-2xl mb-8 shadow-lg px-6 py-4"
            initial= 'hidden'
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.8, delay: 0.4 }}
        >

            <div 
                className="uppercase bg-gray-900 text-white rounded-3xl font-semibold px-7 py-1.5 lp:mb-5"
            >
                {blog.category}
            </div>
                
            <div className="flex flex-wrap justify-center items-center gap-x-16">

                <h2 className="text-2xl font-bold sm:mb-4">
                    Let's Hang Out
                </h2>

                <div className="flex justify-center items-center flex-wrap gap-x-5">

                    {
                        socialIcon.map((img, index) => (
                            <motion.img 
                                key={index}
                                src={img.img} 
                                alt={img.name}
                                className="w-8 cursor-pointer hover:scale-110 animi"
                                initial= 'hidden'
                                whileInView="visible"   
                                viewport={{ once: true }}
                                variants={{
                                    hidden: { opacity: 0, y: 75 },
                                    visible: { opacity: 1, y: 0 }
                                }}
                                transition={{ duration: 0.3, delay: img.delay }}
                            />
                        ))
                    }

                </div>

            </div>

        </motion.div>
    );
}
 
export default BlogProfile;