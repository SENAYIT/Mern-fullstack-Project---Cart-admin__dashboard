import {
  Create,
  DeleteButton,
  Detail,
  Update,
} from "@/ui/commonForAll/editActionButtons_link";
import { deleteProduct } from "@/lib/products/delete_action";

export function CreateProduct() {
  return <Create href="/dashboard/products/create" text="Create Product" />;
}

export function DetailProduct({ id }: { id: string }) {
  return <Detail href={`/dashboard/products/${id}`} />;
}

export function UpdateProduct({ id }: { id: string }) {
  return <Update href={`/dashboard/products/${id}/edit`} />;
}

export function DeleteProduct({ id }: { id: string }) {
  const deleteProductWithId = deleteProduct.bind(null, id);

  return (
    <form action={deleteProductWithId}>
      <DeleteButton />
    </form>
  );
}
