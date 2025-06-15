import User from "../schema/user.js";



export const createUser = async (req, res) => {
    try {
        const { clerkUserId, email, name } = await req.body
        const user = await User.findOneAndUpdate(
            { clerkId: clerkUserId },
            { email, fullName: name },
            { new: true, upsert: true }
        );
        return res.json({ ok: true, user });
    } catch (error) {
        console.error('Error al crear usuario', error)
        return res.status(500).json({ ok: false, error: err.message });
    }
}
