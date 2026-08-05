import EditProductForm from "@/ui/products/edit-form";
import { fetchProductById } from "@/lib/products/fetchProduct_byId";
import { notFound } from "next/navigation";

export default async function EditProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  console.log(`edited id is:${id} `);

  const product = await fetchProductById(id);

  if (!id || !product) {
    return notFound();
  }

  return (
    <main>
      <h1> Products edit Page </h1>
      <div>Editing product: {id}</div>

      <EditProductForm product={product} />
    </main>
  );
}
