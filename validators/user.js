const {check} = require("express-validator")
const {
    POST_IME_REQUIRED,
    POST_PREZIME_REQUIRED,
    POST_BROJTELEFONA_REQUIRED,
    POST_ADDRESS_REQUIRED,
    POST_EMAIL_REQUIRED,
    POST_DATUMZAPOSLENJA_REQUIRED,
} = require("../constants/zaposlenik-constant")
const {
    USER_PASSWORD_REQUIRED,
    ROLE_REQUIRED
} = require("../constants/user-constant")
const {Users, Zaposlenik} = require("../models")

exports.createZaposlenikUser = [
    check("ime")
    .notEmpty()
    .withMessage(POST_IME_REQUIRED)
    .bail(),
    check("prezime")
    .notEmpty()
    .withMessage(POST_PREZIME_REQUIRED)
    .bail(),
    check("broj_telefona")
    .notEmpty()
    .withMessage(POST_BROJTELEFONA_REQUIRED)
    .bail(),
    check("email_adresa")
    .notEmpty()
    .withMessage(POST_EMAIL_REQUIRED)
    .bail(),
    check("adresa")
    .notEmpty()
    .withMessage(POST_ADDRESS_REQUIRED)
    .bail(),
    check("datum_zaposlenja")
    .notEmpty()
    .withMessage(POST_DATUMZAPOSLENJA_REQUIRED)
    .bail(),
    check("password")
    .notEmpty()
    .withMessage(USER_PASSWORD_REQUIRED)
    .bail(),
    check("roleId")
    .notEmpty()
    .withMessage(ROLE_REQUIRED)
    .bail(),
    (req, res, next) => {
        next();
    }
]