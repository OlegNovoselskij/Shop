import { ShoppingCart, X, Trash2 } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { setShowCart, fetchCart, removeItemFromCart, decreaseItemQuantity, increaseItemQuantity } from "@/store/cart-slice";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import CartTotalPrice from "./CartTotalPrice";

const CartSidebar = () => {
  const dispatch = useDispatch();
  const { showCart, itemList, totalQuantity } = useSelector((state) => state.cart);

  useEffect(() => {
    if (showCart) {
      dispatch(fetchCart());
    }
  }, [dispatch, showCart]);

  const handleCartClick = () => {
    dispatch(setShowCart());
  };

  const handleRemoveItem = (itemId) => {
    dispatch(removeItemFromCart(itemId));
  };

  const handleIncrease = (itemId) => {
    dispatch(increaseItemQuantity(itemId));
  };
  const handleDeacrease = (itemId, newQuantity) => {
    if (newQuantity >= 1) {
      dispatch(decreaseItemQuantity(itemId));
    } else {
      dispatch(removeItemFromCart(itemId));
    }
  };

  return (
    <AnimatePresence>
      {showCart && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed right-0 top-0 w-96 h-full bg-black text-white p-6 shadow-lg flex flex-col z-[9999] border-l-4 border-white"
        >
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold text-white">My Cart</h2>
            <button
              onClick={handleCartClick}
              className="p-2 text-white border-2 rounded-lg border-white hover:text-gray-400"
            >
              <X size={24} />
            </button>
          </div>
          <div className="flex-grow flex flex-col items-center">
            {itemList.length === 0 ? (
              <div className="text-center">
                <ShoppingCart size={80} className="mb-4 ml-5" />
                <p className="text-lg font-medium">Your cart is empty.</p>
              </div>
            ) : (
              <div className="flex flex-col space-y-4 w-full">
                <ul className="divide-y divide-gray-700">
                  {itemList.map((item) => (
                    <li key={item.id} className="flex justify-between items-center py-4">
                      <div className="flex items-center">
                        {item.imageUrl && (
                          <img
                            src={item.imageUrl}
                            alt={item.name}
                            className="w-16 h-20 object-cover rounded-md"
                          />
                        )}
                        <span className="text-white font-medium ml-4">{item.name}</span>
                      </div>
                      <div className="flex items-center ml-6">
                        <div className="flex items-center bg-[#181818] border border-gray-700 rounded-full px-1 py-1 space-x-2">
                          <button
                            className="text-white text-lg px-1 hover:text-gray-400"
                            onClick={() => handleDeacrease(item.id, item.quantity - 1)}
                          >
                            -
                          </button>
                          <span className="text-white px-0">{item.quantity}</span>
                          <button
                            className="text-white text-lg px-1 hover:text-gray-400"
                            onClick={() => handleIncrease(item.id)}
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <span className="ml-6 text-white">
                        {item.price ? `${(item.price * item.quantity).toFixed(0)}$` : "N/A"}
                      </span>
                      <button
                        onClick={() => handleRemoveItem(item.id)}
                        className="text-white p-2 hover:scale-110 hover:text-gray-400"
                      >
                        <X size={20}/>
                      </button>
                    </li>
                  ))}
                </ul>
                <CartTotalPrice itemList={itemList} />
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CartSidebar;
