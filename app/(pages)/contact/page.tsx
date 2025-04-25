'use client'

import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { ArrowLeft } from "lucide-react";
import Button from "@/app/components/button";
import Image from "next/image";

export default function ContactPage() {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  const onSubmit = (data: any) => {
    console.log(data);
    // handle form submission
  };

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <main className={`${theme === 'dark' ? 'bg-black' : 'bg-white'} min-h-screen p-8 transition-colors`}>
      <div className="max-w-4xl mx-auto">

        {/* Top Header */}
        <div className="flex items-center justify-between mb-8">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.png" alt="Logo" width={40} height={40} />
            <span className="text-xl font-bold text-white dark:text-black">BrandName</span>
          </Link>

          {/* Theme Switcher */}
          <Button variant="ghost" onClick={toggleTheme}>
            {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
          </Button>
        </div>

        {/* Back Button */}
        <Link href="/" className="inline-block mb-8">
          <Button variant="ghost" className="flex items-center gap-2">
            <ArrowLeft size={16} />
            Back to Home
          </Button>
        </Link>

        {/* Contact Form */}
        <div className={`rounded-xl p-8 shadow-lg ${theme === 'dark' ? 'bg-zinc-900' : 'bg-zinc-100'}`}>
          <h1 className={`text-3xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
            Contact Us
          </h1>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

            {/* Name Field */}
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-zinc-500">
                Name
              </label>
              <input
                id="name"
                type="text"
                {...register("name", { required: "Name is required" })}
                className="w-full px-4 py-2 bg-zinc-800 dark:bg-white border border-zinc-700 dark:border-zinc-300 rounded-md 
                           focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
              />
              {errors.name && <p className="text-red-500 text-xs">{String(errors.name.message)}</p>}
            </div>

            {/* Email Field */}
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-zinc-500">
                Email
              </label>
              <input
                id="email"
                type="email"
                {...register("email", { required: "Email is required" })}
                className="w-full px-4 py-2 bg-zinc-800 dark:bg-white border border-zinc-700 dark:border-zinc-300 rounded-md 
                           focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
              />
              {errors.email && <p className="text-red-500 text-xs">{String(errors.email.message)}</p>}
            </div>

            {/* Message Field */}
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-zinc-500">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                {...register("message", { required: "Message is required" })}
                className="w-full px-4 py-2 bg-zinc-800 dark:bg-white border border-zinc-700 dark:border-zinc-300 rounded-md 
                           focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
              />
              {errors.message && <p className="text-red-500 text-xs">{String(errors.message.message)}</p>}
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 transition-colors"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </div>
      </div>
    </main>
  );
}
