module.exports = (sequelize, DataTypes) => {
    const Character_Movie = sequelize.define('Character_Movie', {
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
            type: DataTypes.NUMBER
        },
        story: {
            type: DataTypes.STRING
        },                
        image: {
            type: DataTypes.STRING ,
        },
    },   
    {
        tableName: 'character_movie',
        timestamps: false
                
    })
        
    return Character_Movie
}