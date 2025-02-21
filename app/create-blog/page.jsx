"use client"
import Footer from "@/component/Footer"
import Navbar from "@/component/Navbar"
import { useState } from "react"
import { useRouter } from "next/navigation";

const CreateBlog = () => {
    const [ name, setName ] = useState("")
    const [ description, setDescription ] = useState('')
    const [ author, setAuthor ] = useState('')
    const [ image, setImage] = useState(null)
    const [ category, setCategory ] = useState('category')
    const [ isPending, setIsPending ] = useState(false)

    const router = useRouter()
    const url = 'https://lux-ventus-api.onrender.com/blogs'
    const uploadUrl = "/api/upload"

    const formatDate = (date) => {
        const options = { month: "long", day: "numeric", year: "numeric" };
        const formattedDate = date.toLocaleDateString("en-US", options);
        const day = date.getDate();

        const getOrdinalSuffix = (day) => {
            if (day > 3 && day < 21) return "th";
            switch (day % 10) {
                case 1: return "st";
                case 2: return "nd";
                case 3: return "rd";
                default: return "th";
            }
        };

        return formattedDate.replace(/\d+/, day + getOrdinalSuffix(day));
    };

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsPending(true)

        if (!image) {
            alert("Please upload an image")
            return
        }

        const formData = new FormData()
        formData.append("image", image)

        const uploadImage = await fetch(uploadUrl, {
            method: 'POST',
            body: formData
        })

        if (!uploadImage.ok) {
            return alert('Image failed to upload')
        } 

        const { imageUrl } = await uploadImage.json()

        const blogs = { 
            name, 
            description, 
            author, 
            image: imageUrl, 
            category,
            date: formatDate(new Date()),
            comment: []
        }

        fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(blogs)
        })
        .then(() => {
            router.push(`/category/${category}`)
            setIsPending(false)
        })
    }

    return (
        <div>

            <Navbar />

            <div className="px-8 lg:px-3 mt-28">

                <h2 className="font-semibold text-3xl mb-6 lg:text-center">
                    Create Your Own Blog
                </h2>

                <form 
                    className="flex flex-col justify-start lg:justify-center w-full bg-transparent rounded-2xl px-6 xs:px-3 mb-12"
                    onSubmit={handleSubmit}
                >

                    <div className="w-full flex xs:flex-col xs:gap-y-5 justify-center items-center my-5 gap-x-8">

                        <div className="w-full">
                            <label className="font-semibold mb-2">
                                Title
                                {' '} <span className="text-red-500 font-bold">*</span>
                            </label>
                            <input 
                                type="text" 
                                className="w-full border border-gray-400 rounded-3xl px-5 py-1.5 outline-gren placeholder:italic mt-2"
                                placeholder="Topic of Subject"
                                value={name}
                                onChange={e => setName(e.target.value)}
                                required
                            />
                        </div>

                        <div className="w-full">
                            <label className="font-semibold">
                                Name 
                                {' '} <span className="text-red-500 font-bold">*</span>
                            </label>
                            <input 
                                type="text"
                                className="w-full border border-gray-400 rounded-3xl px-5 py-1.5 outline-gren placeholder:italic mt-2" 
                                placeholder="Full Name"
                                value={author}
                                onChange={e => setAuthor(e.target.value)}
                            />
                        </div>

                    </div>

                    <div className="w-full flex xs:flex-col xs:gap-y-5 justify-center items-center my-5 gap-x-8">

                        <div className="w-full">
                            <label className="font-semibold mb-2">
                               Upload Image
                                {' '} <span className="text-red-500 font-bold">*</span>
                            </label>
                            <input 
                                type="file" 
                                className="w-full border border-gray-400 rounded-3xl px-5 py-1.5 outline-gren placeholder:italic mt-2"
                                placeholder="Topic of Subject"
                                onChange={e => setImage(e.target.files[0])}
                                required
                            />
                        </div>

                        <div className="w-full flex flex-col">
                            <label className="font-semibold">
                                Category 
                                {' '} <span className="text-red-500 font-bold">*</span>
                            </label>
                            <select 
                                className="w-1/2 xs:w-full border border-gray-400 rounded-3xl px-5 py-1.5 outline-gren placeholder:italic mt-2"
                                value={category}
                                onChange={e => setCategory(e.target.value)}
                                required
                            >
                                <option value='category'>Category</option>
                                <option value="fashion">Fashion</option>
                                <option value="lifestyle">Lifestyle</option>
                                <option value="health">Mental Health</option>
                            </select>
                        </div>

                    </div>

                    <label className="font-semibold mb-2">
                        Your Message
                        {' '} <span className="text-red-500 font-bold">*</span>
                    </label>
                    <textarea 
                        placeholder="Tell us something." 
                        className="w-full h-60 border border-gray-600 rounded-lg p-4 outline-gren placeholder:italic"
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    />

                    <button
                        className={`w-40 px-6 py-1.5 font-semibold rounded-full hover:shadow-xl animi mt-5 ${
                            !isPending ? 'bg-gren cursor-pointer' : 'bg-gren cursor-not-allowed bg-opacity-40'
                        }`}
                    >
                        {!isPending ? 'Upload Blog' : 'Uploading...' }
                    </button>

                </form>

            </div>

            <Footer />

        </div>
    );
}
 
export default CreateBlog;