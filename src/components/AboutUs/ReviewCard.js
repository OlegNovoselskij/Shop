const ReviewCard = ({ review }) => {
    return (
        <div className="bg-white p-12 shadow-md text-center w-80 h-80">
        <div className="w-24 h-24 flex items-center justify-center bg-gray-200 text-gray-500 text-3xl rounded-full mx-auto mb-4">
            {review.initial}
        </div>
        <div className="flex justify-center mb-2">
            {Array(review.rating).fill().map((_, i) => (
            <span key={i} className="text-yellow-400 text-2xl">★</span>
            ))}
        </div>
        <p className="text-gray-700">"{review.text}"</p>
        <p className="font-bold mt-2 text-black">{review.name} - <span className="font-normal text-gray-500">{review.date}</span></p>
        </div>
    );
};

export default ReviewCard;   