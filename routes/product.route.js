module.exports = app => {
    const product = require('../controllers/product.controller');

    //Add a Product
    app.post('/products', product.create);

    //Retrive all Product
    app.get('/products', product.findAll);

    //Retrieve one Product
    app.get('/product/:id', product.findOne);

    //Edit Product
    app.put('/product', product.update);

    //Delet Product
    app.delete('/product/:id', product.delete);
}