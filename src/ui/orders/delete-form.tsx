"use client";

import { useActionState, useState } from "react";
import { TrashIcon, ArrowPathIcon } from "@heroicons/react/24/outline";

import { deleteOrder } from "@/lib/orders/delete_action";
export type State = {
  success: boolean;
  message: string | null;
};

export default function DeleteForm({ id }: { id: string }) {
  const [open, setOpen] = useState(false);

  const deleteOrderWithId = deleteOrder.bind(null, id);

  const [state, formAction, isPending] = useActionState<State>(
    deleteOrderWithId,
    {
      success: false,
      message: null,
    },
  );

  return (
    <>
      {/* Delete button */}
      <button onClick={() => setOpen(true)} className="text-red-700">
        <TrashIcon className="w-5 h-5 text-red-700 hover:text-gray-100  hover:bg-red-700" />
      </button>

      {/* Confirmation / deleting modal */}
      {open && (
        <div className="fixed inset-0 z-10000 flex items-center justify-center bg-black/50 p-4">
          <div className="w-full max-w-sm rounded-xl bg-white p-6 shadow-xl">
            {!isPending && !state.success ? (
              <>
                <h2 className="text-lg font-semibold">Delete Order?</h2>

                <p className="mt-2 text-sm flex flex-col text-gray-500">
                  Are you sure you want to delete this order?
                  <span>This action cannot be undone.</span>
                </p>

                <div className="mt-6 flex justify-end gap-3">
                  {/* Cancel */}
                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    className="rounded-lg border px-4 py-2"
                  >
                    Cancel
                  </button>

                  {/* OK */}
                  <form action={formAction}>
                    <input type="hidden" name="id" value={id} />

                    <button
                      type="submit"
                      className="rounded-lg bg-red-500 px-4 py-2 text-white"
                    >
                      OK
                    </button>
                  </form>
                </div>
              </>
            ) : isPending ? (
              /* Deleting state */
              <div className="flex flex-col items-center py-6">
                <ArrowPathIcon className="w-5 h-5 animate-spin text-red-500" />

                <p className="mt-3 font-medium">Deleting...</p>

                <p className="mt-1 text-sm text-gray-500">Please wait.</p>
              </div>
            ) : (
              /* Success */
              <div className="text-center py-6">
                <h2 className="text-lg font-semibold text-green-600">
                  Deleted successfully
                </h2>

                <p className="mt-2 text-sm text-gray-500">{state.message}</p>

                <button
                  onClick={() => setOpen(false)}
                  className="mt-5 rounded-lg bg-blue-500 px-5 py-2 text-white"
                >
                  OK
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
