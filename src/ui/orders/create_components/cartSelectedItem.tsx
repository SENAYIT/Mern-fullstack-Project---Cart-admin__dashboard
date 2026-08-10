import { products } from "@/store/shopping-cart-context";

export default function CartSelectedItemShow({
  selectProductId,
}: {
  selectProductId?: String;
}) {
  const product = products?.find((product) => product._id === selectProductId);
  if (!product) {
    return;
  }
  const { name, price } = product;
  return (
    <div className="flex justify-start gap-2">
      <div className="flex gap-2">
        <p> image</p>
        <div className="flex flex-col gap-0.5 justify-center">
          <p> {name}</p>
          <p> description</p>
        </div>
      </div>
      <p>price: $ {price}</p>
    </div>
  );
}
