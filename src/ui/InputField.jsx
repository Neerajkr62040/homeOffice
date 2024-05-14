import React, { useState } from "react";
import { PiEyeLight, PiEyeSlash } from "react-icons/pi";

const InputField = ({
  label,
  name,
  value,
  error,
  onChange,
  placeholder,
  type = "text",
  className,
  rows,
  inputClassName,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  error = error === "undefined" ? undefined : error;

  return (
    <div className={`relative my-2 ${className}`}>
      <label htmlFor={name} className="block text-sm font-medium text-gray-600">
        {label}
      </label>
      {type === "textarea" ? (
        <textarea
          name={name}
          id={name}
          value={value}
          onChange={onChange}
          className={`border ${
            error ? "border-red-500" : "border-gray-300"
          } block w-full rounded-md border-gray-300 bg-gray-50 p-2.5 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm`}
          placeholder={placeholder}
          rows={rows ? rows : 4}
        />
      ) : (
        <input
          type={showPassword ? "text" : type}
          name={name}
          id={name}
          value={value}
          onChange={onChange}
          className={`border ${
            error ? "border-red-500" : "border-gray-300"
          } block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 ${inputClassName}`}
          placeholder={placeholder}
        />
      )}

      {type === "password" && (
        <div
          className="absolute right-3 top-1/2 cursor-pointer"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? <PiEyeLight /> : <PiEyeSlash />}
        </div>
      )}
      {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
    </div>
  );
};

export default InputField;
