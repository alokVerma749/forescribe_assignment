'use client';

import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import Button from '@/app/components/button';

export default function ContactPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="bg-white dark:bg-black min-h-screen p-8 transition-colors bg-[linear-gradient(135deg,_#000000_33%,_#8B3DFF_89%,_#8B3DFF_100%)] dark:bg-[linear-gradient(135deg,_#000000_33%,_#8B3DFF_89%,_#8B3DFF_100%)]"
    >
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
          <Link href="/" className="inline-block mb-8" aria-label="Go back to home">
            <Button variant="ghost" className="flex items-center gap-2">
              <ArrowLeft size={16} />
              Back to Home
            </Button>
          </Link>
        </motion.div>

        {/* Contact Form */}
        <motion.section
          aria-labelledby="contact-heading"
          className="rounded-xl p-8 shadow-lg bg-zinc-100 dark:bg-zinc-900"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h1
            id="contact-heading"
            className="text-3xl font-bold mb-6 text-black dark:text-white"
          >
            Contact Us
          </h1>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6"
            noValidate
            aria-describedby="form-description"
          >
            <p id="form-description" className="sr-only">
              Please fill out all fields before submitting the form.
            </p>

            {/* Name Field */}
            <motion.div
              className="space-y-2"
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <label htmlFor="name" className="text-sm font-medium text-zinc-500">
                Name<span className="sr-only"> (required)</span>
              </label>
              <input
                id="name"
                type="text"
                aria-invalid={errors.name ? 'true' : 'false'}
                aria-describedby={errors.name ? 'name-error' : undefined}
                {...register('name', { required: 'Name is required' })}
                className="w-full px-4 py-2 bg-white dark:bg-zinc-800 border dark:text-white border-zinc-300 dark:border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
              />
              {errors.name && (
                <p id="name-error" role="alert" className="text-red-500 text-xs">
                  {String(errors.name.message)}
                </p>
              )}
            </motion.div>

            {/* Email Field */}
            <motion.div
              className="space-y-2"
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <label htmlFor="email" className="text-sm font-medium text-zinc-500">
                Email<span className="sr-only"> (required)</span>
              </label>
              <input
                id="email"
                type="email"
                aria-invalid={errors.email ? 'true' : 'false'}
                aria-describedby={errors.email ? 'email-error' : undefined}
                {...register('email', { required: 'Email is required' })}
                className="w-full px-4 py-2 bg-white dark:bg-zinc-800 dark:text-white border border-zinc-300 dark:border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
              />
              {errors.email && (
                <p id="email-error" role="alert" className="text-red-500 text-xs">
                  {String(errors.email.message)}
                </p>
              )}
            </motion.div>

            {/* Message Field */}
            <motion.div
              className="space-y-2"
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <label htmlFor="message" className="text-sm font-medium text-zinc-500">
                Message<span className="sr-only"> (required)</span>
              </label>
              <textarea
                id="message"
                rows={5}
                aria-invalid={errors.message ? 'true' : 'false'}
                aria-describedby={errors.message ? 'message-error' : undefined}
                {...register('message', { required: 'Message is required' })}
                className="w-full px-4 py-2 bg-white dark:bg-zinc-800 border dark:text-white border-zinc-300 dark:border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
              />
              {errors.message && (
                <p id="message-error" role="alert" className="text-red-500 text-xs">
                  {String(errors.message.message)}
                </p>
              )}
            </motion.div>

            {/* Submit Button */}
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}>
              <Button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 transition-colors cursor-pointer"
                disabled={isSubmitting}
                aria-busy={isSubmitting}
                aria-label="Send message"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </motion.div>
          </form>
        </motion.section>
      </div>
    </motion.main>
  );
}
