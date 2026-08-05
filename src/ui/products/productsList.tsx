import { fetchFilteredProducts } from "@/lib/products/fetchFilteredProducts";
import MobileProductCard from "./mobileProductCard";
import ProductTable from "./productTable";
import Container from "@/ui/commonForAll/container";
export default async function ProductsList({
  status = "",
  query,
  currentPage,
}: {
  status: string;
  query: string;
  currentPage: number;
}) {
  const data = await fetchFilteredProducts(status, query, currentPage);
  const products = data.productData;

  if (!products || products.length === 0) {
    return (
      <div className="h-72 flex items-center justify-center">
        <p>No products found</p>
      </div>
    );
  }

  return (
    <Container>
      <div className="md:hidden">
        {products?.map((product) => (
          <MobileProductCard key={product._id} product={product} />
        ))}
      </div>
      <div className="hidden md:flex flex-row flex-wrap items-center gap-10">
        {products && <ProductTable products={products} />}
      </div>
    </Container>
  );
}
