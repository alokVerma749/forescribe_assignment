import IntegrationGrid from "./components/integration-grid";
import WelcomeModal from "./components/welcome-modal";


export default function Home() {
  return (
    <main className="relative min-h-screen bg-black overflow-hidden">
      {/* Background integration grid */}
      <div className="fixed inset-0 opacity-50">
        <IntegrationGrid />
      </div>

      {/* Centered welcome modal */}
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <WelcomeModal />
      </div>
    </main>
  )
}
