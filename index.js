const express = require('express');
const app = express();
const database = require('./services/database')
app.get('/categories', async (req,res) => {

    try{
        const result = await database.pool.query('Select * from category');
        return res.status(200).json(result.rows);
    }catch (error){
        return res.status(500).json(error);
    }
})
app.get('/products', async (req,res) => {
    try{
        const result = await database.pool.query('Select * from product');
        return res.status(200).json(result.rows);
    }catch (error){
        return res.status(500).json(error);
    }
})
app.listen(3000, () => console.log('Server started on port 3000'));