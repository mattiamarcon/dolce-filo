"use client"

import LoginForm from "@/app/components/LoginForm"

export default function LoginPage() {

  return (
    <div className="flex-1 flex items-center justify-center p-6  h-lvh">
      <div className="w-full max-w-md">
        <LoginForm />
      </div>
    </div>
  )
}