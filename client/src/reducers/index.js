import { FETCH_USERS, CREATE_USER, NOTIFICATION, SHOW_NOTIFICATION, UPDATE_USER, DELETE_USER } from '../actions/index';

const initialState = {
	notification: '',
	showNotification: false,
	users: []
};

const appReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_USERS: {
			return {
				...state,
				users: action.payload
			};
		}
		case CREATE_USER: {
			return {
				...state,
				users: [...state.users, action.payload]
			};
		}
		case UPDATE_USER: {
			const i = state.users.findIndex(u => u.id === action.payload.id);
			const newUsers = [...state.users];
			newUsers[i] = { ...newUsers[i], name: action.payload.name, bio: action.payload.bio };

			console.log(i);
			return {
				...state,
				users: newUsers,
				update: false
			};
		}
		case DELETE_USER: {
			console.log(action.payload);
			const newArray = state.users.filter(u => u.id !== action.payload.id);
			return {
				...state,
				users: newArray
			};
		}
		case NOTIFICATION: {
			return {
				...state,
				notification: action.payload
			};
		}
		case SHOW_NOTIFICATION: {
			return {
				...state,
				showNotification: action.payload
			};
		}
		default: {
			return state;
		}
	}
};

export default appReducer;
