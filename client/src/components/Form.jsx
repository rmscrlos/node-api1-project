import React, { useState } from 'react';
import { FormControl, TextField, Button, Typography } from '@material-ui/core';
import { connect } from 'react-redux';
import { createUser, hideMessage, fetchUsers } from '../actions/index';
import styled from 'styled-components';

const FormContainer = styled.div`
	padding: 1.5rem;
`;

function Form({ createUser, hideMessage, fetchUsers }) {
	const [formValues, setFormValues] = useState({
		name: '',
		bio: ''
	});

	const handleChange = e => {
		setFormValues({
			...formValues,
			[e.target.name]: e.target.value
		});
	};

	const handleSubmit = e => {
		e.preventDefault();

		createUser(formValues);
		hideMessage();
		fetchUsers();

		setFormValues({
			name: '',
			bio: ''
		});
	};

	return (
		<>
			<FormContainer>
				<Typography align="center" variant="h5" style={{ color: '#313131', textTransform: 'lowercase' }}>
					Add user
				</Typography>
				<form onSubmit={handleSubmit}>
					<FormControl>
						<TextField
							id="name"
							label="Name"
							name="name"
							margin="dense"
							value={formValues.name}
							onChange={handleChange}
							aria-describedby="my-helper-text"
							required
							variant="outlined"
						/>
						<TextField
							id="bio"
							label="Bio"
							name="bio"
							margin="dense"
							value={formValues.bio}
							onChange={handleChange}
							aria-describedby="my-helper-text"
							required
							variant="outlined"
						/>
						<Button
							style={{
								backgroundColor: '#21D4FD',
								backgroundImage: 'linear-gradient(19deg, #21D4FD 0%, #B721FF 100%)'
							}}
							variant="contained"
							color="primary"
							type="submit"
							disabled={!formValues}
						>
							Add
						</Button>
					</FormControl>
				</form>
			</FormContainer>
		</>
	);
}

const mapDispatchToProps = { createUser, hideMessage, fetchUsers };

export default connect(null, mapDispatchToProps)(Form);
