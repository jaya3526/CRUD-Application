const Item = require('../models/items');

const addItem = async (req, res) => {
    try {
        const { name, description, price, category, quantity, brand, weight, color } = req.body;
        const data = new Item({ name, description, price, category, quantity, brand, weight, color })
        await data.save();
        res.status(200).json(data);
    }
    catch {
        console.log('error while adding the details into database');
    }
}

const getItem = async (req, res) => {
    try {
        const data = await Item.find();
        res.status(200).json(data);
    }
    catch {
        console.log('error while getting data');
    }
}

const getItemByID = async (req, res) => {
    try {
        const data = await Item.find({ "_id": req.params.id });
        res.status(200).json(data);
    }
    catch {
        console.log('error while getting data');
    }
}

const updateItem = async (req, res) => {
    try {
        const { name, description, price, category, quantity, brand, weight, color } = req.body;
        const data = await Item.findByIdAndUpdate({ "_id": req.params.id }, { name, description, price, category, quantity, brand, weight, color });
        res.status(200).json(data);
    }
    catch {
        console.log('error while adding the details into database');
    }
}

const deleteItem = async (req, res) => {
    try {
        const data = await Item.deleteOne({ "_id": req.params.id });
        res.status(200).json(data);
    }
    catch {
        console.log('error occured while deleting the item');
    }
}

module.exports = { addItem, getItem, getItemByID, updateItem, deleteItem }