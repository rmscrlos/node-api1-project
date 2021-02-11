// BUILD YOUR SERVER HERE
const express = require('express');
const db = require('./users/model');
const bp = require('body-parser');

const server = express();
server.use(bp.json());
server.use(bp.urlencoded({ extended: true }));

// gets/fetches/find users
server.get('/api/users', async (req, res) => {
	await db
		.find()
		.then(users => res.json(users))
		.catch(err =>
			res.status(500).json({
				message: 'The users information could not be retrieved'
			})
		);
});

//creates users
server.post('/api/users', async (req, res) => {
	if (req.body.name && req.body.bio) {
		await db
			.insert(req.body)
			.then(newUser => {
				res.status(201).json(newUser);
			})
			.catch(err =>
				res.status(500).json({
					message: 'There was an error while saving the user to the database'
				})
			);
	} else {
		res.status(400).json({
			message: 'Please provide name and bio for the user'
		});
	}
});

//fetches user by id
server.get('/api/users/:id', async (req, res) => {
	const id = req.params.id;

	await db
		.findById(id)
		.then(user => {
			user
				? res.status(200).json(user)
				: res.status(404).json({
						message: 'The user with the specified ID does not exist'
				  });
		})
		.catch(err =>
			res.status(500).json({
				message: 'The user with the specified ID does not exist'
			})
		);
});

module.exports = server; // EXPORT YOUR SERVER instead of {}
