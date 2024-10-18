const express = require('express');
const route = express.Router();
const itemData = require('../controllers/itemControllers');

route.post('/', itemData.addItem);
route.get('/', itemData.getItem);
route.get('/:id', itemData.getItemByID);
route.put('/:id', itemData.updateItem);
route.delete('/:id', itemData.deleteItem);

module.exports = route;