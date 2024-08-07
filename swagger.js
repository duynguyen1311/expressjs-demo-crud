const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: 'Demo API',
        description: 'This is a demo expressjs crud api'
    },
    host: 'localhost:3000',
    schemes: ['http'],
    tags: [
        {
            name: "Category",
            description: "API endpoints for category management"
        },
        {
            name: "Product",
            description: "API endpoints for product management"
        },
    ],
};

const outputFile = './swagger-output.json';
const endpointsFiles = ['./index.js', './routes/*.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);