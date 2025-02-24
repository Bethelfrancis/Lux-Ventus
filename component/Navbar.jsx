"use client"
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
    const [ isOpen, setIsOpen ] = useState(false);

    const handleToggle = () => {
        if (!isOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'auto'
        }
        setIsOpen(!isOpen)
    }

    const categories = [
        {
            name: 'Fashion',
            link: 'fashion',
            delay: 0
        },
        {
            name:  'Lifestyle',
            link: 'lifestyle',
            delay: 0.1
        },
        {
            name:  'Mental Health',
            link: 'health',
            delay: 0.2
        }
    ]

    const variants = {
        hidden: { opacity: 0, y: -75 },
        visible: { opacity: 1, y: 0 },
    }

    return (
        <motion.div 
            className='fixed flex items-center justify-between bg-milk w-full top-0 left-0 px-8 py-5 lg:px-3 lg:py-5 z-30' 
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8 }}
        >
            <Link href='/'>
                <Image 
                    src='/icons/logo.png'
                    alt='Lux Ventus Logo'
                    width={180}
                    height={100}
                    className='lg:w-40'
                />
            </Link>
            

            <div
                className={`animi lg:absolute lg:top-0 lg:bg-gren lg:w-full lg:h-screen flex lg:flex-col lg:justify-around items-center gap-x-16 z-40 ${
                    isOpen ?  'left-0' : 'left-full'
                }`}
            >
                    
            <ul 
                className='flex lg:flex-col lg:justify-between lg:items-center lg:h-[55%] gap-x-16'
            >

            {
                categories.map((cat, index) => (
                    <Link
                        href={`/category/${cat.link}`}
                        key={index} 
                    >
                        <motion.li
                            className='font-semibold cursor-pointer border-b-2 border-transparent hover:border-gren animi'
                            initial= 'hidden'
                            animate="visible"
                            variants={{
                                hidden: { opacity: 0, y: -150 },
                                visible: { opacity: 1, y: 0 }
                            }}
                            transition={{ duration: 1.8, delay: cat.delay }}
                            onClick={handleToggle}
                        >
                            {cat.name}
                        </motion.li>
                    </Link>
                ))
            }

            </ul>

            <Link href='/contact'>
                <motion.button
                    className='px-6 py-1.5 font-semibold rounded-full bg-gren cursor-pointer hover:shadow-xl animi'
                    initial= 'hidden'
                    animate="visible"
                    variants={{
                        hidden: { opacity: 0, x: 200},
                        visible: { opacity: 1, x: 0 }
                    }}
                    transition={{ duration: 0.8, delay: 2 }}
                >
                    Contact Us
                </motion.button>
            </Link>
                
        </div>

        <motion.div 
            className={`animi hidden lg:block absolute right-3 bg-gren p-5 rounded-full z-40`}
            initial= 'hidden'
            animate="visible"
            variants={{
                hidden: { opacity: 0, x: 200},
                visible: { opacity: 1, x: 0 }
            }}
            transition={{ duration: 0.8, delay: 0.5 }}
            onClick={handleToggle}
        >
            <span className={`animi block w-4 h-[2px] rounded-md absolute right-2.5 ${
                isOpen ? 'bg-transparent' : 'bg-black'
            }`}>
            <span className={`animi absolute -top-[6px] bg-black w-5 h-[2px] rounded-md right-0 ${
                isOpen ? '-rotate-45 -top-[0]' : 'rotate-0'
            }`}></span>
            <span className={`animi absolute top-[6px] bg-black w-5 h-[2px] rounded-md right-0 ${
                isOpen ? 'rotate-45 -top-[1px]' : 'rotate-0'
            }`}></span>
            </span>
        </motion.div>

        </motion.div>
    );
}

 
export default Navbar;