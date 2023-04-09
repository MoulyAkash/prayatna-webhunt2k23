import React, { useState } from "react";
import { TbLock, TbEye } from "react-icons/tb";

export default function TextInput(props: any) {
  const [visible, setVisible] = useState(false);
  const [error, setError] = useState(false);

  return (
    <div className="text-input-container">
      <div className="text-input-wrapper">
        {props.icon && <div className="icon-wrapper">{props.icon}</div>}
        <input
          type={props.type === "password" && !visible ? "password" : "text"}
          className="text-input"
          placeholder={props.placeholder}
          onChange={(e) => {
            if (props.validateWith(e.target.value)) {
              props.onChange(e.target.value);
              error && setError(false);
            } else {
              setError(true);
            }
          }}
        />
        {props.type === "password" && (
          <div className="text-input-eye" onClick={() => setVisible(!visible)}>
            <TbEye />
          </div>
        )}
      </div>

      {error && props.errorText && (
        <div className="text-input-error-container">
          <div className="text-input-error">{props.errorText}</div>
        </div>
      )}
    </div>
  );
}
