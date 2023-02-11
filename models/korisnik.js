module.exports = (sequelize, DataTypes) =>{
    const user = sequelize.define("Users",  {
        userName: {
            type: DataTypes.STRING,
            allownull: false
        },
        password: {
            type: DataTypes.STRING,
            allownull: false
        },
        roleId:{
            type: DataTypes.INTEGER
        }
    })

    user.associate = (models) => {
        user.belongsTo(models.Zaposlenik);
        user.belongsTo(models.Role, {
            foreignKey:{
                name: "roleId"
            }
        });
    }
    return user;
}