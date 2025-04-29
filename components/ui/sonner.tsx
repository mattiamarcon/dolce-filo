"use client"

import { Toaster as Sonner, ToasterProps } from "sonner"

const Toaster = ({ ...props }: ToasterProps) => {

  return (
    <Sonner
      className="toaster group"
      toastOptions={{
        style: {
          fontSize: "18px", // Larger font size (was 10px)
          padding: "20px", // More padding
          border: "1px solid",
          borderColor :"dark",
          maxWidth: "500px", // Wider toasts
          display: "flex",
          alignItems: "center",
          gap: "12px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        },
        duration:5000,
      }}
      {...props}
    />
  )
}

export { Toaster }
