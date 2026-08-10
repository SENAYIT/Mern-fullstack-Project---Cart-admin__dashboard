import { fetchProductById } from "@/lib/products/fetchProduct_byId";
import { notFound } from "next/navigation";
import ProductDetail from "@/components/product/productDetail";
export default async function DetailHomePage(props: {
  params: Promise<{ id: string }>;
}) {
  const params = await props.params;
  const product_id = params.id;
  const id = product_id;
  const product = await fetchProductById(id);

  if (!product_id || !product) {
    return notFound();
  }

  return (
    <main>
      <h1>Product Details</h1>
      More details about the product with ID: {product_id}
      <ProductDetail product={product} />
    </main>
  );
}
