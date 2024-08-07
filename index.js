const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('./swagger-output.json');
const app = express();

// Serve Swagger documentation
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));
//Others
app.use(express.json())
//use routers
app.use('/api/categories',require('./routes/categoryRoute'))
app.use('/api/products',require('./routes/productRoute'))
app.listen(3000, () => console.log('Server started on port 3000'));
