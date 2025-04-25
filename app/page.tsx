import IntegrationGrid from "./components/integration-grid";
import WelcomeModal from "./components/welcome-modal";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[linear-gradient(135deg,_#000000_33%,_#8B3DFF_89%,_#8B3DFF_100%)] dark:bg-[linear-gradient(135deg,_#000000_33%,_#8B3DFF_89%,_#8B3DFF_100%)]">

      {/* TODO: Make it auto scrollable slowly infinitely */}
      <div className="fixed inset-0 opacity-50">
        <IntegrationGrid />
      </div>

      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <WelcomeModal />
      </div>
    </main>
  )
}
