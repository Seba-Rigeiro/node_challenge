module.exports = (sequelize, DataTypes) => {
    const Movie = sequelize.define('Movie', {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        title: {
            type: DataTypes.STRING
        },
        image: {
            type: DataTypes.STRING
        },
        release_date: {
            type: DataTypes.DATE
        },
        rating: {
            type: DataTypes.NUMBER
        },
        genre_id: {
            type: DataTypes.INTEGER
        },                
    },   
    {
        tableName: 'movies',
        timestamps: false
                
    })

    Movie.associate = (models) => {
        Movie.belongsToMany (models.Character, {
            as: 'characters',
            through: 'character_movie',
            foreingKey: 'movie_id',
            otherKey: 'character_id',
            timestamps: false
        })
        Movie.belongsTo (models.Genre, {
            as: 'genre',
            foreingKey: 'genre_id'
        })
    }
        
    return Movie
}