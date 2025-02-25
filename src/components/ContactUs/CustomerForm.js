"use client";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Star } from "lucide-react";
import Button from "../ui/Button";

// Схема валідації
const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  rating: yup.number().min(1, "Rating is required").max(5),
  text: yup.string().required("Review text is required"),
});

export default function ReviewForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: { rating: 0 },
  });

  const onSubmit = async (data) => {
    setLoading(true);
    setErrorMessage("");

    try {
      const response = await fetch("/api/review", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to submit review");
      }

      reset();
      router.refresh();
    } catch (error) {
      setErrorMessage(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-zinc-900 text-white px-4">
      <h1 className="text-6xl font-extrabold text-zinc-500 mb-10">Leave a Review</h1>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-lg bg-zinc-900 p-5 rounded-lg shadow-2xl"
      >
        <div className="mb-4">
          <input
            {...register("name")}
            type="text"
            placeholder="Your Name"
            className="w-full p-3 bg-black outline-none rounded opacity-75"
          />
          <p className="text-red-500 text-sm mt-1">{errors.name?.message}</p>
        </div>

        <div className="mb-4">
          <textarea
            {...register("text")}
            placeholder="Your Review"
            className="w-full p-3 bg-black outline-none rounded h-24"
          />
          <p className="text-red-500 text-sm mt-1">{errors.text?.message}</p>
        </div>

        <div className="mb-6 flex items-center justify-center">
          <Controller
            name="rating"
            control={control}
            render={({ field }) => (
              <div className="flex space-x-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={24}
                    className={`cursor-pointer ${
                      star <= field.value ? "fill-yellow-400 stroke-yellow-400" : "stroke-gray-600"
                    }`}
                    onClick={() => field.onChange(star)}
                  />
                ))}
              </div>
            )}
          />
          <p className="text-red-500 text-sm mt-1">{errors.rating?.message}</p>
        </div>

        {errorMessage && <p className="text-red-500 text-sm mb-4">{errorMessage}</p>}

        <div className="flex justify-center">
          <Button
            type="submit"
            className="bg-[#484444] text-white font-semibold text-sm uppercase px-8 py-4 tracking-wide transition hover:bg-[#5a5a5a]"
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit Review"}
          </Button>
        </div>
      </form>
    </div>
  );
}
