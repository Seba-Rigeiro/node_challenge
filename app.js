const express = require('express');
const app = express();
const charactersRouter = require ('./src/routes/charactersRouter')
const usersRouter = require ('./src/routes/usersRouter')
const moviesRouter = require ('./src/routes/moviesRouter')

app.use(express.urlencoded({ extended: false}));
app.use(express.json());

app.use('/auth', usersRouter)
app.use ('/characters', charactersRouter)
app.use ('/movies', moviesRouter)



app.listen(3000 , () => console.log('THE SERVER IS RUNNING'));
