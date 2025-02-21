"use client"
import { motion } from "framer-motion";

const ContactHero = () => {
    return (
        <div className="relative flex items-end lg:justify-center py-10 lg:text-center">

            <motion.img 
                src='/images/contact.png'
                alt="Category Background"
                className="w-full h-others min-h-full rounded-xl object-cover"
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
                    tell us something
                </p>

                <h1 className="uppercase text-4xl my-1 text-white font-semibold">
                    Contact Ventus
                </h1>

            </motion.div>

        </div>
    );
}
 
export default ContactHero;