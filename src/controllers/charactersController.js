const db = require('../database/models')

module.exports = {

    index: (req,res) => { 
        db.Character.findAll({
            attributes: ['name', 'image']
        })
            .then(characters => {
                res
                    .status(200)
                    .json ({
                        data: characters,
                        status: 'success'
                })
            })
            .catch(error => {
                res
                    .status(500)
                    .json ({
                        status: 'error',
                        error: error
                })
            })
    },

    create: (req,res) => {
        const { name, age, weight, story, image } = req.body
        console.log (req.body)
        db.Character.create ({
            name, 
            age, 
            weight, 
            story, 
            image
        })
        .then(character => {
            res.status(200).send ({character})
        })
        .catch(error => {
            res
                .status(500)
                .json ({
                    status: 'error',
                    error: error
            })
        }) 
    },

    editForm : (req , res ) => {
        const { id } = req.params
        db.Character.findByPk(id)
       
        .then (character => {
            res.status (200)
                .json ({
                    data: character,
                    status: 'success'
                }) 
        })
    },

    edit : (req , res ) => {
        const { id } = req.params
        const { name, age, weight, story, image } =  req.body
        
        db.Character.findByPk(id)
        .then(character => {
            
            db.Character.update({
                name, 
                age, 
                weight, 
                story, 
                image
            },

            {
                where: { id }
            })
    
            .then(() => {
                res.status(200).send ({character})
            })
            
            .catch(error => {
                res
                    .status(500)
                    .json ({
                        status: 'error',
                        error: error
                })
            }) 
        })    
                    
    },

    detail : (req , res ) => {
       Promise.all([ 
        db.Character.findByPk(req.params.id),
        db.Character_Movie.findAll({
            attributes: ['movie_id'],
            where: {
                character_id: req.params.id
            }
        })
    ])
            .then(([characterDetail, characterMovies]) => {
                res
                    .status(200)
                    .json ({
                        Character: characterDetail,
                        CharacterMovies: characterMovies ,
                        status: 'success'
                })
            })
            .catch(error => {
                console.log (error)
                res
                    .status(500)
                    .json ({
                        status: 'error',
                        error: error
                })
            })  
        
                    
    },

    delete(req, res) {
        
        db.Character.destroy({
                where: {
                    id: req.params.id
                }
        })
            // Direcciona al listado de productos
            .then((response) => {
                res.status (200)
            })
            .catch(error => {
                res
                    .status(500)
                    .json ({
                        status: 'error',
                        error: error
                })
            }) 
    
    },
                
}