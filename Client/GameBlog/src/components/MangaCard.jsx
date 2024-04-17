import React from 'react';
import { Link } from 'react-router-dom';

const MangaCard = ({ manga }) => {
  const { title, author, genre, description, chapters, rating, status, releaseDate, imageUrl } = manga;

  return (
    <Link  to={`mangas/${manga._id}`} key={manga._id} >
    <div className="w-full max-w-xs p-2 sm:p-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
      <img src={imageUrl} alt={title} className="w-full h-auto mb-2 rounded-lg" />

      <div className="mb-2">
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="text-gray-600 text-sm">by {author}</p>
      </div>
      <div className="mb-2">
        <p className="text-gray-600 text-sm"><span className="font-semibold">Genre:</span> {genre.join(', ')}</p>
        <p className="text-gray-600 text-sm"><span className="font-semibold">Chapters:</span> {chapters}</p>
        <p className="text-gray-600 text-sm"><span className="font-semibold">Rating:</span> {rating}</p>
      </div>

      <div className="flex justify-between items-center">
        <p className={`text-${status === 'Ongoing' ? 'green' : 'blue'}-600 font-semibold text-sm`}>{status}</p>
        <p className="text-gray-600 text-sm">{new Date(releaseDate).toDateString()}</p>
      </div>
    </div>
    </Link>

  );
};

export default MangaCard;
