const express = require('express');
const app = express();
app.use(express.json())

app.use('/categories',require('./route/categoryRoute'))
app.use('/products',require('./route/productRoute'))
app.listen(3000, () => console.log('Server started on port 3000'));