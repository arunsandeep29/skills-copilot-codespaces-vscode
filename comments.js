// create a web server
const express = require('express');
const app = express();
app.use(express.json());

// create a comments array
const comments = [
    { message: 'Hi there!' },
    { message: 'Hello!' },
    { message: 'How are you?' },
    { message: 'Great!' }
];

// get all comments
app.get('/comments', (req, res) => {
    res.send(comments);
});

// get a comment by id
app.get('/comments/:id', (req, res) => {
    const comment = comments[req.params.id];
    if (!comment) {
        res.status(404).send('Comment not found');
    } else {
        res.send(comment);
    }
});

// post a new comment
app.post('/comments', (req, res) => {
    const comment = {
        message: req.body.message
    };
    comments.push(comment);
    res.send(comment);
});

// update a comment by id
app.put('/comments/:id', (req, res) => {
    const comment = comments[req.params.id];
    if (!comment) {
        res.status(404).send('Comment not found');
    } else {
        comment.message = req.body.message;
        res.send(comment);
    }
});

// delete a comment by id
app.delete('/comments/:id', (req, res) => {
    const comment = comments[req.params.id];
    if (!comment) {
        res.status(404).send('Comment not found');
    } else {
        comments.splice(req.params.id, 1);
        res.send(comment);
    }
});

// listen to a port
app.listen(3000, () => console.log('Server is running...'));

// Run the server by running the following command on the terminal
// node comments.js

// Open a browser and type the following URL to see all comments
// http://localhost:3000/comments

// Open a browser and type the following URL to see a comment by id
// http://localhost:3000/comments/0

// Open a browser and type the following URL to post a new comment
// http://localhost:3000/comments
// and provide a message in the body

// Open a browser and type the following URL to update a comment by id
// http://localhost:3000/comments/0
// and provide a message in the body

// Open a browser and type the following URL