import fs from 'fs';
import path from 'path';

// Шлях до файлу з продуктами
const productsFilePath = path.join(process.cwd(), 'data', 'products.json');

// Отримання всіх продуктів
export const getProducts = () => {
  const data = fs.readFileSync(productsFilePath, 'utf-8');
  return JSON.parse(data);
};

export async function GET() {
  // Отримуємо всі продукти
  const products = getProducts();
  return new Response(JSON.stringify(products), { status: 200 });
}

export async function POST(req) {
  // Додаємо продукт в кошик
  const { id } = await req.json();
  const products = getProducts();
  
  // Знаходимо продукт за ID
  const product = products.find(p => p.id === id);

  if (!product) {
    return new Response(JSON.stringify({ message: 'Product not found' }), { status: 404 });
  }

  return new Response(JSON.stringify({ message: 'Product added', product }), { status: 201 });
}
