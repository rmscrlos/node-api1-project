import axios from 'axios';

export const FETCH_USERS = 'FETCH_USERS';
export const CREATE_USER = 'CREATE_ACC';
export const UPDATE_USER = 'UPDATE_USER';
export const DELETE_USER = 'DELETE_USER';
export const SWITCH_UPDATE = 'SWITCH_UPDATE';
export const NOTIFICATION = 'NOTIFICATION';
export const SHOW_NOTIFICATION = 'SHOW_NOTIFICATION';

// fetch users
export const fetchUsers = () => dispatch => {
	axios
		.get('https://first-node-app-project.herokuapp.com/api/users')
		.then(res => {
			dispatch({ type: FETCH_USERS, payload: res.data });
		})
		.catch(err => console.log(err));
};

// create user
export const createUser = user => dispatch => {
	axios
		.post('https://first-node-app-project.herokuapp.com/api/users', user)
		.then(res => {
			console.log(res);
			dispatch({ type: NOTIFICATION, payload: res.data.message });
			dispatch({ type: SHOW_NOTIFICATION, payload: true });
			dispatch({ type: CREATE_USER, payload: res.data.newUser });
		})
		.catch(err => console.log(err));
};

// update user
export const updateUser = (id, updatedUser) => dispatch => {
	axios
		.put(`https://first-node-app-project.herokuapp.com/api/users/${id}`, updatedUser)
		.then(res => {
			console.log(res);
			dispatch({ type: UPDATE_USER, payload: res.data });
		})
		.catch(err => console.log(err));
};

// delete user
export const deleteUser = id => dispatch => {
	axios
		.delete(`https://first-node-app-project.herokuapp.com/api/users/${id}`)
		.then(res => {
			dispatch({ type: DELETE_USER, payload: res.data });
		})
		.catch(err => console.log(err));
};

// hides notification from ui
export const hideMessage = () => dispatch => {
	setTimeout(() => {
		dispatch({ type: SHOW_NOTIFICATION, payload: false });
	}, 4000);
};

// switch update true and false
export const switchUpdate = update => dispatch => {
	dispatch({ type: SWITCH_UPDATE, payload: update });
};
