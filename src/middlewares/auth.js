const jwt = require ('jsonwebtoken')

module.exports = (req, res, next) => {

    if (!req.headers.authorization) {
        res.status(401).json({ msg: 'no autorizado'})
    } else {
        let token = req.headers.authorization.split(' ')[1]

        jwt.verify(token, 'es un secreto', (err, decoded) => {
            if(err) {
                res.status(500).json({ msg: 'error de autenticacion'})
            } else {
                
                next()
            }
        }) 
    }
}