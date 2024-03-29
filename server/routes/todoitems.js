const express = require('express');
const router = express();

const TodoitemsModel = require('../models/todoitems');

// router.post('/reset', async (req, res) => {
//     try{
//     await TodoitemsModel.deleteMany({})
//     res.status(204).end
//     } catch(err){
//         res.json(err)
//     }
// })

router.post('/api/item', async (req, res) => {
    try{
        const newItem = new TodoitemsModel({
            item: req.body.item
        })
        const saveItem = await newItem.save()
        res.status(200).json(saveItem)
    }catch(err){
        res.json(err)
    }
}) 

router.get('/api/items', async (req, res) => {
    try {
        const allTodoItems = await (await TodoitemsModel.find({}));
        res.status(200).json(allTodoItems)
    } catch (err) {
        res.json(err)
    }
})

router.put('/api/item/:id', async (req, res) => {
    try {
        const updateItem = await TodoitemsModel.findByIdAndUpdate(req.params.id, {$set: req.body})
        res.status(200).json('Item actualizado')
    } catch (err) {
        res.json(err)
    }
})

router.delete('/api/item/:id', async (req, res) =>{
    try {
        const deleteItem = await TodoitemsModel.findByIdAndDelete(req.params.id)
        res.status(200).json('Item Borrado')
    } catch (err) {
        res.json(err)
    }
})

module.exports = router;