module.exports = (sequelize, DataTypes) =>{
    const dobavljac = sequelize.define("Dobavljac", {
        naziv:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        jib:{
            type:  DataTypes.INTEGER,
            allowNull: false
        },
        pdv:{
           type: DataTypes.INTEGER,
            allowNull: true
        },
        broj_telefona:{
            type: DataTypes.STRING(14),
            allowNull: false
        },
        kontakt_osoba:{
            type: DataTypes.STRING,
            allowNull: false
        },
        email_address:{
            type: DataTypes.STRING,
            allowNull: false
        },
        datum_pocetka:{
            type: DataTypes.STRING(10),
            allowNull: false
        },
        datum_zavrsetka:{
            type: DataTypes.STRING(10),
            allowNull: false
        }
    })

    dobavljac.associate = (models) => {
        dobavljac.hasMany(models.Sirovina, {
            onDelete: "cascade",
            foreignKey: {
                name: "dobavljac_id"
            }
        })
    }

    return dobavljac;
}