const express = require("express")
const router = express.Router()
const {editZaposlenikValidator} = require("../validators/zaposlenik")

const {Zaposlenik} = require("../models")

router.get("/zaposlenici", async(req, res) => {
    try{
        const zaposlenici = await Zaposlenik.findAll();
        res.status(201).json(zaposlenici);
    }catch(error){
        res.status(400).send("Nema pronadjenih zaposlenika!")
    }
})

router.get("/zaposlenici/:id", async(req, res) => {
    try{
        const id = req.params.id;
        const zaposlenici = await Zaposlenik.findByPk(id);

        res.status(201).json(zaposlenici);
    }catch(error){
        res.status(400).send("Nema pronadjenih zaposlenika!")
    }
})

/*
router.post("/zaposlenici-post", async(req, res) => {
    try{
        const body = req.body;
        await Zaposlenik.create(body);
        res.status(200).json(body);
    }catch(error){
        res.status(400).json("Error: " + error.message);
    }
})
*/
router.post("/zaposlenici-edit/:id",editZaposlenikValidator ,async(req, res) =>{
    try{
        const id = req.params.id;
        const updateZaposlenik = await Zaposlenik.findByPk(id);

        const {ime, prezime, broj_telefona, adresa, email_adresa, datum_zaposlenja, datum_otkaza} = req.body;

        if(!updateZaposlenik){
            res.status(400).send("Nije moguce pronaci zaposlenika!");
        }else{

            if(ime != null) updateZaposlenik.ime = ime;
            if(prezime != null) updateZaposlenik.prezime = prezime;
            if(broj_telefona != null) updateZaposlenik.broj_telefona = broj_telefona;
            if(adresa != null) updateZaposlenik.adresa = adresa;
            if(email_adresa != null) updateZaposlenik.email_adresa = email_adresa;
            if(datum_zaposlenja != null) updateZaposlenik.datum_zaposlenja = datum_zaposlenja;
            if(datum_otkaza != null) updateZaposlenik.datum_otkaza = datum_otkaza;
            
            await updateZaposlenik.save();
            res.status(201).json(updateZaposlenik);


        }
    }catch(error){
        res.status(400).send("Error: " + error.message);
    }
})
module.exports = router;