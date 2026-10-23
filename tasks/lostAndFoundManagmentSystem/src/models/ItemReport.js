import mongoose from "mongoose";
import { REPORT_TYPES, REPORT_STATUSES, CLAIM_STATUSES } from "./constants";


const itemReportSchema = new mongoose.Schema(
    {
        reporterId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },

        categoryId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "category",
        },

        reportType: {
            type: String,
            enum: REPORT_TYPES,
        },

        title: {
            type: String,
        },

        description: {
            type: String,
        },

        images: {
            type: [
                {
                    url: {
                        type: String,
                        required: true
                    },
                    storageKey: {
                        type: String,
                        default: null
                    }
                }
            ],
            default: [],
        },

        location: {  // use latti longi
            googleMapsUrl: {
                type: String,
                default: null
            },
            description: {
                type: String,
                default: null
            }
        },

        eventDate: {
            type: Date,
            default: null
        },

        reportStatus: {
            type: String,
            enum: REPORT_STATUSES,
            default: "OPEN"
        },

        claimStatus:{
            type:String,
            enum:CLAIM_STATUSES,
            default:"PENDING"
        },

        resolvedAt: {
            type: Date,
            default: null
        },

        deletedAt: { // add isDeleted 
            type: Date,
            default: null
        }
    },

    {
        timestamps: true
    }
);

export default mongoose.model("ItemReport", itemReportSchema);
