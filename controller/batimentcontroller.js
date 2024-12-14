var Batiment = require ("../models/Batiment");
var Niveau = require ("../models/Niveau");


async function add(req, res) {
    try {
      const batiment = new Batiment(
        {
         nom:req.body.nom,
         nbr_niveau:0,
         description:req.body.description,
         adresse:req.body.adresse
        })
        const niv = new Niveau({
            nom: req.body.nom,
            nbr_chambre: req.body.nbr_chambre,
            etat_construction: false,
            id_batiment: String
    });

      await batiment.save();
      await Niveau.save();await batiment.save();
      res.status(200).send("good added");
    } catch (err) {
      res.status(400).send(err);
    }
  }



  async function getallbatiment (req, res) {
    try {
      const batiment = await Batiment.find();
      res.json(batiment);
    } catch (err) {
      res.status(400).send(err);
    }
}

async function getbyid (req, res) {
    try {
      const batiment = await Batiment.findById(req.params.id);
      res.json(batiment);
    } catch (err) {
      res.status(400).send(err);
    }
  }
  async function deletebatiment (req, res) {
    try {
      const batiment = await Batiment.findByIdAndDelete(req.params.id);
      //const userupdated= await User.findById(req.params.id)
      res.status(200).send("deleted");
    } catch (err) {
      res.status(400).send(err);
    }
  }
  module.exports = {add,getallbatiment,getbyid,deletebatiment };