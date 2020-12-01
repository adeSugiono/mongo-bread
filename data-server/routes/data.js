var express = require('express');
var router = express.Router();
var Data = require('../models/datatipe')

/* GET users listing. */
router.get('/', function (req, res, next) {
  Data.find({}, (err, doks) => {
    res.status(200).json(doks)
  })
});

// edd data
router.post('/', function (req, res, next) {
  const { id, string, integer, float, date, boolean } = req.body;
  Data.create({ id, string, integer, float, date, boolean }, function(err, doks) {
    res.status(201).json(doks)
  })
});

// edit data
router.put('/:id', function (req, res, next) {
  const { string, integer, float, date, boolean } = req.body;
  Data.findOneAndUpdate({id: Number(req.params.id)}, { string, integer, float, date, boolean }, { new: true }, function(err, doks) {
    res.status(201).json(doks)
  })
});

// delete data
router.delete('/:id', function (req, res, next) {
  Data.findOneAndRemove({id: Number(req.params.id)}, function(err, doks) {
    res.status(201).json(doks)
  })
});

module.exports = router;
