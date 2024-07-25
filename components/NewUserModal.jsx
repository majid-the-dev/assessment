"use client";

import { PlusCircle, User, X } from "@phosphor-icons/react/dist/ssr";
import { useState } from "react";
import CreateUserForm from "./CreateUserForm";

const NewUserModal = ({ getUsers }) => {
  const [modal, setModal] = useState(false);

  return (
    <>
      <button
        onClick={() => setModal(true)}
        className="flex items-center gap-2 bg-primaryBlue text-white text-sm font-semibold rounded-[6px] px-3 py-3 whitespace-nowrap ml-auto"
      >
        <PlusCircle size={16} />
        <span className="hidden md:block">New User</span>
      </button>
      {modal && (
        <div
          onClick={() => setModal(false)}
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 px-6"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative bg-white w-full max-w-xl rounded-[6px] px-8 py-10 overflow-y-scroll animate__animated animate__zoomIn"
          >
            <button
              onClick={() => setModal(false)}
              className="absolute top-5 right-5"
            >
              <X color="#676E7E" size={19} />
            </button>
            <div className="flex flex-col items-center justify-center">
              <div className="bg-[#F0F6FE] border border-[#D2E4FE] rounded-full p-4">
                <User color="#0D6EFD" size={27} />
              </div>
              <h1 className="text-[#1D2739] text-2xl font-semibold mt-3">New User</h1>
            </div>
            <div className="mt-8">
              <CreateUserForm type="create-user" setModal={setModal} getUsers={getUsers} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NewUserModal;
