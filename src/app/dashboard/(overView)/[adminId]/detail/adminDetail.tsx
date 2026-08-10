import DetailLayout from "@/components/common/detail/detailLayout";
import DetailHeader from "@/components/common/detail/detailHeader";
import InfoCard from "@/components/common/detail/infoCard";
import { users } from "@/lib/placeholder-data";

export default async function AdminDetail() {
  const { id, name, role, email, address, status, phoneNumber, password } =
    users[0];
  return (
    <DetailLayout>
      <DetailHeader
        title={name}
        subtitle={`role : ${role}`}
        status={status}
        editUrl={`/`}
      />

      <InfoCard
        title="Admin Information"
        items={[
          {
            label: "Email",
            value: email,
          },
          {
            label: "Phone Number",
            value: phoneNumber,
          },
          {
            label: "Address",
            value: address,
          },
          {
            label: "Password",
            value: password,
          },
        ]}
      />
    </DetailLayout>
  );
}
