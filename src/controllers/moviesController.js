const db = require('../database/models')
const { Op, } = require('sequelize')

module.exports = {

    index: (req,res) => { 
        db.Movie.findAll({
            attributes: ['title', 'image', 'release_date']
        })
            .then(movies => {
                res
                    .status(200)
                    .json ({
                        movies: movies,
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
        const { title, image, release_date, rating, genre_id } = req.body
        
        db.Movie.create ({
            title, 
            image, 
            release_date, 
            rating, 
            genre_id
        })
        .then(movie => {
            res.status(200).send ({movie})
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
        db.Movie.findByPk(id)
       
        .then (Movie => {
            res.status (200)
                .json ({
                    data: Movie,
                    status: 'success'
                }) 
        })
    },

    edit : (req , res ) => {
        const { id } = req.params
        const { title, image, release_date, rating, genre_id } =  req.body
        
        db.Movie.findByPk(id)
        .then(movie => {
            
            db.Movie.update({
                title, 
                image, 
                release_date, 
                rating, 
                genre_id
            },

            {
                where: { id }
            })
    
            .then(() => {
                res.status(200).send ({movie})
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
        db.Movie.findByPk(req.params.id),
        db.Character_Movie.findAll({
            attributes: ['character_id'],
            where: {
                movie_id: req.params.id
            }
        })
    ])
            .then(([movieDetail, characterMovies]) => {
                res
                    .status(200)
                    .json ({
                        Movie: movieDetail,
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
        
        db.Movie.destroy({
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

    search: (req,res) => {
       
        const movie = db.Movie.findAll ({
           
           attributes: [ 'title', 'release_date', 'image'],
            where: {
                
                title: { [Op.like]: "%" + req.query.title + "%"} || ''
               
            }
        }).then ((movies) => {
                                     
                res.status(200).json(movies)
        })
    }            

}