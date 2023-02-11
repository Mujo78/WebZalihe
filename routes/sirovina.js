const express = require("express")
const { validationResult } = require("express-validator")
const router = express.Router()
const { Sirovina } = require("../models")
const {createSirovinaValidator} = require("../validators/sirovina")



router.get("/sirovine", async(req, res) => {

        const sirovine = await Sirovina.findAll();
        res.status(201).json(sirovine);
   
})

router.get("/sirovine/:id", async(req, res) => {
    try{
        const id = req.params.id;
        const pk = await Sirovina.findByPk(id);

        res.status(201).json(pk);
    }catch(error){
        res.json("Nema pronadjenih sirovina...")
    }
})

router.post("/nova-sirovina", createSirovinaValidator, async (req, res) =>{
    try{
        const error = validationResult(req)
        
        if(!error.isEmpty()){
            return res.status(400).json(error)
        }
        const body = req.body;
        await Sirovina.create(body)
        res.status(201).json(body);
    }catch(error){
        res.status(400).send("Error: " + error.message);
    }
})

router.post("/izmjena-sirovine/:id", createSirovinaValidator,  async(req, res) =>{
    try{
        const error = validationResult(req);

        if(!error.isEmpty()){
            res.status(400).send(error)
        }else{

            const id = req.params.id;
            const updateSirovina = await Sirovina.findByPk(id);

            const {naziv, kolicina, min_kolicina, cijena, jedinica_mjere, da_li_se_koristi} = req.body;

            if(updateSirovina == null){
                res.status(400).send("Nije moguce pronaci sirovinu!");
            }else{

                if(naziv != null) updateSirovina.naziv = naziv;
                if(kolicina != null) updateSirovina.kolicina = kolicina;
                if(min_kolicina != null) updateSirovina.min_kolicina = min_kolicina;
                if(cijena != null) updateSirovina.cijena = cijena;
                if(jedinica_mjere != null) updateSirovina.jedinica_mjere = jedinica_mjere;
                if(da_li_se_koristi != null) updateSirovina.da_li_se_koristi = da_li_se_koristi;

                await updateSirovina.save();
                res.status(200).json(updateSirovina);
            }
        }
    }catch(error){
        res.status(400).send("Error: " + error.message);
    }
})

module.exports = router;