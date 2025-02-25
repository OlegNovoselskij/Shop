export default function CartTotalPrice({itemList}) {
    return (
        <div className="border-t  border-gray-700 pt-4">
        <div className="flex justify-between text-white text-lg">
            <span>Total:</span>
            <span>
            ${itemList.reduce((acc, item) => acc + (item.price || 0) * item.quantity, 0).toFixed(2)}
            </span>
        </div>
        </div>
    )
}