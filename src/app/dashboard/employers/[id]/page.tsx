import { fetchEmployeeById } from "@/lib/employers/fetchEmployee_byId";
import { notFound } from "next/navigation";

export default async function DetailHomePage(props: {
  params: Promise<{ id: string }>;
}) {
  const params = await props.params;
  const employee_id = params.id;
  const id = employee_id;
  const employee = await fetchEmployeeById(id);

  if (!employee_id || !employee) {
    return notFound();
  }

  return (
    <main>
      <h1> Employers Detail Page </h1>
    </main>
  );
}
