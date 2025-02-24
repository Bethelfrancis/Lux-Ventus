"use client"
import ContactHero from "@/component/ConHero";
import Footer from "@/component/Footer";
import Message from "@/component/Message";
import Navbar from "@/component/Navbar";

const Contact = () => {
    const address = [
        {
            name: 'email',
            image: '/icons/email.png',
            info: 'Mallory@lux-ventus.com'
        },
        {
            name: 'phone',
            image: '/icons/email.png',
            info: '+234-9137201647'
        },
        {
            name: 'location',
            image: '/icons/email.png',
            info: 'CA - San Diego, USA'
        },
    ]


    return (
        <div>

            <Navbar />

            <div className="px-8 lg:px-3 mt-10">
                
                <ContactHero />

                <div className="flex lg:flex-col lg:gap-y-5 justify-between mt-10 w-full">
                    
                    <div className="w-[68%] lg:w-full">
                        <Message />
                    </div>

                    <div className="flex flex-col w-[29%] lg:w-full gap-y-5 pb-16">

                        {
                            address.map((add, index) => (
                                <div 
                                    key={index}
                                    className="flex items-start justify-start gap-x-10 bg-white rounded-xl shadow-lg px-10 py-6"
                                    initial= 'hidden'
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.2 }}
                                    variants={{
                                        hidden: { opacity: 0, y: 75 },
                                        visible: { opacity: 1, y: 0 }
                                    }}
                                    transition={{ duration: 0.8, delay: 1 }}
                                >

                                    <img 
                                        src={add.image} 
                                        alt={add.name}
                                        className="w-12"
                                    />

                                    <div className="flex flex-col justify-center items-start">
                                        <p 
                                            className="uppercase text-black text-opacity-60 mb-1 text-sm font-semibold"
                                        >
                                            {add.name}
                                        </p>
                                        <p className="font-semibold">
                                            {add.info}
                                        </p>
                                    </div>

                                </div>
                            ))
                        }

                    </div>
                    

                </div>

            </div>

            <Footer />

        </div>
    );
}
 
export default Contact;