
module.exports = (sequelize, DataTypes) => {
    const sirovina = sequelize.define("Sirovina", {
        naziv:{
            type: DataTypes.STRING(50),
            allowNull: false
        },
        kolicina:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        min_kolicina:{
            type:DataTypes.INTEGER,
            allowNull:false
        },
        cijena:{
            type: DataTypes.DOUBLE,
            allowNull:false
        },
        jedinica_mjere:{
            type: DataTypes.STRING(10),
            allowNull: false
        },
        da_li_se_koristi:{
            type:DataTypes.BOOLEAN,
            allowNull: false
        },

        dobavljac_id:{
            type: DataTypes.INTEGER,
            allowNull: false
        }
    })

    
    return sirovina;
}