import React from "react";

function FloatingAlert({ message, type, show }) {
  return (
    <div className={`floating-alert ${type} ${show ? "show" : ""}`}>
      {message}
    </div>
  );
}

export default FloatingAlert;
