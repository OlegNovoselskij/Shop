import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { addToCart, getCart, removeFromCart, updateCartQuantity } from "../http";

// Fetch the cart from the backend
export const fetchCart = createAsyncThunk("cart/fetchCart", async () => {
  const cart = await getCart();
  return cart;
});

// Add an item to the cart
export const addItemToCart = createAsyncThunk("cart/addItemToCart", async (product) => {
  await addToCart(product);
  return product;
});

// Remove an item from the cart
export const removeItemFromCart = createAsyncThunk("cart/removeItemFromCart", async (productId) => {
  await removeFromCart(productId);
  return productId;
});

// Increase the quantity of an item in the cart
export const increaseItemQuantity = createAsyncThunk("cart/increaseItemQuantity", async (productId) => {
  await updateCartQuantity(productId, "increase");
  return productId;
});

// Decrease the quantity of an item in the cart
export const decreaseItemQuantity = createAsyncThunk("cart/decreaseItemQuantity", async (productId) => {
  await updateCartQuantity(productId, "decrease");
  return productId;
});

// Update the quantity of an item
export const updateItemQuantity = createAsyncThunk(
  "cart/updateItemQuantity",
  async ({ id, quantity }) => {
    await updateCartQuantity(id, quantity);
    return { id, quantity };
  }
);

const initialState = { itemList: [], totalQuantity: 0, showCart: false, status: "idle", error: null };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setShowCart(state) {
      state.showCart = !state.showCart;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCart.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCart.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.itemList = action.payload;
        state.totalQuantity = action.payload.reduce((sum, item) => sum + item.quantity, 0);
      })
      .addCase(fetchCart.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(addItemToCart.fulfilled, (state, action) => {
        const newItem = action.payload;
        const existingItem = state.itemList.find((item) => item.id === newItem.id);

        if (existingItem) {
          existingItem.quantity += newItem.quantity;
        } else {
          state.itemList.push({ ...newItem, quantity: 1 });
        }

        state.totalQuantity += newItem.quantity;
      })
      .addCase(removeItemFromCart.fulfilled, (state, action) => {
        const productId = action.payload;
        state.itemList = state.itemList.filter((item) => item.id !== productId);
        state.totalQuantity = state.itemList.reduce((sum, item) => sum + item.quantity, 0);
      })
      .addCase(increaseItemQuantity.fulfilled, (state, action) => {
        const productId = action.payload;
        const item = state.itemList.find((item) => item.id === productId);

        if (item) {
          item.quantity += 1;
          state.totalQuantity += 1;
        }
      })
      .addCase(decreaseItemQuantity.fulfilled, (state, action) => {
        const productId = action.payload;
        const item = state.itemList.find((item) => item.id === productId);

        if (item) {
          if (item.quantity > 1) {
            item.quantity -= 1;
            state.totalQuantity -= 1;
          } else {
            state.itemList = state.itemList.filter((item) => item.id !== productId);
            state.totalQuantity = state.itemList.reduce((sum, item) => sum + item.quantity, 0);
          }
        }
      });
  },
});

export const { setShowCart } = cartSlice.actions;
export default cartSlice.reducer;
