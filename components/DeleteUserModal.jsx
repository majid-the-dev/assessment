"use client";

import { useState } from "react";
import { PlusCircle, Trash, User, X } from "@phosphor-icons/react/dist/ssr";
import axios from "axios";

const DeleteUserModal = ({ user }) => {
  const [modal, setModal] = useState(false);

  const handleDeleteUser = async () => {
    try {
      const response = await axios.delete(
        `https://voyatest3.free.beeceptor.com/api/users/${user.email}`
      );
      if (response.status === 200) {
        alert("User deleted successfully");
        setModal(false);
      } else {
        alert("Failed to delete user");
      }
    } catch (error) {
      console.error("Error deleting user:", error);
      alert("Error deleting user");
    }
  };

  return (
    <>
      <button
        onClick={() => setModal(true)}
        className="text-sm font-medium text-[#98A2B3]"
      >
        Remove
      </button>

      {modal && (
        <div
          onClick={() => setModal(false)}
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 px-6"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="flex flex-col items-center justify-center gap-5 bg-white w-full max-w-xl rounded-lg px-8 py-12 overflow-y-scroll animate__animated animate__zoomIn"
          >
            <h1 className="text-2xl font-semibold">Delete this user</h1>
            <p className="w-full max-w-md text-[16px] text-center font-light text-[#667185] leading-6">
              This user and all associated data will be permanently removed. Do
              you wish to continue
            </p>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setModal(false)}
                className="bg-[#F7F9FC] text-[#475367] font-bold border border-[#D0D5DD] px-3 py-2 rounded-[6px]"
              >
                Cancel action
              </button>
              <button
                onClick={handleDeleteUser}
                className="flex items-center gap-2 bg-[#FBEAE9] text-[#D42620] font-bold border border-[#EB9B98] px-3 py-2 rounded-[6px]"
              >
                <Trash size={15} />
                Yes, Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DeleteUserModal;
