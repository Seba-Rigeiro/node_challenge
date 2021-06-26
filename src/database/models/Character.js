module.exports = (sequelize, DataTypes) => {
    const Character = sequelize.define('Character', {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        name: {
            type: DataTypes.STRING
        },
        age: {
            type: DataTypes.STRING
        },
        weight: {
            type: DataTypes.STRING
        },
        story: {
            type: DataTypes.STRING
        },                
        image: {
            type: DataTypes.STRING ,
        },
    },   
    {
        tableName: 'characters',
        timestamps: false
    })
    
    Character.associate = (models) => {
        Character.belongsToMany (models.Movie, {
            as: 'movies',
            through: 'character_movie',
            foreingKey: 'character_id',
            otherKey: 'movie_id',
            timestamps: false
        })
    }
        
    return Character
}