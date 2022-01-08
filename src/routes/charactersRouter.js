const express = require('express');
const router = express.Router();
const charactersController = require ('../controllers/charactersController')
const validations = require ('../middlewares/validations')
const auth = require ('../middlewares/auth')

// Rutas creacion de personajes
router.get('/create');
router.post('/' , auth, validations.characters, charactersController.create);

// Ruta para listar personajes
router.get('/search' , charactersController.search);
router.get('/' , charactersController.index);

// Rutas para editar personaje
router.get('/edit/:id' , charactersController.editForm);
router.put('/:id' , auth, validations.characters, charactersController.edit );

//Ruta para borrar personaje
router.delete('/:id' , auth, charactersController.delete );

// Ruta detalle de personajes 
router.get('/:id' , charactersController.detail);


module.exports = router;