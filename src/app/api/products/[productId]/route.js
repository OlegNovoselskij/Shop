import { log } from 'console';
import fs from 'fs';
import path from 'path';

// Шлях до файлу з продуктами
const productsFilePath = path.join(process.cwd(), 'data', 'products.json');

// Отримання всіх продуктів
const getProducts = () => {
  const data = fs.readFileSync(productsFilePath, 'utf-8');
  
  return JSON.parse(data);
};

// Функція для пошуку продукту по ID
const getProductById = (id) => {
  const products = getProducts();
  return products.find(product => product.id === id);
};


export async function GET(req, { params }) {
  const { productId } = params; 
  const product = getProductById(Number(productId));

  if (!product) {
    return new Response(JSON.stringify({ message: 'Product not found' }), { status: 404 });
  }

  return new Response(JSON.stringify(product), { status: 200 });
}
