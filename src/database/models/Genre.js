module.exports = (sequelize, DataTypes) => {
    const Genre = sequelize.define('Genre', {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        name: {
            type: DataTypes.STRING
        },
        image: {
            type: DataTypes.STRING ,
        },
    },   
    {
        tableName: 'genre',
        timestamps: false
                
    })

    Genre.associate = (models) => {
        Genre.hasMany (models.Movie, {
            as: 'movies'        
        })
    }
        
    return Genre
}