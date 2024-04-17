import React from 'react'
import { Link, useParams } from 'react-router-dom'
import Tag from './Tag'

export default function GameCard({ blog }) {
    return (
        <Link to={`gameBlogs/${blog._id}`} key={blog._id}>
            <div className="bg-white max-w-xs rounded overflow-hidden shadow-lg">
                <img className="w-full" src={blog.imageUrl} alt="Sunset in the mountains" />
                <div className="px-3 py-2">
                    <div className="font-bold text-base mb-1">{blog.title}</div>
                    <p className="text-gray-700 text-sm">{blog.description}</p>
                </div>
                <Tag tags={blog.tags} />
                <p className="text-gray-500 text-xs mt-1 text-center mb-2">Published by {blog.company}</p>
            </div>
        </Link>
    )
}
