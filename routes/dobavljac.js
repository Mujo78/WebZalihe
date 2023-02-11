const express = require("express")
const router = express.Router()
const { validationResult } = require("express-validator")

const {Dobavljac} = require("../models")


const {editDobavljacValidator} = require("../validators/dobavljac")


router.get("/dobavljaci", async(req, res) =>{
    try{
        const dobavljaci = await Dobavljac.findAll();
        res.status(201).json(dobavljaci);
    }catch(error){
        res.json("Nema pronadjenih dobavljaca")
    }
})

router.get("/dobavljaci/:id", async(req, res) => {
    try{
        const id = req.params.id;
        const dob = await Dobavljac.findByPk(id);

        res.json(dob);
    }catch(error){
        res.json("Neam pronadjenog dobavljaca!")
    }
})

router.post("/dobavljaci/:id", editDobavljacValidator ,async(req, res) =>{
   try{
    const errors = validationResult(req)

    if(!errors.isEmpty()){
        res.status(404).json(errors);
    }else{

        const id = req.params.id;
        const toUpdate = await Dobavljac.findByPk(id);
        const { naziv, jib, pdv, broj_telefona, kontakt_osoba, email_address, datum_pocetka } = req.body;
        if(!toUpdate){
            res.status(404).send("Nema takvog zapisa");
        }else{
            console.log(req.body);
            if(naziv != null) {
                toUpdate.naziv = naziv;
            }
            if(jib != null) toUpdate.jib = jib;
            if(pdv != null) toUpdate.pdv = pdv;
            if(broj_telefona != null) toUpdate.broj_telefona = broj_telefona;
            if(kontakt_osoba != null) toUpdate.kontakt_osoba = kontakt_osoba;
            if(email_address != null) toUpdate.email_address = email_address;
            if(datum_pocetka != null) toUpdate.datum_pocetka = datum_pocetka;
      
            await toUpdate.save();
            res.status(201).send(toUpdate);
        }
        }
    }catch(error){
        res.status(404).send("Error 404!");
    }

})

module.exports = router;