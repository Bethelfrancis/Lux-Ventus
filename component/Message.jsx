"use client"
import { useState } from "react"

const Message = () => {
    const [ userName, setUserName ] = useState('')
    const [ userMessage, setUserMessage ] = useState('')
    const [ userEmail, setUserEmail ] = useState('')

    const handleSubmit = () => {
        console.log(userMessage)
        console.log(userName)
        console.log(userEmail)

        setUserMessage('')
        setUserName('')
        setUserEmail('')
    }

    return (
        <form 
            className="flex flex-col justify-start lg:justify-center w-full bg-white rounded-2xl shadow-lg px-6 xs:px-3 py-16 mb-12"
            onSubmit={handleSubmit}
            initial= 'hidden'
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.8, delay: 1 }}
        >
            <h4 className="font-bold text-2xl mb-6 lg:text-center">
                Send Us A Message
            </h4>

            <p className="lg:text-center">
                Your email address will not be published. Required fields are marked{' '} <span className="text-red-500 font-bold">*</span>
            </p>

            <div className="w-full flex xs:flex-col xs:gap-y-5 justify-center items-center my-5 gap-x-8">

                <div className="w-full">
                    <label className="font-semibold mb-2">
                        Your Name 
                        {' '} <span className="text-red-500 font-bold">*</span>
                    </label>
                    <input 
                        type="text" 
                        className="w-full border border-gray-400 rounded-3xl px-5 py-1.5 outline-gren placeholder:italic mt-2"
                        placeholder="Full Name"
                        value={userName}
                        onChange={e => setUserName(e.target.value)}
                        required
                    />
                </div>

                <div className="w-full">
                    <label className="font-semibold">
                        Email 
                        {' '} <span className="text-red-500 font-bold">*</span>
                    </label>
                    <input 
                        type="email"
                        className="w-full border border-gray-400 rounded-3xl px-5 py-1.5 outline-gren placeholder:italic mt-2"
                        placeholder="Your Email Address"
                        value={userEmail}
                        onChange={e => setUserEmail(e.target.value)}
                    />
                </div>

            </div>

            <div className="mt-5 mb-10">
                <label className="font-semibold mb-2">Topic </label>
                <input 
                    type="text" 
                    className="w-full border border-gray-400 rounded-3xl px-5 py-1.5 outline-gren placeholder:italic mt-2"
                    placeholder="Message Subject"
                    value={userName}
                    onChange={e => setUserName(e.target.value)}
                    required
                />
            </div>

            <label className="font-semibold mb-2">
                Your Message
                {' '} <span className="text-red-500 font-bold">*</span>
            </label>
            <textarea 
                placeholder="Tell us something." 
                className="w-full h-60 border border-gray-600 rounded-lg p-4 outline-gren placeholder:italic"
                value={userMessage}
                onChange={e => setUserMessage(e.target.value)}
            />

            <button
                className='w-40 px-6 py-1.5 font-semibold rounded-full bg-gren cursor-pointer hover:shadow-xl animi mt-5'
            >
                SEND
            </button>

        </form>
    );
}
 
export default Message;