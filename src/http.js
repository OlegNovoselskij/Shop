export const getAllProducts = async () => {
    try {
        const response = await fetch("/api/products");
        if (!response.ok) {
            throw new Error("Failed to fetch products");
        }
        return await response.json();
    } catch (error) {
        console.error("Error fetching all products:", error);
        throw error;
    }
};

export const getProduct = async (id) => {
    try {
        const response = await fetch(`/api/products/${id}`);
        if (!response.ok) {
            throw new Error(`Error fetching product with id ${id}: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error("Error fetching product:", error);
        throw error;
    }
};

export const addToCart = async (productId) => {
    try {
        const response = await fetch("/api/addcart", { // Виправлено ендпоінт
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ productId }),
        });

        if (!response.ok) {
            throw new Error("Failed to add product to cart");
        }

        return await response.json();
    } catch (error) {
        console.error("Error adding product to cart:", error);
        throw error;
    }
};

export const getCart = async () => {
    try {
        const response = await fetch("/api/addcart"); // Виправлено ендпоінт
        if (!response.ok) {
            throw new Error("Failed to fetch cart");
        }
        return await response.json();
    } catch (error) {
        console.error("Error fetching cart:", error);
        throw error;
    }
};

export const removeFromCart = async (productId) => {
    try {
        const response = await fetch("/api/addcart", { // Виправлено ендпоінт
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ productId }),
        });

        if (!response.ok) {
            const errorData = await response.json();
            console.error('Error message:', errorData.error);
            throw new Error(errorData.error || "Failed to remove product from cart");
        }

        return await response.json();
    } catch (error) {
        console.error("Error removing product from cart:", error);
        throw error;
    }
};

// Оновлення кількості товару в кошику
export const updateCartQuantity = async (productId, action) => {
    try {
        const response = await fetch("/api/addcart", { // Виправлено ендпоінт
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ productId, action }),
        });

        if (!response.ok) {
            throw new Error("Failed to update product quantity in cart");
        }

        return await response.json();
    } catch (error) {
        console.error("Error updating product quantity:", error);
        throw error;
    }
};
