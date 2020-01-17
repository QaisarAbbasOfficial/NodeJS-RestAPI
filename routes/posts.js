var express = require('express');
var router = express.Router();
const PostModel = require('../model/PostModel');
/* GET users listing. */
router.get('/', (req, res, next) => {
      PostModel.find()
      .then(posts => {
        res.status(200).json(posts)
      }).catch(error => {
        res.status(404).json(error);
      })
});


router.post('/', (req, res, next) => {
  const {title, body} = req.body;
   new PostModel({title : title, body : body})
   .save()
   .then(posts => {
     res.status(201).json(posts);
   }).catch(error => {
     res.status(404).json({message : "Data not created"})
   })
});


//get single data from  mongo

router.get('/:id', (req, res, next) => {

  PostModel.findById({_id: req.params.id})
  .then(posts => {
      res.status(200).json(posts)
  }).catch(error => {
    res.status(404).json(error);
  })
});

//delete method ny id

router.delete('/:id', (req, res, next) => {

  PostModel.findByIdAndDelete({_id :  req.params.id})
  .remove()
  .then(posts => {
    res.status(200).json({message : "You posts had been deleted!"})
  }).catch(error => {
    res.status(404).json(error);
  })
});




















//export
module.exports = router;
