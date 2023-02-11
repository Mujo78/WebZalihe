const {Users} = require("./korisnik")

module.exports = (sequelize, DataTypes) =>{
    const zaposlenik = sequelize.define("Zaposlenik", {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        ime: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        prezime: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        broj_telefona: {
            type: DataTypes.STRING(14),
            allowNull: false
        },
        adresa: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        email_adresa: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        datum_zaposlenja: {
            type: DataTypes.STRING(10),
            allowNull: false
        },
        datum_otkaza: {
            type: DataTypes.STRING(10),
            allowNull: true
        }
    });


    return zaposlenik;
}