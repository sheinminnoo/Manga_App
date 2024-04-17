import React, { useState } from 'react';
import Tag from '../components/Tag';
import { motion } from 'framer-motion';
import axios from 'axios';
import { resolvePath, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { HiOutlineUser, HiOutlineDocumentText, HiOutlineClipboardList, HiOutlineBriefcase, HiOutlineTag, HiOutlinePhotograph, HiOutlineDownload, HiOutlinePlay } from 'react-icons/hi';


export default function GameForm() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [content, setContent] = useState('');
    const [company, setCompany] = useState('');
    const [tags, setTag] = useState([]);
    const [imageUrl, setImageUrl] = useState('');
    const [newTag, setNewTag] = useState('');
    const [error, setError] = useState([]);
    const [downloadlink,setdownloadlink] = useState('')
    const [twitchLink,settwitchLink] = useState('')
    const [requirements,setrequirements] = useState('')
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    
    const addTag = () => {
        setTag(prev => [newTag, ...prev]);
        setNewTag('');
    };
    
    const createBlog = async (e) => {
        try {
            e.preventDefault();
            setIsLoading(true);
            const data = {
                title,
                description,
                content,
                company,
                tags,
                imageUrl,
                downloadlink,
                twitchLink,
                requirements

            };
            const res = await axios.post('http://localhost:8000/api/gameblogs', data);
            if (res.status === 200) {
                toast.success("Blog Created Successful.")
                await new Promise(resolve =>setTimeout(resolve,1000))
                setIsLoading(false);
                navigate('/');
            }
        } catch (e) {
            console.error("Error:", error);
            if (error.response) {
                console.error("Oops :((:", error.response.data);
                toast.error("Oops :((: " + error.response.data.error);
                setIsLoading(false)
            } else if (error.request) {
                console.error("No response received from the server.");
                toast.error("Error registering. Please try again later.");
                setIsLoading(false)
            } else {
                console.error("Error setting up the request:", error.message);
                toast.error("Error registering. Please try again later.");
                setIsLoading(false)
            }       
        }   
    };
    
    return (
        <motion.div
        id="about"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 1 }}
        className="bg-gray-800 via-purple-500 to-pink-500 py-12 px-4 sm:px-6 lg:px-8 " // Updated background with gradient
        >
        <div className="bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <h2 className="text-white text-2xl font-bold mb-4 text-center">Create Blog</h2>
            <form className="max-w-lg mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={createBlog}>
                <div className="mb-4">
                    <label htmlFor="title" className="block text-gray-700 text-sm font-bold mb-2">
                        <HiOutlineDocumentText className="inline-block mr-2 h-5 w-5 text-gray-500" /> Title
                    </label>
                    <input type="text" id="title" name="title" value={title} onChange={e => setTitle(e.target.value)} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500
                    focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
                    dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Enter title..." />
                </div>
                <div className="mb-4">
                    <label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-2">
                        <HiOutlineClipboardList className="inline-block mr-2 h-5 w-5 text-gray-500" /> Description
                    </label>
                    <textarea id="description" value={description} onChange={e => setDescription(e.target.value)} name="description" rows="3" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500
                    focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
                    dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Enter description..."></textarea>
                </div>
                <div className="mb-4">
                    <label htmlFor="content" className="block text-gray-700 text-sm font-bold mb-2">
                        <HiOutlineDocumentText className="inline-block mr-2 h-5 w-5 text-gray-500" /> Content
                    </label>
                    <textarea id="content" name="content" value={content} onChange={e => setContent(e.target.value)} rows="5" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500
                    focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
                    dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Enter content..."></textarea>
                </div>
                <div className="mb-4">
                    <label htmlFor="requirements" className="block text-gray-700 text-sm font-bold mb-2">
                        <HiOutlineDocumentText className="inline-block mr-2 h-5 w-5 text-gray-500" /> Requirements
                    </label>
                    <textarea id="requirements" name="requirements" value={requirements} onChange={e => setrequirements(e.target.value)} rows="5" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500
                    focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
                    dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Enter requirements..."></textarea>
                </div>
                <div className="mb-4">
                    <label htmlFor="company" className="block text-gray-700 text-sm font-bold mb-2">
                        <HiOutlineBriefcase className="inline-block mr-2 h-5 w-5 text-gray-500" /> Company
                    </label>
                    <input type="text" id="company" value={company} onChange={e => setCompany(e.target.value)} name="company" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500
                    focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
                    dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Enter company name..." />
                </div>
                <div className="mb-4">
                    <label htmlFor="tags" className="block text-gray-700 text-sm font-bold mb-2">
                        <HiOutlineTag className="inline-block mr-2 h-5 w-5 text-gray-500" /> Tags
                    </label>
                    <div className="flex items-center">
                        <input type="text" id="tags" name="tags" value={newTag} onChange={e => setNewTag(e.target.value)} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500
                        focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
                        dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Enter tag..." />
                    </div>
                    <div className='py-4'>
                        <button type="button" onClick={addTag} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ">
                            Add
                        </button>
                    </div>
                    <Tag tags={tags} />
                </div>
                <div className="mb-4">
                    <label htmlFor="imageUrl" className="block text-gray-700 text-sm font-bold mb-2">
                        <HiOutlinePhotograph className="inline-block mr-2 h-5 w-5 text-gray-500" /> Image URL
                    </label>
                    <input type="text" id="imageUrl" value={imageUrl} onChange={e => setImageUrl(e.target.value)} name="imageUrl" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500
                        focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
                        dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Enter image URL..." />
                </div>
                <div className="mb-4">
                    <label htmlFor="downloadlink" className="block text-gray-700 text-sm font-bold mb-2">
                        <HiOutlineDownload className="inline-block mr-2 h-5 w-5 text-gray-500" /> Download URL
                    </label>
                    <input type="text" id="downloadlink" value={downloadlink} onChange={e => setdownloadlink(e.target.value)} name="downloadlink" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500
                        focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
                        dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Enter download URL..." />
                </div>
                <div className="mb-4">
                    <label htmlFor="twitchlink" className="block text-gray-700 text-sm font-bold mb-2">
                        <HiOutlinePlay className="inline-block mr-2 h-5 w-5 text-gray-500" /> Twitch URL
                    </label>
                    <input type="text" id="twitchlink" value={twitchLink} onChange={e => settwitchLink(e.target.value)} name="twitchlink" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500
                        focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
                        dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Enter twitch URL..." />
                </div>
                <div className="flex justify-end">
                    <button
                        disabled={isLoading}
                        type="submit"
                        className={`text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
                       
                    >
                        {isLoading ? (
                            <svg aria-hidden="true" role="status" className="inline w-4 h-4 me-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
                            </svg>
                        ) : null}
                        {isLoading ? 'Loading...' : 'Create'}
                    </button>
                </div>
            </form>
        </div>
        <ToastContainer/>
        </div>
        </motion.div>
    );
}
