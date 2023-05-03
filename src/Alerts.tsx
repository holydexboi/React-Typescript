import React, { Dispatch, ReactNode } from "react";

interface AlertProps {
  children: ReactNode;
  onClose: () => void
}

const Alerts = ({ children, onClose}: AlertProps) => {
  return (
    <div className="alert alert-primary alert-dismissible">
      <span>{children}</span>
      <button
        type="button"
        onClick={onClose}
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button>
    </div>
  );
};

export default Alerts;
