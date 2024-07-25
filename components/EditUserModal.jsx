"use client";

import { PlusCircle, User, X } from "@phosphor-icons/react/dist/ssr";
import { useState } from "react";
import CreateUserForm from "./CreateUserForm";

const EditUserModal = ({ user }) => {
  const [modal, setModal] = useState(false);

  return (
    <>
      <button
        onClick={() => setModal(true)}
        className="text-sm font-medium text-primaryBlue"
      >
        Edit
      </button>
      {modal && (
        <div
          onClick={() => setModal(false)}
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 px-6"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative bg-white w-full max-w-xl rounded-lg p-8 overflow-y-scroll animate__animated animate__zoomIn"
          >
            <button
              onClick={() => setModal(false)}
              className="absolute top-5 right-5"
            >
              <X color="#676E7E" size={17} />
            </button>
            <div className="flex flex-col items-center justify-center">
              <div className="bg-[#D2E4FE] border border-[#D2E4FE] rounded-full p-4">
                <User color="#0D6EFD" size={32} />
              </div>
              <h1 className="text-2xl font-bold mt-3">Edit User</h1>
            </div>
            <div className="mt-8">
              <CreateUserForm type="edit-user" user={user} setModal={setModal} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default EditUserModal;
