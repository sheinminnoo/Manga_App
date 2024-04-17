import React from 'react'

export default function Tag({tags}) {
    return (
        <div className="px-3 pt-2 pb-1">
        { !!tags.length && tags.map((tag,i) => (
            <span key={i} className="inline-block bg-gray-200 rounded-full px-2 py-1 text-xs font-semibold text-gray-700 mr-1 mb-1">{tag}</span>
        ))}
    </div>
    )
}
