const {check} = require("express-validator")
const {
    POST_NAZIV_REQUIRED,
    POST_KOLICINA_REQUIRED,
    POST_MKOLICINA_REQUIRED,
    POST_CIJENA_REQUIRED,
    POST_JEDINICAMJERE_REQUIRED,
    POST_DALISEKORISIT_REQUIRED
} = require("../constants/sirovina-constant")


exports.createSirovinaValidator = [
    check("naziv")
        .notEmpty()
        .withMessage(POST_NAZIV_REQUIRED)
        .bail(),
    check("kolicina")
        .notEmpty()
        .withMessage(POST_KOLICINA_REQUIRED)
        .bail(),
    check("min_kolicina")
        .notEmpty()
        .withMessage(POST_MKOLICINA_REQUIRED)
        .bail(),
    check("cijena")
        .notEmpty()
        .withMessage(POST_CIJENA_REQUIRED)
        .bail(),
    check("jedinica_mjere")
        .notEmpty()
        .withMessage(POST_JEDINICAMJERE_REQUIRED)
        .bail(),
    check("da_li_se_koristi")
        .notEmpty()
        .withMessage(POST_DALISEKORISIT_REQUIRED)
        .bail(),
    (req, res, next) => {
        next();
    }

];