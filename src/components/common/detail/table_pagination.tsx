import Pagination from "@/ui/commonForAll/pagination";
import { items } from "./dataItems_table";

export default function TablePagination({ totalData }: { totalData: number }) {
  const totalPages = Math.ceil(Number(totalData) / items);
  return (
    <div className="flex item-center justify-center">
      <Pagination totalPages={totalPages} />
    </div>
  );
}
