import mongoose from "mongoose";
import { ACCOUNT_STATUSES, USER_ROLES } from "./constants.js";

const userSchema = new mongoose.Schema(
    {
        name: String,
        email: String,
        phoneNumber:Number,
        passwordHash: String,
        role:{ type:String, enum:USER_ROLES},
        accountStatus:{ type: String, enum: ACCOUNT_STATUSES },
        emailVerifiedAt:{type:Date, default:null},
        deletedAt:{type:Date, default:null},
    },
    { timestamps: true }
);

export default mongoose.model("User", userSchema);
