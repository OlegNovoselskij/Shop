'use client'
import React, { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";

const Reviews = () => {
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch("/api/review");
        if (!response.ok) {
          throw new Error("Failed to fetch reviews");
        }
        const data = await response.json();
        console.log(data);
        
        setReviews(data);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    };

    fetchReviews();
  }, []);

  return (
    <div className="bg-[#25272e] text-white py-16">
      <h2 className="text-3xl font-bold text-center mb-8">REVIEWS</h2>
      <div className="flex justify-center gap-8 flex-wrap">
        {reviews != null ? reviews.map((review, index) => <ReviewCard key={index} review={review} />) : <p>No reviews available </p>}
      </div>
    </div>
  );
};

export default Reviews;
