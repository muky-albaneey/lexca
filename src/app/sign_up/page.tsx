"use client"; // Add this line to mark the component as a client-side component

import { SignUpData } from '@/components/auth/SignupForm'; 
import SignUpForm from '@/components/auth/SignupForm';
import React, {useState, useEffect} from 'react';
import { useRouter } from 'next/navigation';

export default function Sign_up() {
  // Usage of SignUpForm in your component
    const [isClient, setIsClient] = useState(false);
    const router = useRouter();
  useEffect(() => {
    setIsClient(true); // Ensures the router is used only on the client side
  }, []);

  const handleSignUp = async (data: SignUpData) => {
    try {
      const res = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
  
      const result = await res.json();
  
      if (!res.ok) {
        alert(result.error || "Signup failed");
        return;
      }
      const { user, token } = result;
      localStorage.setItem("authToken", token);

      if (res.ok) {
        router.push('/user_dashboard/1'); // Redirect after successful login
      }

      alert("Signup successful!");
    } catch (error) {
      console.error("Signup error", error);
      throw error;
    }

  
  };
  if (!isClient) {
    return null; // Avoid rendering anything until we're sure it's client-side
  }
  return (
    <div>
      <SignUpForm onSubmit={handleSignUp} />
    </div>
  );
}
