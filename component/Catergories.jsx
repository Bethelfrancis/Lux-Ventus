import { motion } from "framer-motion";
import Link from "next/link";

const Categories = () => {
    const categories = [
        {
            name: 'Fashion',
            link: 'fashion'
        },
        {
            name:  'Lifestyle',
            link: 'lifestyle'
        },
        {
            name:  'Mental Health',
            link: 'health'
        }
    ]

    return (
        <motion.div 
            className="side-bar-left lg:hidden mb-10"
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
                Categories
            </h2>

            <div className="w-full mb-6">

                {
                    categories.map((cat, index) => (
                        
                        <Link key={index} href={`category/${cat.link}`}>

                            <motion.li
                                className="list-none"
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
                                <h4 className="text-lg font-bold leading-6 py-4 cursor-pointer">
                                    {cat.name}
                                </h4>

                            </motion.li>

                        </Link>

                    ))
                }

            </div>

        </motion.div>
    );
}
 
export default Categories;