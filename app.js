const express = require('express');
const app = express();
const charactersRouter = require ('./src/routes/charactersRouter')
const usersRouter = require ('./src/routes/usersRouter')

app.use(express.urlencoded({ extended: false}));
app.use(express.json());

app.use ('/characters', charactersRouter)
app.use('/auth', usersRouter)

app.listen(3000 , () => console.log('THE SERVER IS RUNNING'));
