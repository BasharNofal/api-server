'use strict';

const express = require('express');
const validator = require('../middleware/validator.js');
const Cloth = require('../models/data-collection-class.js');
const clothModel = require('../models/clothes.js');
const cloth = new Cloth(clothModel);
const router = express.Router();

router.get('/', getClothes);
router.get('/:id', validator, getClothById);
router.post('/', createCloth);
router.put('/:id', validator, updateCloth);
router.delete('/:id', validator, deleteCloth);

async function getClothes(req, res, next) {
    try {
        const resObj = await cloth.read();
        res.json(resObj);
    } catch (error) {
        next(error);
    }
}

async function getClothById(req, res, next) {
    try {
        const resObj = await cloth.read(req.params.id);
        res.json(resObj[0]);
    } catch (error) {
        next(error)
    }
}

async function createCloth(req, res, next) {
    try {
        const clothObj = req.body;
        const resObj = await cloth.create(clothObj);
        res.status(201).json(resObj);
    } catch (error) {
        next(error);
    }
}

async function updateCloth(req, res, next) {
    try {
        const newClothObj = req.body;
        const id = req.params.id;
        const resObj = await cloth.update(id, newClothObj);
        res.json(resObj)
    } catch (error) {
        next(error);
    }
}

async function deleteCloth(req, res, next) {
    try {
        const resObj = await cloth.delete(req.params.id);
        res.json(resObj);
    } catch (error) {
        next(error);
    }
}

module.exports = router;