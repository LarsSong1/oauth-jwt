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


export const getProtectedData = async (req, res) => {
    try {
        const clerkUserId = req.auth.userId;
        const userInDb = await User.findOne({ clerkId: clerkUserId });

        if (!userInDb) {
            return res.status(404).json({ message: 'User data not found in your database for this Clerk ID.' });
        }

        res.status(200).json({
            message: 'You have successfully accessed protected data!',
            clerkAuth: req.auth,
            userDataFromDB: {
                clerkId: userInDb.clerkId,
                email: userInDb.email,
                fullName: userInDb.fullName,
          
            }
        });
    } catch (error) {
        console.error('Error al acceder a los datos protegidos:', error);
        res.status(500).json({ message: 'Server error accessing protected data.', error: error.message });
    }
};