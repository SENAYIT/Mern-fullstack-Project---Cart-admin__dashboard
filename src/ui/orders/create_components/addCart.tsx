"use client";
import { useState } from "react";
import { products } from "@/store/shopping-cart-context";
import { useContext } from "react";
import { CartContext } from "@/store/shopping-cart-context";
import CartSelectedItemShow from "./cartSelectedItem";
import FormErrorMessage from "@/ui/commonForAll/formErrorMessage";

export default function AddCart() {
  const { addItemToCart } = useContext(CartContext);
  const [errorMessage, setErrorMessage] = useState(false);
  const [selectedProdId, setSelectedProdId] = useState("");
  const [selectedProdQuantity, setSelectedProdQuantity] = useState(1);

  const handleAddItem = () => {
    if (!selectedProdId) {
      setErrorMessage(true);
      return;
    }
    addItemToCart(selectedProdId, selectedProdQuantity);
    setSelectedProdId("");
    setErrorMessage(false);
  };

  return (
    <div className="flex flex-col gap-3">
      {/* Cart Add Product */}
      <div className="grid grid-cols-12 gap-3 items-center">
        <select
          id="product"
          name="product"
          value={selectedProdId}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
            setSelectedProdId(e.target.value)
          }
          className="col-span-6 rounded-md border p-2"
        >
          <option value={""}>Select Product</option>

          {products.map((product) => (
            <option key={product._id} value={product._id ?? ""}>
              {product.name ?? "Select Product"}
            </option>
          ))}
        </select>

        <input
          id="quantity"
          name="quantity"
          type="number"
          value={selectedProdQuantity}
          // defaultValue={1}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setSelectedProdQuantity(Number(e.target.value))
          }
          className="col-span-3 rounded-md border p-2"
        />

        <button
          type="button"
          onClick={() => handleAddItem()}
          className="col-span-3 rounded-md bg-blue-600 px-3 py-2 text-white"
        >
          + Add
        </button>
      </div>
      <div>
        {errorMessage && (
          <FormErrorMessage text="Please Select the Cart item" />
        )}
      </div>
      {/* if selected only */}
      {selectedProdId && (
        <CartSelectedItemShow selectProductId={selectedProdId} />
      )}
    </div>
  );
}
