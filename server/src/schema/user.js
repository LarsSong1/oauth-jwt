import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    clerkId: { type: String, unique: true, required: true },
    email: String,
    fullName: String,
}, { timestamps: true })


const User = mongoose.model('User', userSchema)
export default User;