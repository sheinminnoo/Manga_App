import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import MangaCard from '../components/MangaCard';

const Home = () => {
    const [mangas, setMangas] = useState([]);

    useEffect(() => {
        const fetchMangas = async () => {
            try {
                const res = await axios.get('http://localhost:8000/api/mangas');
                if (res.status === 200) {
                    const data = await res.data;
                    setMangas(data);
                    console.log('Fetched mangas:', data);
                } else {
                    console.error('Failed to fetch mangas:', res.statusText);
                }
            } catch (error) {
                console.error('Error fetching mangas:', error);
            }
        };
        fetchMangas();

    }, []);

    return (
        <motion.div
            id="about"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 1 }}
            className="bg-gray-800 via-purple-500 to-pink-500 py-12 px-4 sm:px-6 lg:px-8 " // Updated background with gradient
        >
            <div className="bg-gray-800 flex flex-col min-h-screen ">
                <div className="pt-12 pl-10 ">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {mangas.length && (mangas.map(manga => (
                            <MangaCard manga={manga} key={manga._id} />
                        )))}
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Home;
