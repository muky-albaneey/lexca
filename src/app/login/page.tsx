"use client";
import React, { useEffect, useState } from 'react';
import LoginForm from '@/components/auth/LoginForm';
import { useRouter } from 'next/navigation';

export default function Login() {
  const [isClient, setIsClient] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsClient(true); // Ensures the router is used only on the client side
  }, []);

  const onLogin = async (email: string, password: string) => {
    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Login failed");
      }

      console.log("Login successful", data.token);
      localStorage.setItem("authToken", data.token); // Store token securely

      if (response.ok) {
        router.push('/user_dashboard/1'); // Redirect after successful login
      }

    } catch (error) {
      console.error("Login error", error);
      throw error;
    }
  };

  if (!isClient) {
    return null; // Avoid rendering anything until we're sure it's client-side
  }

  return (
    <div>
      <LoginForm onLogin={onLogin} />
    </div>
  );
}
