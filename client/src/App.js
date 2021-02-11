import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Form from './components/Form';
import UserList from './components/UserList';
import axios from 'axios';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

const AppContainer = styled.div`
	width: 90%;
	height: 90vh;
	margin: 1rem auto;
	padding: 1rem;
	display: flex;
`;

const LeftSide = styled.div`
	background: rgba(255, 255, 255, 0.7);
	box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
	backdrop-filter: blur(4px);
	-webkit-backdrop-filter: blur(4px);
	border-radius: 10px;
	border: none;
	height: 40%;
	width: 27%;
	margin: 1rem;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Line = styled.div`
	background: rgba(255, 255, 255, 0.4);
	width: 0.5px;
	height: 95%;
	margin: auto 1rem;
`;

const RightSide = styled.div`
	height: 100%;
	width: 63%;
	padding: 0 1rem;
`;

const Alert = styled.div`
	position: absolute;
	color: rgb(149, 255, 57);
	padding: 1rem;
	left: 40%;
	bottom: 10%;
	display: flex;
	align-items: center;
	background: rgba(41, 45, 41, 0.235);
	box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
	backdrop-filter: blur(4px);
	-webkit-backdrop-filter: blur(4px);
	border-radius: 10px;

	animation: fadeIn ease-in-out 0.5s;

	@keyframes fadeIn {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
`;

function App() {
	const [showMessage, setShowMessage] = useState(false);
	const [message, setMessage] = useState('');
	const [users, setUsers] = useState([]);

	const fetchUsers = () => {
		axios
			.get('https://first-node-app-project.herokuapp.com/api/users')
			.then(res => {
				setUsers(res.data);
			})
			.catch(err => console.log(err));
	};

	useEffect(() => {
		fetchUsers();
	}, []);

	const hideMessage = () => {
		setTimeout(() => {
			setShowMessage(false);
		}, 4000);
	};

	console.log(users);
	return (
		<AppContainer>
			<LeftSide>
				<Form
					fetchUsers={fetchUsers}
					setMessage={setMessage}
					setShowMessage={setShowMessage}
					hideMessage={hideMessage}
				/>
			</LeftSide>
			<Line />
			<RightSide>
				<UserList users={users} fetchUsers={fetchUsers} />
			</RightSide>
			{showMessage ? (
				<Alert>
					<CheckCircleIcon style={{ marginRight: '5px' }} />
					{message}
				</Alert>
			) : null}
		</AppContainer>
	);
}

export default App;
