import React from "react";

function Form({ onSubmitForm, children }) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmitForm();
      }}
    >
      {children}
    </form>
  );
}

export default Form;
