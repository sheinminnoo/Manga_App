import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';

const MangaDetail = () => {
    const [manga, setManga] = useState(null);
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [ongoingManga, setOngoingManga] = useState([]);
    const [recommendedManga, setRecommendedManga] = useState([]);

    useEffect(() => {
        const fetchManga = async () => {
            try {
                const res = await axios.get(`http://localhost:8000/api/mangas/${id}`);
                if (res.status === 200) {
                    setManga(res.data);
                } else {
                    setError('Failed to fetch manga');
                }
            } catch (error) {
                setError('Failed to fetch manga');
            } finally {
                setLoading(false);
            }
        };

        const fetchOngoingManga = async () => {
            try {
                const res = await axios.get(`http://localhost:8000/api/ongoing-manga`);
                if (res.status === 200) {
                    setOngoingManga(res.data);
                }
            } catch (error) {
                console.error('Failed to fetch ongoing manga:', error);
            }
        };

        const fetchRecommendedManga = async () => {
            try {
                const res = await axios.get(`http://localhost:8000/api/recommended-manga`);
                if (res.status === 200) {
                    setRecommendedManga(res.data);
                }
            } catch (error) {
                console.error('Failed to fetch recommended manga:', error);
            }
        };

        fetchManga();
        fetchOngoingManga();
        fetchRecommendedManga();

        return () => {
            setManga(null);
            setOngoingManga([]);
            setRecommendedManga([]);
        };
    }, [id]);

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

    if (!manga) {
        return (
            <div className="bg-gray-800 h-screen flex justify-center items-center">
                <div className="text-white">No manga found</div>
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
            className="bg-gray-800 via-purple-500 to-pink-500 py-12 px-4 sm:px-6 lg:px-8 " // Updated background with gradient
        >
            <div className="bg-gray-800 min-h-screen flex flex-col justify-between">
                <div className="container mx-auto px-4 pt-24 pb-10 max-w-5xl text-white">
                    <div className="flex flex-col sm:flex-row">
                        <div className="sm:w-2/5 mb-8 sm:mb-0">
                            <img className="w-full h-auto" src={manga.imageUrl} alt="Manga cover" />
                        </div>
                        <div className="sm:w-3/5 sm:ml-8">
                            <h1 className="text-4xl font-bold mb-4">{manga.title}</h1>
                            <p className="text-lg mb-4">{manga.description}</p>
                            <div>
                                <h2 className="text-lg font-semibold mb-2">Details:</h2>
                                <p className="text-base mb-2">Author: {manga.author}</p>
                                <p className="text-base mb-2">Genre: {manga.genre.join(', ')}</p>
                                <p className="text-base mb-2">Chapters: {manga.chapters}</p>
                                <p className="text-base mb-2">Rating: {manga.rating}</p>
                                <p className="text-base mb-2">Status: {manga.status}</p>
                                <p className="text-base mb-2">Release Date: {new Date(manga.releaseDate).toLocaleDateString()}</p>
                                <h2 className="text-lg font-semibold mb-2">Chapter List:</h2>
                                <ul>
                                    {manga.chapterList.map((chapter, index) => (
                                        <li key={index}>{chapter.title}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container mx-auto px-4 pb-10 max-w-5xl text-white">
                    <h2 className="text-2xl font-bold mb-4">Ongoing Manga</h2>
                    <ul>
                        {ongoingManga.map((manga, index) => (
                            <li key={index}>{manga.title}</li>
                        ))}
                    </ul>
                </div>
                <div className="container mx-auto px-4 pb-10 max-w-5xl text-white">
                    <h2 className="text-2xl font-bold mb-4">Recommended Manga</h2>
                    <ul>
                        {recommendedManga.map((manga, index) => (
                            <li key={index}>{manga.title}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </motion.div>
    );
};

export default MangaDetail;
