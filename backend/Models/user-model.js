import mongoose from "mongoose";
import bcrypt from 'bcrypt'
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    UID: {
        type: String,
        required: true
    },
    FirstName: {
        type: String,
        required: true
    },
    LastName: {
        type: String,
        required: true
    },
    MobileNumber: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true
    },
    Hash_password: {
        type: String,
        required: true
    },
    Picture: {
        type: String
    },
})

export default mongoose.model("User", UserSchema)