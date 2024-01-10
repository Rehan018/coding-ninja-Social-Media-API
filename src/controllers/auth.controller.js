import bcrypt from 'bcrypt';
import UserModel from '../models/user.model.js';

const registerUser = async (req, res, next) => {
	try {
		const { username, email, password, isAdmin = false } = req.body;
		const hashPassword = await bcrypt.hash(password, 10);

		const existingUser = UserModel.getUserByUsernameOrEmail(username, email);

		if (existingUser) {
			return res.status(409).json({ message: 'User already exists' });
		}

		const newUser = UserModel.createUser(username, email, hashPassword, isAdmin);

		const { password: _, ...userWithoutPassword } = newUser;
		res.json({ message: 'Successfully created', user: userWithoutPassword });
	} catch (err) {
		next(err);
	}
};

const loginUser = async (req, res, next) => {
	try {
		const { email, password } = req.body;
		const user = UserModel.getUserByEmail(email);

		if (!user) {
			return res.status(401).json({ message: 'User not found' });
		}

		const isPasswordMatch = await bcrypt.compare(password, user.password);

		if (isPasswordMatch) {
			// Exclude password from the response
			const { password: _, ...userWithoutPassword } = user;
			res.json({ message: 'Successfully logged in', user: userWithoutPassword });
		} else {
			res.status(401).json({ message: 'Invalid credentials' });
		}
	} catch (err) {
		next(err);
	}
};

export {
	registerUser,
	loginUser
};
