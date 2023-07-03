/** @format */

import React from "react";

const ModalSearch = ({ open, onClose, children }) => {
  return (
    <section
      onClick={onClose}
      className={`fixed inset-0 flex justify-center items-center transition-opacity ${
        open ? "visible bg-black bg-opacity-20" : "invisible"
      }`}
    >
      {/* modal */}
      <div
        onClick={onClose}
        className={`bg-white rounded-md shadow p-4 transition-transform ${
          open ? "scale-110 opacity-100" : "scale-125 opacity-0"
        }`}
      >
        {children}
      </div>
    </section>
  );
};

export default ModalSearch;
