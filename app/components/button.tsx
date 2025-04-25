import React from "react"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost"
  size?: "sm" | "md" | "lg"
  children: React.ReactNode
}

const Button: React.FC<ButtonProps> = ({
  variant = "default",
  size = "md",
  children,
  className = "",
  ...props
}) => {
  const baseStyles = "inline-flex items-center justify-center font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 disabled:opacity-50 disabled:pointer-events-none"
  
  const variantStyles = {
    default: "bg-purple-600 text-white hover:bg-purple-700",
    outline: "border border-zinc-700 text-zinc-300 hover:bg-zinc-800",
    ghost: "text-zinc-300 hover:bg-zinc-800 hover:text-white",
  }
  
  const sizeStyles = {
    sm: "text-xs px-2.5 py-1.5 rounded-md",
    md: "text-sm px-4 py-2 rounded-md",
    lg: "text-base px-6 py-3 rounded-md",
  }
  
  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`
  
  return (
    <button aria-label="Button" className={combinedClassName} {...props}>
      {children}
    </button>
  )
}

export default Button
