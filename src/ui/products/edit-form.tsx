"use client";
import Image from "next/image";
import {
  FormSubmitButton,
  FormCancelLink,
} from "@/ui/commonForAll/formButtons";
import FormErrorMessage from "@/ui/commonForAll/formErrorMessage";
import SpanStar from "@/ui/commonForAll/spanStar";
import { useActionState, useState } from "react";

import { ProductValues, State } from "@/lib/products/definitions";
import { updateProduct } from "@/lib/products/update_action";
import { Product } from "@/lib/products/definitions";
import ConfirmationModal from "@/ui/commonForAll/confirmationModal";

export default function EditProductForm({ product }: { product: Product }) {
  const { name, description, price, stock, status, image } = product;
  const initialProdValue: ProductValues = {
    name: name,
    description: description,
    price: price as number,
    stock: stock as number,
    status: status,
    // image: image,
  };
  const initialState: State = {
    success: false,
    message: null,
    errors: {},
    values: initialProdValue,
  };

  const updateProductWithId = updateProduct.bind(null, product._id);
  const [file, setFile] = useState<File | null>(null);

  const [state, formAction] = useActionState<State, FormData>(
    updateProductWithId,
    initialState,
  );

  return (
    <form key={JSON.stringify(state.values)} action={formAction}>
      <div
        id="form"
        aria-describedby="form-error"
        className="w-full rounded-md bg-gray-50 p-4 md:p-6"
      >
        {/* Product Name */}
        <div className="mb-4">
          <label htmlFor="name" className="mb-2 block text-sm font-medium">
            Name
            <SpanStar />
          </label>
          <div className="relative">
            <input
              id="name"
              name="name"
              type="text"
              defaultValue={state.values?.name ?? ""}
              placeholder="please enter name"
              className="peer block w-full md:max-w-3/4 rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              aria-describedby="name-error"
            />
          </div>
          <div id="name-error" aria-live="polite" aria-atomic="true">
            {state.errors?.name &&
              state.errors.name.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))}
          </div>
        </div>
        {/* Product Description */}
        <div className="mb-4">
          <label
            htmlFor="description"
            className="mb-2 block text-sm font-medium"
          >
            Description
            <SpanStar />
          </label>
          <div className="relative">
            <input
              id="description"
              name="description"
              type="text-area"
              defaultValue={state.values?.description ?? ""}
              placeholder="please enter description"
              className="peer block w-full md:max-w-3/4 rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              aria-describedby="description-error"
            />
          </div>
          <div id="description-error" aria-live="polite" aria-atomic="true">
            {state.errors?.description &&
              state.errors.description.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))}
          </div>
        </div>

        {/* Product Price */}
        <div className="mb-4">
          <label htmlFor="price" className="mb-2 block text-sm font-medium">
            Price
            <SpanStar />
          </label>
          <div className="relative">
            <input
              id="price"
              name="price"
              type="number"
              defaultValue={state.values?.price ?? ""}
              placeholder="please enter price"
              className="peer block w-full md:max-w-3/4 rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              aria-describedby="price-error"
            />
          </div>
          <div id="price-error" aria-live="polite" aria-atomic="true">
            {state.errors?.price &&
              state.errors.price.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))}
          </div>
        </div>

        {/* Product Stock */}
        <div className="mb-4">
          <label htmlFor="stock" className="mb-2 block text-sm font-medium">
            Stock
            <SpanStar />
          </label>
          <div className="relative">
            <input
              id="stock"
              name="stock"
              type="number"
              defaultValue={state.values?.stock ?? ""}
              placeholder="please enter stock"
              className="peer block w-full md:max-w-3/4 rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              aria-describedby="stock-error"
            />
          </div>
          <div id="stock-error" aria-live="polite" aria-atomic="true">
            {state.errors?.stock &&
              state.errors.stock.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))}
          </div>
        </div>

        {/* Product Status */}
        <div className="mb-4">
          <label htmlFor="status" className="mb-2 block text-sm font-medium">
            Status
            <SpanStar />
          </label>
          <div className="relative">
            <select
              id="status"
              name="status"
              defaultValue={state.values?.status ?? ""}
              className="peer block w-full md:max-w-3/4 rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              aria-describedby="status-error"
            >
              <option value="">Select Status</option>
              <option value="new">new</option>
              <option value="active">active</option>
              <option value="low-stock">low-stock</option>
              <option value="inactive">inactive</option>
            </select>
          </div>
          <div id="status-error" aria-live="polite" aria-atomic="true">
            {state.errors?.status &&
              state.errors.status.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))}
          </div>
        </div>

        {/* Product Image  */}
        <div className="mb-4">
          <label htmlFor="image" className="mb-2 block text-sm font-medium">
            Upload Image
          </label>
          <div className="flex gap-2 items-center">
            {file && (
              <Image
                src={URL.createObjectURL(file)}
                alt="Preview"
                height={20}
                width={20}
                className="h-20 w-20 rounded-full object-cover"
              />
            )}
            <input
              id="image"
              name="image"
              type="file"
              accept="image/*"
              onChange={(e) => {
                const selectedFile = e.target.files?.[0];
                if (selectedFile) {
                  setFile(selectedFile);
                }
              }}
              // defaultValue=""
              className="cursor-pointer text-gray-600 focus:ring-2"
              aria-describedby="image-error"
            />
          </div>
          <div id="image-error" aria-live="polite" aria-atomic="true">
            {state.errors?.image &&
              state.errors.image.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))}
          </div>
        </div>

        {/* overall form error */}
        <div id="form-error" aria-live="polite" aria-atomic="true">
          {state.message && <FormErrorMessage text={state.message} />}
        </div>
      </div>
      <div className="mt-6 flex justify-end gap-4">
        <FormCancelLink href="/dashboard/products">Cancel</FormCancelLink>
        <FormSubmitButton type="submit">Update Product</FormSubmitButton>
      </div>

      {state.success && (
        <ConfirmationModal
          text={state.message ?? "Successfully Updated The Product"}
          // next_href="/orders"
        />
      )}
    </form>
  );
}
