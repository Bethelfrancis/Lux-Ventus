import { motion } from "framer-motion";

const Newsletter = () => {
    return (
        <motion.div 
            className="side-bar lg:items-start lg:mb-14"
            initial= 'hidden'
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.8, delay: 1 }}
        >

            <h2 className="text-2xl font-bold">
                Newsletter
            </h2>

            <hr className="lg:hidden bg-black bg-opacity-30 w-[50%] h-0.5 my-5"/>

            <p 
                className="text-sm font-medium text-black text-opacity-70 text-left mb-9 lg:mb-4 lg:mt-3"
            >
                Join the 36,000 Lux Ventus!
            </p>

            <input 
                type="email"
                placeholder="Email Address" 
                className="border-2 border-gray-400 w-full py-2 px-6 rounded-full placeholder:italic"
            />

            <button
                className='w-full py-1.5 font-semibold rounded-full bg-gren cursor-pointer hover:shadow-xl animi my-7 lg:my-3'
            >
                Let's Chat
            </button>

            <p 
                className="text-sm font-medium text-black text-opacity-70 text-center mb-9 px-8 lg:hidden"
            >
                Rest assured! You're gonna have a lot of fun when you press this
            </p>

        </motion.div>
    );
}
 
export default Newsletter;