
import mongoose from "mongoose";

const categorySchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
            minlength: 2,
            maxlength: 60
        },

        slug: {
            type: String,
            required: true,
            trim: true,
            lowercase: true,
            match: /^[a-z0-9]+(?:-[a-z0-9]+)*$/,
            unique:true,
        },

        description: {
            type: String,
            trim: true,
            maxlength: 300,
            default: ""
        },

        icon: {
            type: String,
            trim: true,
            maxlength: 100,
            default: null
        },

        isActive: {
            type: Boolean,
            default: true
        },

        createdBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            default: null
        }
    },
    {
        timestamps: true
    }
);


categorySchema.index(
    { slug: 1 },
    { unique: true }
);


export default mongoose.model("Category", categorySchema);
