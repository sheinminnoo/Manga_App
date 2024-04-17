import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ContactUs() {
    let[username,setUsername] = useState('');
    let[email,setEmail] = useState('')
    let[message,setMessage] = useState('')
    let[errors,setErrors] = useState([])

    const navigate = useNavigate();

    const createMessage  = async(e) =>{
        try{
            e.preventDefault();
            let data = {
                username,
                email,
                message
            };
            let res = await axios.post('http://localhost:8000/api/user/message',data)
            if (res.status === 200) {
                toast.success("Message send successful");
                window.scrollTo({ top: 0, behavior: 'smooth' });
                setUsername(''); 
                setEmail('');
                setMessage('');
            }            
        }catch(e){
            setErrors(Object.keys(e.response.data.errors));
        }
    }
    
    return (
        <div className="text-black py-8">
        <div className="max-w-screen-xl mx-auto px-4">
            <h2 className="text-white text-2xl font-bold mb-4">Contact Us</h2>
            <form onSubmit={createMessage}>
                <div className="mb-4">
                <label for="website-admin" class="block mb-2 text-sm font-medium text-white dark:text-white">Username</label>
                <div class="flex">
                    <span class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                    <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
                    </svg>
                    </span>
                    <input value={username} onChange={e=>setUsername(e.target.value)} type="text" id="website-admin" class="rounded-none rounded-e-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Username">
                    </input>
                </div>
                </div>
                <div className="mb-4">
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-white dark:text-white">
                    Your email
                </label>
                <input value={email} onChange={e=>setEmail(e.target.value)} type="email" id="email" aria-describedby="helper-text-explanation" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com">
                </input>
                <p id="helper-text-explanation" className="mt-2 text-sm text-white dark:text-gray-400">We’ll never share your details. Read our <a href="#" className="font-medium text-blue-600 hover:underline dark:text-blue-500">Privacy Policy</a>.</p>
                </div>
                <div className="mb-4">
                    <label htmlFor="message" className="text-white block mb-1">Message</label>
                    <textarea
                        id="message"
                        value={message}
                        onChange={e=>setMessage(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-md"
                        rows="5"
                        required
                    ></textarea>
                </div>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">Submit</button>
            </form>
        </div>
        <ToastContainer/>
    </div>
    )
}
