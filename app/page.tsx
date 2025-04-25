'use client'

import IntegrationGrid from "./components/integration-grid";
import WelcomeModal from "./components/welcome-modal";
import { motion } from "framer-motion"

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[linear-gradient(135deg,_#000000_33%,_#8B3DFF_89%,_#8B3DFF_100%)] dark:bg-[linear-gradient(135deg,_#000000_33%,_#8B3DFF_89%,_#8B3DFF_100%)]">
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
