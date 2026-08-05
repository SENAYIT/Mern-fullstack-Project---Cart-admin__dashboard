import Modal from "@/ui/commonForAll/modal/modal";

export default function ConfirmationModal({
  text,
  // next_href,
}: {
  text: string;
  // next_href: string;
}) {
  return (
    <Modal open={true} redirect_href={"/"}>
      <div className="flex flex-col items-center justify-center gap-2">
        <h1 className="font-bold text-green-500">Congratulation !!! </h1>
        <p className=" text-sm text-gray-500">{text}</p>
      </div>
    </Modal>
  );
}
