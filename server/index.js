const server = require('./.github/api/server');

const port = 5000;

// START YOUR SERVER HERE
server.listen(port, () => {
	console.log(`Listening to server at port ${port}`);
});
