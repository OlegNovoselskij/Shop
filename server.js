const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const next = require('next');

const app = express();
const nextApp = next({ dev: process.env.NODE_ENV !== 'production' });
const handle = nextApp.getRequestHandler();
const PORT = 3001;

nextApp.prepare().then(() => {
  // Налаштування body-parser
  app.use(bodyParser.json());

  const productsFile = './products.json';
  const cartFile = './cart.json';

  // API маршрути
  app.get('/api/products', (req, res) => {
    const products = JSON.parse(fs.readFileSync(productsFile));
    res.json(products);
  });

  app.get('/api/products/search', (req, res) => {
    const query = req.query.name.toLowerCase();
    const products = JSON.parse(fs.readFileSync(productsFile));
    const foundProducts = products.filter(product => 
      product.name.toLowerCase().includes(query)
    );
    res.json(foundProducts);
  });

  app.post('/api/cart', (req, res) => {
    const { productId } = req.body;
    const products = JSON.parse(fs.readFileSync(productsFile));
    const cart = JSON.parse(fs.readFileSync(cartFile));

    const product = products.find(p => p.id === productId);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    cart.push(product);
    fs.writeFileSync(cartFile, JSON.stringify(cart, null, 2));
    res.status(201).json({ message: 'Product added to cart', product });
  });

  app.get('/api/cart', (req, res) => {
    const cart = JSON.parse(fs.readFileSync(cartFile));
    res.json(cart);
  });

  app.delete('/api/cart/:productId', (req, res) => {
    const { productId } = req.params;
    let cart = JSON.parse(fs.readFileSync(cartFile));
    const productIndex = cart.findIndex(p => p.id == productId);

    if (productIndex === -1) {
      return res.status(404).json({ message: 'Product not found in cart' });
    }

    cart = cart.filter(p => p.id != productId);
    fs.writeFileSync(cartFile, JSON.stringify(cart, null, 2));
    res.json({ message: 'Product removed from cart' });
  });

  // Обробка запитів на інші сторінки (Next.js)
  app.all('*', (req, res) => {
    return handle(req, res);
  });

  // Запуск сервера на зазначеному порту
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
});
