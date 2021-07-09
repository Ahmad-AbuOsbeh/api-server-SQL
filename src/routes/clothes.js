'use strict';

const express = require('express');
const router = express.Router();
const Interface = require('../models/data-collection-class');
// const clothesModel = require('../models/clothes-schema');
// const clothes = new Interface(clothesModel);
const validator = require('../middleware/validator');
const clothes = new Interface('clothes');

router.get('/', getclothes);
router.get('/1/:id', getclothes);
router.post('/', validator, addclothes);
router.put('/1/:id', validator, updateclothes);
router.delete('/1/:id', deleteclothes);

async function getclothes(req, res, next) {
  try {
    const resObj = await clothes.read(req.params.id);
    res.json(resObj.rows);
  } catch (e) {
    next(e);
  }
}

async function addclothes(req, res, next) {
  try {
    const resObj = await clothes.create(req.body);
    res.json(resObj.rows[0]);
  } catch (e) {
    next(e);
  }
}
async function updateclothes(req, res, next) {
  try {
    const resObj = await clothes.update(req.params.id, req.body);
    res.json(resObj.rows[0]);
  } catch (e) {
    next(e);
  }
}

async function deleteclothes(req, res, next) {
  try {
    const resObj = await clothes.delete(req.params.id);
    res.json(resObj.rows[0]);
    console.log('hello fromdelete');
  } catch (e) {
    console.log('from catch');
    next(e);
  }
}
module.exports = router;
