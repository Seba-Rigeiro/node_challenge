const express = require('express');
const router = express.Router();
const path = require ('path')
const charactersController = require ('../controllers/charactersController')

// Rutas creacion de personajes
router.get('/create' , );
router.post('/' , charactersController.create);

// Ruta para listar personajes
router.get('/' , charactersController.index);

// Rutas para editar personaje
router.get('/edit/:id' , charactersController.editForm);
router.put('/:id' , charactersController.edit );

//Ruta para borrar personaje
router.delete('/:id' , charactersController.delete );

// Ruta detalle de personajes 
router.get('/:id' , charactersController.detail);
router.get('/platform/:id' , );


module.exports = router;