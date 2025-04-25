"use client"

import { motion } from "framer-motion";
import Button from "@/app/components/button";
import Image from "next/image";

export default function WelcomeModal() {

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="bg-black/40 backdrop-blur-md rounded-xl p-8 w-full max-w-md shadow-2xl border border-white/20 dark:border-white/10"
    >
      <div className="flex flex-col items-center text-center">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-6"
        >
          <div className="flex items-center justify-center">
            <Image src={'/Logo.svg'} alt="logo" width={25} height={25} />
          </div>
        </motion.div>

        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-xl font-semibold text-white mb-8"
        >
          Welcome to Forescribe
        </motion.h1>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="w-full space-y-3"
        >
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
            <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-md transition-all duration-300">
              Continue with Google
            </Button>
          </motion.div>

          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
            <Button
              variant="outline"
              className="w-full border border-zinc-700 text-zinc-300 py-2 rounded-md hover:bg-zinc-800 transition-all duration-300"
            >
              Continue with Email
            </Button>
          </motion.div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-6 text-xs text-zinc-500 max-w-xs"
        >
          By clicking “Continue with Google/Microsoft” above, you acknowledge that  you have read and understood, and agree to Forescribe's Terms & Conditions and Privacy Policy.        </motion.p>
      </div>
    </motion.div>
  )
}
