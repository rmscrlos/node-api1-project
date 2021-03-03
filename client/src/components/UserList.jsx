import React from 'react';
import UserCard from './UserCard.jsx';
import { connect } from 'react-redux';
import styled from 'styled-components';

const List = styled.div`
	width: 100%;
	display: flex;
	flex-wrap: wrap;

	@media screen and (max-width: 450px) {
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin: 0 auto;
	}
`;

function UserList({ users }) {
	return (
		<List>
			{users.map(user => {
				return <UserCard key={user.id} user={user} />;
			})}
		</List>
	);
}

const mapStateToProps = state => {
	return {
		users: state.users
	};
};

export default connect(mapStateToProps, null)(UserList);
