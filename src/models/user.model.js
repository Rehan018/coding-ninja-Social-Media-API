class User {
	constructor(id, username, email, password, isAdmin = false) {
		this.id = id;
		this.username = username;
		this.email = email;
		this.password = password;
		this.isAdmin = isAdmin;
		this.followers = [];
		this.following = [];
	}
}

const users = {};

const createUser = (username, email, password, isAdmin) => {
	const id = Object.keys(users).length + 1;
	const newUser = new User(id, username, email, password, isAdmin);
	users[id] = newUser;
	return newUser;
};

const getUserByEmail = (email) => {
	return Object.values(users).find(user => user.email === email);
};

const getUserByUsernameOrEmail = (username, email) => {
	return Object.values(users).find(user => user.username === username || user.email === email);
};

const getUserById = (id) => {
	return users[id];
};

const updateUserById = (id, updatedData) => {
	if (users[id]) {
		users[id] = { ...users[id], ...updatedData };
		return users[id];
	}
	return null;
};

const deleteUserById = (id) => {
	if (users[id]) {
		delete users[id];
		return true;
	}
	return false;
};

export default {
	createUser,
	getUserByEmail,
	getUserByUsernameOrEmail,
	getUserById,
	updateUserById,
	deleteUserById,
};
