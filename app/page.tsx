'use client'

import Image from "next/image";
import IntegrationGrid from "./components/integration-grid";
import WelcomeModal from "./components/welcome-modal";
import { motion } from "framer-motion"
import { ThemeToggle } from "./components/theme-toggle";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[linear-gradient(135deg,_#000000_33%,_#8B3DFF_89%,_#8B3DFF_100%)] dark:bg-[linear-gradient(135deg,_#000000_33%,_#8B3DFF_89%,_#8B3DFF_100%)]">
      <div className="z-50 absolute w-screen p-5 flex items-center justify-between">
        <div className="flex items-center">
          <Image src={'/Logo.svg'} alt="logo" width={10} height={10} className="mr-2" />
          <span className="text-white text-xl font-semibold">forescribe</span>
        </div>

        <ThemeToggle />
      </div>

      <motion.div
        className="fixed inset-0 opacity-20"
        animate={{ y: ["0%", "-50%"] }}
        transition={{
          duration: 40,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
        }}
      >
        <IntegrationGrid />
      </motion.div>

      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <WelcomeModal />
      </div>
    </main>
  )
}
