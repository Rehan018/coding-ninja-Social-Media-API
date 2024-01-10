import bcrypt from 'bcrypt';
import User from '../models/user.model.js';

const updateUser = async (req, res, next) => {
	try {
		if (req.body.password) {
			req.body.password = await bcrypt.hash(req.body.password, 10);
		}
		const updatedUser = await User.findByIdAndUpdate(req.params.userId, { $set: req.body }, { new: true });

		if (updatedUser) {
			// Exclude password from the response
			const { password, ...userWithoutPassword } = updatedUser.toObject();
			res.json({ msg: 'User detail successfully updated', user: userWithoutPassword });
		} else {
			res.status(404).json({ errMsg: 'User not found!' });
		}
	} catch (err) {
		next(err);
	}
};

const deleteUser = async (req, res, next) => {
	try {
		const userId = req.params.userId;
		await User.findByIdAndDelete(userId);
		res.json({ msg: 'User deleted!' });
	} catch (err) {
		next(err);
	}
};

const getUser = async (req, res, next) => {
	try {
		const userId = req.params.userId;
		const user = await User.findById(userId);
		if (user) {
			// Exclude password from the response
			const { password, ...userWithoutPassword } = user.toObject();
			res.json({ msg: 'Successfully fetched', user: userWithoutPassword });
		} else {
			res.status(404).json({ errMsg: 'User not found!' });
		}
	} catch (err) {
		next(err);
	}
};

const followUser = async (req, res, next) => {
	try {
		const followerId = req.body.id;
		const userId = req.params.userId;

		if (!followerId) {
			return res.status(400).json({ errMsg: 'Follower ID is required!' });
		}

		const user = await User.findById(userId);
		if (user) {
			if (user.followers.includes(followerId)) {
				return res.status(400).json({ errMsg: 'You are already following this user!' });
			}

			await User.findByIdAndUpdate(followerId, { $push: { following: userId } });
			await User.findByIdAndUpdate(userId, { $push: { followers: followerId } });

			res.status(200).json({ msg: 'You are now following this user!' });
		} else {
			return res.status(404).json({ errMsg: 'User not found!' });
		}
	} catch (err) {
		next(err);
	}
};

const unfollowUser = async (req, res, next) => {
	try {
		const followerId = req.body.id;
		const userId = req.params.userId;

		if (!followerId) {
			return res.status(400).json({ errMsg: 'Follower ID is required!' });
		}

		const user = await User.findById(userId);
		if (user) {
			if (!user.followers.includes(followerId)) {
				return res.status(400).json({ errMsg: 'You are not following this user!' });
			}

			await User.findByIdAndUpdate(followerId, { $pull: { following: userId } });
			await User.findByIdAndUpdate(userId, { $pull: { followers: followerId } });

			res.status(200).json({ msg: 'You have unfollowed this user!' });
		} else {
			return res.status(404).json({ errMsg: 'User not found!' });
		}
	} catch (err) {
		next(err);
	}
};

export {
	updateUser,
	deleteUser,
	getUser,
	followUser,
	unfollowUser
};
