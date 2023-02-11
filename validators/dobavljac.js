const {check} = require("express-validator")
const{
    POST_NAZIV_REQUIRED,
    POST_JIB_REQUIRED,
    POST_PDV_REQUIRED,
    POST_EMAIL_REQUIRED,
    POST_BROJTELEFONA_REQUIRED,
    POST_DATUMPOCETKA_REQUIRED,
    POST_DATUMZAVRSETKA_REQUIRED,
    POST_KONTAKTOSOBA_REQUIRED
} = require("../constants/dobavljac-constant")

exports.editDobavljacValidator = [
    check("naziv")
    .notEmpty()
    .withMessage(POST_NAZIV_REQUIRED)
    .bail(),
    check("jib")
    .notEmpty()
    .withMessage(POST_JIB_REQUIRED)
    .bail(),
    check("pdv")
    .notEmpty()
    .withMessage(POST_PDV_REQUIRED)
    .bail(),
    check("broj_telefona")
    .notEmpty()
    .withMessage(POST_BROJTELEFONA_REQUIRED)
    .bail(),
    check("kontakt_osoba")
    .notEmpty()
    .withMessage(POST_KONTAKTOSOBA_REQUIRED)
    .bail(),
    check("email_address")
    .notEmpty()
    .withMessage(POST_EMAIL_REQUIRED)
    .bail(),
    check("datum_pocetka")
    .notEmpty()
    .withMessage(POST_DATUMPOCETKA_REQUIRED)
    .bail(),
    check("datum_zavrsetka")
    .notEmpty()
    .withMessage(POST_DATUMZAVRSETKA_REQUIRED)
    .bail(),
    (req, res, next) => {
        next();
    }


];