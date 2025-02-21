import { motion } from "framer-motion";

const Hero = () => {
    return (
        <div className="relative flex items-center pt-20 mb-10">

            <motion.img 
                src='/images/home-hero.png'
                alt="Hero Background"
                className="w-full h-hero min-h-full rounded-xl object-cover bg-fixed"
                initial= 'hidden'
                animate="visible"
                variants={{
                    hidden: { opacity: 0,  scale: 0 },
                    visible: { opacity: 1,  scale: '100%' }
                }}
                transition={{ duration: 0.8, delay: 2, }}
            />

            <motion.div 
                className="absolute pl-10 lg:px-3"
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
                    Lux Ventus magazine
                </p>

                <h1 className="text-4xl my-7 text-white font-light">
                    We Are the <span className="text-gren font-semibold">Ventus Fashion</span>
                </h1>

                <p className="text-white text-lg">
                    We like to gossip about everything, but we will
                    <br className="lg:hidden"/> never forget the daily fashion dose.
                </p>

            </motion.div>

        </div>
    );
}
 
export default Hero;