import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Form from './components/Form';
import UserList from './components/UserList';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { connect } from 'react-redux';

import { fetchUsers } from './actions/index';

const AppContainer = styled.div`
	width: 90%;
	margin: 1rem auto;
	padding: 1rem;
	display: flex;

	@media screen and (max-width: 600px) {
		flex-direction: column;
		width: 100%;
		margin: 0 auto;
		padding: 0;
	}

	@media screen and (max-width: 450px) {
		flex-direction: column;
		width: 100%;
		margin: 0 auto;
		padding: 0;
	}
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

	@media screen and (max-width: 800px) {
		width: 50%;
	}

	@media screen and (max-width: 600px) {
		width: 55%;
		margin: 1rem auto;
	}

	@media screen and (max-width: 450px) {
		width: 93%;
		height: 60%;
	}
`;

const Line = styled.div`
	background: rgba(255, 255, 255, 0.4);
	height: 35rem;
	width: 0.01rem;
	margin: auto 1rem;

	@media screen and (max-width: 800px) {
		height: 35rem;
	}

	@media screen and (max-width: 600px) {
		width: 22rem;
		height: 0.07rem;
		margin: 0 auto;
	}

	@media screen and (max-width: 450px) {
		width: 22rem;
		height: 0.07rem;
		margin: 0 auto;
	}
`;

const RightSide = styled.div`
	height: 100%;
	width: 63%;
	padding: 0 1rem;

	@media screen and (max-width: 600px) {
		margin: 0 auto;
	}

	@media screen and (max-width: 450px) {
		width: 95%;
		margin: 0 auto;
		padding: 0;
	}
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

function App({ notification, showNotification, fetchUsers }) {
	useEffect(() => {
		fetchUsers();
	}, []);

	return (
		<AppContainer>
			<LeftSide>
				<Form />
			</LeftSide>
			<Line />
			<RightSide>
				<UserList />
			</RightSide>
			{showNotification ? (
				<Alert>
					<CheckCircleIcon style={{ marginRight: '5px' }} />
					{notification}
				</Alert>
			) : null}
		</AppContainer>
	);
}

const mapStateToProps = state => {
	return {
		notification: state.notification,
		showNotification: state.showNotification
	};
};

const mapDispatchToProps = { fetchUsers };

export default connect(mapStateToProps, mapDispatchToProps)(App);
