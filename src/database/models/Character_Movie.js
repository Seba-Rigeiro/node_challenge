module.exports = (sequelize, DataTypes) => {
    const Character_Movie = sequelize.define('Character_Movie', {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        character_id: {
            type: DataTypes.INTEGER
        },
        movie_id: {
            type: DataTypes.INTEGER
        }
    },   
    {
        tableName: 'character_movie',
        timestamps: false
                
    })
        
    return Character_Movie
}