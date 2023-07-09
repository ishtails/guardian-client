import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";

const Modal = ({ isOpen, onClose }) => {

  const handleSubmit = () => {
    console.log("hey")
  };

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-50 overflow-y-auto"
        onClose={onClose}
      >
        <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
          </Transition.Child>

          {/* Modal content */}
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden w-[90%] shadow-xl transform transition-all sm:my-24 lg:sm:my-12 sm:align-middle sm:max-w-[90%] lg:max-w-[75%] xl:max-w-[60%] sm:w-full">
              <div className="px-4 py-5 sm:px-6">
                <div className="flex justify-between">
                  <h1 className="font-bold font-lexend text-slate-800">
                    Choose your avatar
                  </h1>
                  <button
                    type="button"
                    className="text-gray-500 hover:text-gray-700 focus:outline-none"
                    onClick={onClose}
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="px-4">
                <div className="grid grid-cols-3 sm:grid-cols-6 gap-4">

                  TEXT

                </div>
              </div>
              <div className="px-4 py-3 mt-2 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-sky-500 text-base font-medium text-white hover:bg-sky-400 transition focus:outline-none sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={handleSubmit}
                >
                  Confirm
                </button>
                <button
                  type="button"
                  className="mt-2 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-100 focus:outline-none sm:mt-0 sm:w-auto sm:text-sm transition"
                  onClick={onClose}
                >
                  Cancel
                </button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default Modal;
