const db = require('../database/models');
const bcrypt = require ('bcryptjs')
const { validationResult } = require ('express-validator');
const jwt = require ('jsonwebtoken')

module.exports = {

    register : (req , res) => {
        let errors = validationResult(req);
        // Si no hay errores,busca el usuario por email
        if (errors.isEmpty()){
        let passwordHash = bcrypt.hashSync(req.body.password, 10)    
        
        db.User.findOne({
                where: {
                    email: req.body.email
                }
            })
            .then (dbUser =>{
                if (dbUser) {
                    res.status(500).send({ message: 'El mail ya existe'})
            
                } else {

                    const { first_name, last_name, email, password, image} =  req.body
                               
                    db.User.create({
                    first_name: first_name ,
                    last_name: last_name , 
                    email: email, 
                    password: passwordHash,
                    image: image 
                
                    })
                    .then(user => {

                        let token = jwt.sign({ user: user}, 'es un secreto', {expiresIn: '7 days'})
                        
                        res.status(200)
                            .json({
                                user: user,
                                token: token
                            })
                    })
                    .catch(err => 
                        res.status(500)
                            .json(err))
                }
            })
        } else {
            res.status(500)
               .json(errors.mapped())
        }    
    },
    login:(req, res) => {
        
            db.User.findOne({
                where: {
                    email: req.body.email
                }
            })
            .then(user => {
                
                if (!user) {
                    res.status(404).json({ msg: 'el email es incorrecto'})
                } else {
                    
                    if (bcrypt.compareSync(req.body.password, user.password)) {
                        
                        let token = jwt.sign({ user: user}, 'es un secreto', {expiresIn: '7 days'})
                        res.status(200)
                            .json({
                                user: user,
                                token: token
                            })
                } else {
                    res.status(404).json({ msg: 'contrase??a incorrecta'})
                }
            }
        })
            
                .catch(err => {
                    res.status(500)
                        .json(err)
                })  
    }                   
}