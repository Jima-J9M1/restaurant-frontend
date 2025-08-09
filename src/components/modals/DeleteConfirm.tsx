"use client";

import Modal from "@/components/ui/Modal";

interface DeleteConfirmProps {
  open: boolean;
  title?: string;
  message?: string;
  onConfirm: () => Promise<void> | void;
  onClose: () => void;
}

export default function DeleteConfirm({ open, onClose, onConfirm, title = "Delete Meal", message = "Are you sure you want to delete this meal? Actions cannot be reversed." }: DeleteConfirmProps) {
  return (
    <Modal
      open={open}
      onClose={onClose}
      title={title}
      footer={
        <>
          <button
            type="button"
            className="min-w-28 rounded-lg bg-gradient-to-r from-orange-400 to-amber-500 px-5 py-2.5 font-semibold text-white shadow-sm hover:from-orange-500 hover:to-amber-600"
            onClick={async () => {
              await onConfirm();
              onClose();
            }}
          >
            Yes
          </button>
          <button
            type="button"
            className="min-w-28 rounded-lg border border-gray-300 bg-white px-5 py-2.5 font-semibold text-gray-700 shadow-sm hover:bg-gray-50"
            onClick={onClose}
          >
            Cancel
          </button>
        </>
      }
    >
      <p className="text-center text-sm text-gray-600">{message}</p>
    </Modal>
  );
}


