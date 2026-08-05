import Form from "@/ui/customers/create-form";

export default function Page() {
  return (
    <div className="flex flex-col gap-3">
      <h1>Customer Registration</h1>
      <div>
        <Form />
      </div>
    </div>
  );
}
