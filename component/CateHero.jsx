import { motion } from "framer-motion";

const CategoryHero = ({ activeCategory }) => {
    return (
        <div 
            className="relative flex items-end py-10"
        >

            <motion.img 
                src='/images/category.png'
                alt="Category Background"
                className="w-full h-single min-h-full rounded-xl object-cover"
                initial= 'hidden'
                animate="visible"
                variants={{
                    hidden: { opacity: 0,  scale: 0 },
                    visible: { opacity: 1,  scale: '100%' }
                }}
                transition={{ duration: 0.8, delay: 2, }}
            />

            <motion.div 
                className="absolute pl-10 pb-8 lg:px-3"
                initial= 'hidden'
                whileInView="visible"
                viewport={{ once: true  }}
                variants={{
                    hidden: { opacity: 0, },
                    visible: { opacity: 1,  }
                }}
                transition={{ duration: 1, delay: 3, }}
            >
                
                <p className="uppercase text-sm font-semibold text-white">
                    Category
                </p>

                <h1 className="uppercase text-4xl my-1 text-white font-medium">
                    {activeCategory}
                </h1>

            </motion.div>

        </div>
    );
}
 
export default CategoryHero;