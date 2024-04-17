import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FaTwitch, FaDownload } from 'react-icons/fa';
import { motion } from 'framer-motion';


export default function GameDetail() {
    const { id } = useParams();
    const [game, setGame] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchGame = async () => {
            try {
                const res = await fetch(`http://localhost:8000/api/gameBlogs/${id}`);
                if (res.ok) {
                    const data = await res.json();
                    setGame(data);
                } else {
                    setError('Failed to fetch game');
                }
            } catch (error) {
                setError('Failed to fetch game');
            } finally {
                setLoading(false);
            }
        };

        fetchGame();

        return () => {
            setGame(null);
        };
    }, [id]);

    // Display loading indicator while data is being fetched
    if (loading) {
        return (
            <div className="bg-gray-800 h-screen flex justify-center items-center">
                <div className="text-white">Loading...</div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="bg-gray-800 h-screen flex justify-center items-center">
                <div className="text-white">Error: {error}</div>
            </div>
        );
    }

    if (!game) {
        return (
            <div className="bg-gray-800 h-screen flex justify-center items-center">
                <div className="text-white">No game found</div>
            </div>
        );
    }

    return (
        <motion.div
            id="about"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 1 }}
            className="bg-gray-800 via-purple-500 to-pink-500 py-12 px-4 sm:px-6 lg:px-8 flex justify-center" // Updated background with gradient and added flex justify-center
        >
            <div className="bg-gray-800 min-h-screen flex justify-center items-center">
                <div className="container mx-auto px-4 pt-20 max-w-5xl ">
                    <div className="bg-white shadow-md rounded-lg overflow-hidden p-6 sm:flex">
                        <div className="sm:w-2/3 sm:mr-4">
                            <h1 className="text-3xl font-bold mb-4"><span className="text-yellow-500">{game.title}</span></h1>
                            <p className="text-gray-600 mb-4"><span className="text-yellow-500">{game.description}</span></p>
                            <div>
                                <h2 className="text-lg font-semibold mb-2">Details:</h2>
                                <p className="text-gray-600 mb-2">Content: <span className="text-yellow-500">{game.content}</span></p>
                                <p className="text-gray-600 mb-2">Tags: <span className="text-yellow-500">{game.tags.join(', ')}</span></p>
                                <p className="text-gray-600">Requirements: <span className="text-yellow-500">{game.requirements}</span></p>
                            </div>
                            <div className="flex items-center justify-between mt-4">
                                <p className="font-semibold text-gray-600">Company: <span className="text-yellow-500">{game.company}</span></p>
                                <div className="flex items-center">
                                    <a href={game.downloadlink} className="btn mr-4 ">
                                        <FaDownload className="mr-1" /> Download
                                    </a>
                                    <a href={game.twitchLink} className="btn">
                                        <FaTwitch className="mr-1" /> Twitch
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="sm:w-1/3 sm:ml-4 mt-4 sm:mt-0">
                            <img className="w-full h-auto" src={game.imageUrl} alt="Game cover" />
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
