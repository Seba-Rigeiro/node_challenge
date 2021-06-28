const express = require('express');
const app = express();
const charactersRouter = require ('./src/routes/charactersRouter')
const usersRouter = require ('./src/routes/usersRouter')
const auth = require ('./src/middlewares/auth')

app.use(express.urlencoded({ extended: false}));
app.use(express.json());

app.use('/auth', usersRouter)
app.use ('/characters', auth, charactersRouter)



app.listen(3000 , () => console.log('THE SERVER IS RUNNING'));
