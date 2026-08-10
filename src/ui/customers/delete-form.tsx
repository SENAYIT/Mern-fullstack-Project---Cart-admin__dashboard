// import { deleteCustomer } from "@/lib/customers/delete_action";
// import { FormSubmitButton } from "../commonForAll/formButtons";
// import Modal from "../commonForAll/modal/modal";
// import { FormCancelLink } from "../commonForAll/formButtons";
// import { useActionState } from "react";
// import { State } from "@/lib/customers/definitions";
// import ConfirmationModal from "../commonForAll/confirmationModal";

// export default function DeleteCustomer({ id }: { id: string }) {
//   const deleteCustomerWithId = deleteCustomer.bind(null, id);

//   //   const [state, formAction, isPending] = useActionState<State>(
//   //     deleteCustomerWithId,
//   //     { success: false, message: null },
//   //   );

//   return (
//     <Modal open={true} redirect_href={"/"}>
//       <form action={formAction}>
//         <div>
//           <h2>Are you sure to delete the orderId : {id} ? </h2>
//           <div className="flex items-center justify-end gap-2">
//             <FormCancelLink href="/dashboard/orders"> No </FormCancelLink>
//             <FormSubmitButton type="submit">
//               {isPending ? "Deleting..." : "Delete"}
//             </FormSubmitButton>
//           </div>
//         </div>

//         {state.success && (
//           <ConfirmationModal
//             text={state.message || "Successfully Deleted the customer !!"}
//           />
//         )}
//       </form>
//     </Modal>
//   );
// }
