const { Schema, model } = require("mongoose");

const MangaSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    genre: {
        type: [String],
        required: true
    },
    description: {
        type: String,
        required: true
    },
    chapters: {
        type: Number,
        default: 0
    },
    rating: {
        type: Number,
        default: 0
    },
    status: {
        type: String,
        enum: ["Ongoing", "Completed"],
        default: "Ongoing"
    },
    releaseDate: {
        type: Date,
        default: Date.now
    },
    imageUrl: {
        type: String,
        required: true
    },
    chapterList: [
        {
            title: String,
            number: Number,
            releaseDate: Date
        }
    ],
    ongoingManga: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Manga'
        }
    ],
    recommendedManga: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Manga'
        }
    ]
}, { timestamps: true });

module.exports = model("Manga", MangaSchema);
