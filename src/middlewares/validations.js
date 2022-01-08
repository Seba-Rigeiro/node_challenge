const {body} = require ('express-validator')
module.exports = {
    // Validaciones para formulario de registro
    registerForm : [
        body ('first_name')
            .notEmpty().withMessage ('Ingrese su nombre').bail()
            .isLength({ min:2}).withMessage ('Su nombre debe ser de al menos 2 letras')
            .isLength({ max:30,}).withMessage ('Su nombre no puede ser mayor a 30 letras'),
        
        body ('last_name')
            .notEmpty().withMessage ('Ingrese su Apellido').bail()
            .isLength({ min:2,}).withMessage ('Su apellido debe ser de al menos 2 letras')
            .isLength({ max:30,}).withMessage ('Su apellido no puede ser mayor a 30 letras'),
        
        body ('email')
            .notEmpty().withMessage ('Ingrese su email').bail()
            .isEmail().withMessage ('Ingresa un email valido'),
        
        body ('password')
            .notEmpty().withMessage ('Ingresa una contraseña').bail()
            .isLength( { min:4, max:10 }).withMessage ('Ingresa una contraseña entre 4 y 10 caracteres'),
    ],
    
    characters : [
        body ('name')
            .notEmpty().withMessage ('Ingrese el nombre').bail()
            .isLength({ min:2,}).withMessage ('Debe tener al menos 2 letras')
            .isLength({ max:30,}).withMessage ('No puede ser mayor a 30 letras'),

        body ('age')
            .notEmpty()
            .isNumeric().withMessage ('Ingresa un valor numerico'),

        body ('weight')
            .notEmpty()
            .isNumeric().withMessage ('Ingresa un valor numerico'),
        
        body ('story')
            .notEmpty().bail()
            .isLength({ min:10,}).withMessage ('Debe ser entre 10 y 250 caracteres')
            .isLength({ max:250,}).withMessage ('Debe ser entre 10 y 250 caracteres'),
                       
    ],

}