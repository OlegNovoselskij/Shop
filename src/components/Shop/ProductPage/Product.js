"use client";
import { ShoppingCart } from "lucide-react";
import Button from "@/components/ui/Button";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { addItemToCart } from "@/store/cart-slice"; // Redux action
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import Loading from "../loading";
import { getProduct } from "@/http";

const Product = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { slug } = useParams();
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const data = await getProduct(slug);
        if (data) {
          setProduct(data);
        } else {
          router.push("/404");
        }
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchProduct();
  }, [slug]);
  

  if (isLoading) {
    return (
      <div className="min-h-screen">
        <div className="absolute top-0 left-0 right-0 flex justify-center items-center w-full h-full">
          <Loading />
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="text-center text-white">
        <h1 className="text-3xl">Product not found</h1>
        <a onClick={() => router.push("/shop")} className="text-gray-400 text-xl cursor-pointer hover:opacity-75">
          Go back to all products
        </a>
      </div>
    );
  }
  

  return (
    <div className="bg-black text-white flex justify-center items-center h-[80vh] mt-[150px]">
      <div className="flex gap-16 max-w-5xl">
        <div>
          <a onClick={() => router.push("/shop")} className="text-gray-400 text-xl cursor-pointer hover:opacity-75">
            &lt; All Products
          </a>
        </div>

        <img src={product.imageUrl} alt="Product" className="w-[530px] h-[530px] object-cover" />

        <div className="flex flex-col gap-6">
          <h1 className="text-4xl font-bold">{product.name}</h1>
          <p className="text-3xl text-gray-300">${product.price}</p>

          <div>
            <label className="block text-gray-400 text-2xl mb-2">Quantity</label>
            <input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
              className="w-[140px] p-3 bg-[#181818] border border-gray-700 text-white text-left appearance-none"
            />
          </div>
          <div onClick={handleAddToCart}>
          <Button
            disabled={isLoading}
            className={`bg-[#484444] font-family-aktiv-grotesk hover:bg-gray-600 text-white py-3 px-6 text-lg flex items-center gap-2 ${isLoading ? "opacity-50 cursor-not-allowed" : ""}`}
          >
            <ShoppingCart size={20} /> ADD TO CART
          </Button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
