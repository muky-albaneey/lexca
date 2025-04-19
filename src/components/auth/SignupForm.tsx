"use client";

import { useState } from "react";
import Image from "next/image";

interface SignUpFormProps {
  onSubmit: (data: SignUpData) => Promise<void>;
}

export interface SignUpData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const SignUpForm: React.FC<SignUpFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<SignUpData>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState<Partial<SignUpData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: Partial<SignUpData> = {};

    if (!formData.firstName) newErrors.firstName = "First name is required.";
    if (!formData.lastName) newErrors.lastName = "Last name is required.";
    if (!formData.email) newErrors.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Invalid email address.";

    if (!formData.password) newErrors.password = "Password is required.";
    else if (formData.password.length < 8)
      newErrors.password = "Password is too weak.";

    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Passwords don't match.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
  
    setIsSubmitting(true);
    try {
      // Pass firstName and lastName directly, not fullName
      await onSubmit(formData);
    } catch (error) {
      console.error("Error creating account", error);
    } finally {
      setIsSubmitting(false);
    }
  };
  
//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!validateForm()) return;

//     setIsSubmitting(true);
//     try {
//       // Call the onSubmit function passed as a prop (handleSignUp)
//       await onSubmit(formData);
//     } catch (error) {
//       console.error("Error creating account", error);
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg p-6 w-full max-w-md"
      >
        <h1 className="text-2xl font-bold mb-6 text-center">Create Your Account</h1>

        {/* First Name Field */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
          <input
            type="text"
            placeholder="Enter your first name"
            value={formData.firstName}
            onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
            className={`w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 text-sm
              ${errors.firstName ? "border-red-500 focus:ring-red-500" : "focus:ring-blue-500"}`}
          />
          {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
        </div>

        {/* Last Name Field */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
          <input
            type="text"
            placeholder="Enter your last name"
            value={formData.lastName}
            onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
            className={`w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 text-sm
              ${errors.lastName ? "border-red-500 focus:ring-red-500" : "focus:ring-blue-500"}`}
          />
          {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
        </div>

        {/* Email Field */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className={`w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 text-sm
              ${errors.email ? "border-red-500 focus:ring-red-500" : "focus:ring-blue-500"}`}
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
        </div>

        {/* Password Field */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
          <input
            type="password"
            placeholder="Create a strong password"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            className={`w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 text-sm
              ${errors.password ? "border-red-500 focus:ring-red-500" : "focus:ring-blue-500"}`}
          />
          {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
        </div>

        {/* Confirm Password Field */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={formData.confirmPassword}
            onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
            className={`w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 text-sm
              ${errors.confirmPassword ? "border-red-500 focus:ring-red-500" : "focus:ring-blue-500"}`}
          />
          {errors.confirmPassword && <p className="text-red-500 text-xs mt-1">{errors.confirmPassword}</p>}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full flex items-center justify-center bg-black text-white rounded-lg py-2 font-medium text-sm
            ${isSubmitting ? "opacity-70 cursor-not-allowed" : "hover:bg-gray-800"}`}
        >
          {isSubmitting ? (
            <svg
              className="animate-spin h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v8H4z"
              ></path>
            </svg>
          ) : (
            "Create Account"
          )}
        </button>

        {/* Footer */}
        <div className="text-center mt-4">
          <p className="text-sm">
            Already have an account? <a className="text-blue-500">Log in</a>
          </p>
        </div>
          <div className="mt-6 border-t pt-4 text-center">
                  <p className="text-sm text-gray-500">OR</p>
                  <button
                    type="button"
                    className="mt-2 w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm bg-white hover:bg-gray-50"
                  >
                    <Image
                      src="/google.svg"
                      alt="Google Logo"
                      width={20}
                      height={20}
                      className="mr-2"
                    />
                    Continue with Google
                  </button>
                </div>
      </form>
    </div>
  );
};

export default SignUpForm;
