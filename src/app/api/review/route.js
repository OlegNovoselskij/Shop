import fs from 'fs';
import path from 'path';

// Шлях до файлу з відгуками
const reviewFilePath = path.join(process.cwd(), 'data', 'review.json');

// Функція отримання відгуків
export const getReviews = () => {
  if (!fs.existsSync(reviewFilePath)) {
    return [];
  }
  const data = fs.readFileSync(reviewFilePath, "utf-8");
  const reviews = data ? JSON.parse(data) : [];

  return reviews.length > 3
  ? reviews.sort(() => 0.5 - Math.random()).slice(0, 3)
  : reviews;
};

// Функція для збереження відгуків
export const saveReviews = (reviews) => {
  fs.writeFileSync(reviewFilePath, JSON.stringify(reviews, null, 2), 'utf-8');
};

// Отримання відгуків
export async function GET() {
  const reviews = getReviews();
  return new Response(JSON.stringify(reviews), { status: 200 });
}

// Додавання нового відгуку
export async function POST(req) {
  try {
    const body = await req.json();
    if (!body.name || !body.text || !body.rating) {
      return new Response(JSON.stringify({ error: 'Invalid input' }), { status: 400 });
    }

    const reviews = getReviews();
    const newReview = {
      initial: body.name.charAt(0).toUpperCase(),
      name: body.name,
      date: new Date().toLocaleDateString(),
      rating: body.rating,
      text: body.text
    };

    reviews.push(newReview);
    saveReviews(reviews);

    return new Response(JSON.stringify(newReview), { status: 201 });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to process request' }), { status: 500 });
  }
}
