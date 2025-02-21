"use client"
import { motion } from "framer-motion";

const Footer = () => {
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
        <motion.footer 
            className="bg-white px-8 lg:px-3"
            initial= 'hidden'
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 }
            }}
            transition={{ duration: 0.8, delay: 0.4 }}
        >

            <div className="flex sm:flex-col sm:justify-center sm:items-center justify-between py-20 sm:py-12">

                <motion.img 
                    src='/icons/logo.png'
                    alt='Lux Ventus Logo'
                    width={180}
                    height={100}
                    className='lg:w-40 sm:mb-10'
                    initial= 'hidden'
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                        hidden: { opacity: 0, x: -75 },
                        visible: { opacity: 1, x: 0 }
                    }}
                    transition={{ duration: 0.8, delay: 1 }}
                />

                <div className="flex flex-wrap justify-center items-center gap-x-16">

                    <motion.h2 
                        className="text-2xl font-bold sm:mb-4"
                        initial= 'hidden'
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={{
                            hidden: { opacity: 0, },
                            visible: { opacity: 1, }
                        }}
                        transition={{ duration: 0.8, delay: 1 }}
                    >
                        Let's Hang Out
                    </motion.h2>

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

            </div>

            <hr className="bg-black bg-opacity-30 h-0.5"/>

            <motion.p 
                className="py-7 font-semibold sm:text-center"
                initial= 'hidden'
                whileInView="visible"
                variants={{
                    hidden: { opacity: 0, },
                    visible: { opacity: 1, }
                }}
                transition={{ duration: 0.8, delay: 1 }}
            >
                &copy;2025-Lux Ventus by Bethel
            </motion.p>

        </motion.footer>
    );
}
 
export default Footer;