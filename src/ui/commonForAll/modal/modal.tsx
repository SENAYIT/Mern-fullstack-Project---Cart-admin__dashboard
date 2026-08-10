`use client`;
import { redirect } from "next/navigation";
import React, { useState } from "react";
import styles from "./modal.module.css";
import { BackwardIcon } from "@heroicons/react/24/outline";

type ModalProps = {
  open: boolean;
  redirect_href: string;
  children: React.ReactNode;
};
export default function Modal({ open, redirect_href, children }: ModalProps) {
  const [isOpen, setIsOpen] = useState<boolean>(open || true);

  const handleClose = () => {
    // setModalOpen;
    // onclose(); // if there is onclose props
    setIsOpen((prev) => !prev);
    redirect(redirect_href);
  };

  return (
    <>
      {isOpen && <div onClick={handleClose} className={styles.overlay} />}
      <dialog open={open} className={styles.modal}>
        <button onClick={handleClose} className="text-red-500 p-1">
          <BackwardIcon className="w-4 h-4" />
        </button>

        {children}
      </dialog>
    </>
  );
}
