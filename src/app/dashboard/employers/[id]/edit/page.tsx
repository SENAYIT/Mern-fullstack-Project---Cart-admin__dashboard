import EditEmployerForm from "@/ui/employers/edit-form";
import {fetchEmployeeById} from "@/lib/employers/fetchData";
import { notFound } from "next/navigation";

export default async function EditEmployerPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params;
 console.log(`edited id is:${id} `);

  const employee = await fetchEmployeeById(id);

  if (!id || !employee) {
    return notFound();
  }

  return (
    <main>

      <h1> Employers edit Page </h1>
      <div>Editing employer: {id}</div>

      <EditEmployerForm employer={employee} />
    </main>
  );
}
