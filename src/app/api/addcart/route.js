import fs from 'fs';
import path from 'path';

// Шлях до файлу з кошиком
const cartFilePath = path.join(process.cwd(), 'data', 'cart.json');

// Отримання всіх товарів у кошику
export const getCartItems = () => {
  if (!fs.existsSync(cartFilePath)) {
    return [];
  }
  const data = fs.readFileSync(cartFilePath, 'utf-8');
  return data ? JSON.parse(data) : [];
};

// Функція для запису в кошик
export const updateCart = (cart) => {
  fs.writeFileSync(cartFilePath, JSON.stringify(cart, null, 2));
};

// Отримання кошика
export async function GET() {
  const cart = getCartItems();
  return new Response(JSON.stringify(cart), { status: 200 });
}

// Додавання продукту в кошик
export async function POST(req) {
  const { productId } = await req.json();
  let cart = getCartItems();

  // Перевіряємо, чи товар уже є в кошику
  const existingProduct = cart.find((item) => item.id === productId.id);

  if (existingProduct) {
    existingProduct.quantity += 1; // Збільшуємо кількість
  } else {
    cart.push({ ...productId }); // Додаємо новий товар
  }

  updateCart(cart);
  return new Response(JSON.stringify({ message: 'Product added to cart' }), { status: 201 });
}

// Оновлення кількості товару в кошику
export async function PUT(req) {
  try {
    const { productId, action } = await req.json(); // Отримуємо id та дію (+ або -)
    let cart = getCartItems();

    const product = cart.find((item) => item.id === productId);

    if (!product) {
      return new Response(JSON.stringify({ error: 'Product not found' }), { status: 404 });
    }

    if (action === 'increase') {
      product.quantity += 1;
    } else if (action === 'decrease') {
      if (product.quantity > 1) {
        product.quantity -= 1;
      } else {
        cart = cart.filter((item) => item.id !== productId); // Видаляємо, якщо 0
      }
    } else {
      return new Response(JSON.stringify({ error: 'Invalid action' }), { status: 400 });
    }

    updateCart(cart);
    return new Response(JSON.stringify({ message: 'Cart updated', cart }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to update cart' }), { status: 500 });
  }
}

// Видалення товару з кошика
export async function DELETE(req) {
  try {
    const { productId } = await req.json();

    if (!productId) {
      return new Response(JSON.stringify({ error: 'Invalid product ID' }), { status: 400 });
    }

    let cart = getCartItems();
    cart = cart.filter((item) => item.id !== productId);

    updateCart(cart);
    return new Response(JSON.stringify({ message: 'Product removed from cart' }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to delete product' }), { status: 500 });
  }
}
