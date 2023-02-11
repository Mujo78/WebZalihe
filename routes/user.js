const express = require("express")
const { validationResult } = require("express-validator")
const router = express.Router()
const bcrypt = require("bcrypt")
const {sign} = require("jsonwebtoken")

const {Users, Zaposlenik} = require("../models")
const {createZaposlenikUser} = require("../validators/user")

router.post("/registration",createZaposlenikUser, async (req, res) => {
    const error = validationResult(req);
    if(!error.isEmpty()){
        return res.status(400).json(error);
    }
    const {
        ime,
        prezime,
        broj_telefona,
        adresa,
        email_adresa,
        datum_zaposlenja,
        datum_otkaza,
        password,
        roleId
    } = req.body;

    let username = ime.toLowerCase() + "." + prezime.toLowerCase();
    let hash = await bcrypt.hash(password, 10);

    const zaposlenik = await Zaposlenik.create({
        ime: ime,
        prezime: prezime,
        broj_telefona: broj_telefona,
        adresa: adresa,
        email_adresa: email_adresa,
        datum_zaposlenja: datum_zaposlenja,
        datum_otkaza: datum_otkaza
    });
    await Users.create({
        userName: username,
        password: hash,
        roleId: roleId,
        ZaposlenikId: zaposlenik.id
    });

    return res.status(201).json(`Zaposlenik: ${username} added. `);
})

router.post("/login", async(req, res) =>{
    const {userName, password} = req.body;
    const errors = validationResult(req);

    if(!errors.isEmpty()){
        return res.status(401).json();
    }
    const user = await Users.findOne({where: {userName: userName}});
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if(isPasswordValid){
        const token = sign({
            id: user.id,
            userName: user.userName
        }, process.env.SECRET);

        return res.status(200).json({
            accessToken: token
        });
    }

    return res.status(401).json();
})

module.exports = router;