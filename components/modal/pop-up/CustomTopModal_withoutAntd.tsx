import React from "react";
import { CustomModalProps } from "@/types";

const CustomTopModal_withoutAntd: React.FC<CustomModalProps> = ({
  visible,
  onClose,
  onOk,
  title,
  children,
}) => {
  if (!visible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-start z-50">
      <div className="bg-white rounded-lg shadow-lg w-96 max-w-full mt-10">
        <div className="flex justify-between items-center border-b p-4">
          <h2 className="text-lg font-semibold">{title}</h2>
          <button className="text-xl font-bold leading-none" onClick={onClose}>
            &times;
          </button>
        </div>
        <div className="p-4">{children}</div>
        <div className="flex justify-end border-t p-4 space-x-2">
          <button
            className="bg-gray-200 text-black py-2 px-4 rounded hover:bg-gray-300"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
            onClick={onOk}
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomTopModal_withoutAntd;
