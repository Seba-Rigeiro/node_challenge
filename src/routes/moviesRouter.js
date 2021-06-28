const express = require('express');
const router = express.Router();
const moviesController = require ('../controllers/moviesController')

// Rutas creacion de personajes
router.get('/create' , );
router.post('/' , moviesController.create);

// Ruta para listar personajes
router.get('/search' , moviesController.search);
router.get('/' , moviesController.index);

// Rutas para editar personaje
router.get('/edit/:id' , moviesController.editForm);
router.put('/:id' , moviesController.edit );

//Ruta para borrar personaje
router.delete('/:id' , moviesController.delete );

// Ruta detalle de personajes 
router.get('/:id' , moviesController.detail);


module.exports = router;