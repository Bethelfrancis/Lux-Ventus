import { motion } from "framer-motion";
import { useState } from "react";

const Comment = ({ blogId, onCommentPosted }) => {
    const [ userName, setUserName ] = useState('')
    const [ userComment, setUserComment ] = useState('')
    const [ userEmail, setUserEmail ] = useState('')
    const [ isPending, setIsPending ] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsPending(true)
    
        const newComment = {
            name: userName,
            description: userComment,
            image: "/icons/profile.png",
        };
    
        try {
            const response = await fetch(`http://localhost:4000/blogs/${blogId}`);
            if (!response.ok) throw new Error("Failed to fetch blog post");
    
            const blog = await response.json();

            const updatedComments = [...blog.comment, newComment];

            const updateResponse = await fetch(`http://localhost:4000/blogs/${blogId}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ ...blog, comment: updatedComments }),
            });
    
            if (!updateResponse.ok) throw new Error("Failed to update comments");
    
            setUserComment("");
            setUserName("");
            setUserEmail("");
            setIsPending(false)

            onCommentPosted();
        } catch (error) {
            console.error("Error:", error);
        }
    }

    return (
        <motion.form 
            className="flex flex-col justify-start w-full bg-white rounded-2xl mt-10 shadow-lg px-6 xs:px-3 py-4 mb-12"
            onSubmit={handleSubmit}
            initial= 'hidden'
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.8, delay: 0.5 }}
        >
            <h4 className="font-bold text-2xl mb-6">
                Leave A Comment
            </h4>

            <label className="font-semibold mb-2">Comment</label>
            <textarea 
                placeholder="What do you think about the article" 
                className="w-full h-60 border border-gray-600 rounded-lg p-4 outline-gren"
                value={userComment}
                onChange={e => setUserComment(e.target.value)}
                required
            />

            <div className="w-full flex xs:flex-col xs:gap-y-5 justify-center items-center my-5 gap-x-8">

                <div className="w-full">
                    <label className="font-semibold mb-2">Your Name </label>
                    <input 
                        type="text" 
                        className="w-full border border-gray-400 rounded-3xl px-5 py-1.5 outline-gren"
                        placeholder="Full Name"
                        value={userName}
                        onChange={e => setUserName(e.target.value)}
                        required
                    />
                </div>

                <div className="w-full">
                    <label className="font-semibold mb-2">Email </label>
                    <input 
                        type="email"
                        className="w-full border border-gray-400 rounded-3xl px-5 py-1.5 outline-gren"
                        placeholder="Your Email Address (Optional)"
                        value={userEmail}
                        onChange={e => setUserEmail(e.target.value)}
                    />
                </div>

            </div>

            <button
                className={`w-full max-w-40 px-6 py-1.5 font-semibold rounded-full bg-gren cursor-pointer hover:shadow-xl animi mt-5 ${
                    !isPending ? 'bg-gren cursor-pointer' : 'bg-gren cursor-not-allowed bg-opacity-40'
                }`}
            >
                {!isPending ? 'Add Comment' : 'Adding Comment...' }
            </button>

        </motion.form>
    );
}
 
export default Comment;
