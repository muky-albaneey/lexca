"use client";

import React, { useState } from "react";
import Image from "next/image";

interface LoginFormProps {
  onLogin: (email: string, password: string) => Promise<void>;
}

const LoginForm: React.FC<LoginFormProps> = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<{ email?: string; password?: string; general?: string }>({});
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError({});
    setLoading(true);

    try {
      // Send login request to the backend
      await onLogin(email, password);
    } catch (err: any) {
        setLoading(false);
        setError({ general: "An error occurred. Please try again." });
      }
      
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-sm">
        <h2 className="text-2xl font-bold text-center mb-4">Welcome Back!</h2>
        <p className="text-sm text-gray-500 text-center mb-6">Log back into Your Afrigo Account</p>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <div className="relative">
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`mt-1 block w-full rounded-md border px-3 py-2 shadow-sm focus:outline-none focus:ring focus:ring-indigo-500 ${
                  error.email ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Enter your email"
              />
              {error.email && <p className="text-xs text-red-600 mt-1">{error.email}</p>}
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <div className="relative">
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={`mt-1 block w-full rounded-md border px-3 py-2 shadow-sm focus:outline-none focus:ring focus:ring-indigo-500 ${
                  error.password ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Enter your password"
              />
              {error.password && <p className="text-xs text-red-600 mt-1">{error.password}</p>}
            </div>
            <a href="#" className="text-sm text-indigo-600 hover:underline float-right mt-1">
              Forgot Password?
            </a>
          </div>

          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              id="remember"
              className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring focus:ring-indigo-500"
            />
            <label htmlFor="remember" className="ml-2 block text-sm text-gray-700">
              Remember me
            </label>
          </div>

          {error.general && <p className="text-xs text-red-600 text-center mb-4">{error.general}</p>}

                        <button
                type="submit"
                disabled={loading}
                className={`w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-white text-sm font-medium ${
                    loading ? 'bg-gray-500 cursor-not-allowed' : 'bg-black hover:bg-gray-800'
                }`}
                >
                {loading ? <svg
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
            </svg> : 'Continue'}
                </button>

        </form>

        <div className="text-center mt-6">
          <p className="text-sm">
            Don’t have an account?{' '}
            <a href="#" className="text-indigo-600 hover:underline">
              Sign Up
            </a>
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

        <p className="text-xs text-gray-500 text-center mt-6">
          By signing in, you confirm that you have read and accepted our{' '}
          <a href="#" className="text-indigo-600 hover:underline">
            Terms of Service
          </a>{' '}
          and{' '}
          <a href="#" className="text-indigo-600 hover:underline">
            Privacy Policies
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
