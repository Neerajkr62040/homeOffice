import React, { useEffect, useState } from "react";
import InputField from "../ui/InputField";
import creds from "../cred.json";
import toast from "react-hot-toast";

import { useAuth } from "../provider/auth";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  let auth = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({});
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let errs = {};

    if (formData.email === "") {
      errs = { ...errs, email: "Email is required" };
    }
    if (formData.password === "") {
      errs = { ...errs, password: "Password is required" };
    }

    if (Object.keys(errs)?.length !== 0) {
      setErrors(errs);
      return;
    }

    let user = creds?.find((el) => el.email === formData?.email);
    if (!user || user?.password !== formData.password) {
      toast.error("Invalid credientials");
      return;
    }

    auth.login(formData);
    toast.success("Login success");
    navigate("/home")
  };

  useEffect(() => {
    if(auth && auth?.user?.email){
      
    }
  }, []);

  return (
    <div className="max-w-md mx-auto">
      <div className="flex justify-between items-center mb-3">
        <h2 className=" text-2xl font-bold underline">Login</h2>
        {/* <p className=" text-sm font-bold underline text-[#0068C8]">
          forgotten your password?
        </p> */}
      </div>
      <form onSubmit={handleSubmit}>
        <InputField
          label="Email"
          name="email"
          value={formData.email}
          error={errors.email}
          onChange={handleChange}
          type="email"
          placeholder="Enter your email"
          className="mb-2"
        />
        <InputField
          label="Password"
          name="password"
          value={formData.password}
          error={errors.password}
          onChange={handleChange}
          type="password"
          placeholder="Enter your password"
          className="mb-2"
        />
        <button
          type="submit"
          className="mt-4 w-full rounded-lg bg-gray-400 px-5 py-2.5 text-center text-sm font-medium text-black hover:bg-[#b60000] hover:text-white hover:transition-all focus:outline-none focus:ring-4 focus:ring-red-300"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
