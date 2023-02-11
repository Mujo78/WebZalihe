module.exports = (sequelize, DataTypes) => {
    const role = sequelize.define("Role", {
        naziv:{
            type: DataTypes.STRING(20),
            allowNull: false
        }
    })

    role.associate = (models) => {
        role.hasMany(models.Users, {
            onDelete: "cascade",
            foreignKey: {
                name: "roleId"
            }
        });
    }

    return role;
}