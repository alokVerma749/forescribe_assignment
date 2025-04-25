import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import Button from "@/app/components/button"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black px-4 py-10 md:px-8">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="inline-block mb-6">
          <Button variant="ghost" className="flex items-center gap-2 text-zinc-300 hover:text-white transition">
            <ArrowLeft size={16} />
            Back to Home
          </Button>
        </Link>

        <div className="bg-zinc-900 rounded-2xl p-6 md:p-10 shadow-2xl border border-zinc-800">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">About Forescribe</h1>

          <div className="space-y-6 text-zinc-400 leading-relaxed text-base md:text-lg">
            <p>
              Forescribe is a powerful platform that helps you connect and manage all your project integrations in one
              place. With Forescribe, you can streamline your workflow and boost productivity across your favorite
              tools.
            </p>

            <section>
              <h2 className="text-xl md:text-2xl font-semibold text-white mb-2">Our Mission</h2>
              <p>
                Our mission is to simplify the digital workspace by providing seamless integration between the tools you
                use every day. We believe in creating a more connected and efficient work environment for teams of all
                sizes.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-semibold text-white mb-2">Key Features</h2>
              <ul className="list-disc pl-6 space-y-1 text-zinc-300">
                <li>Connect with 50+ popular tools and services</li>
                <li>Centralized dashboard for all your integrations</li>
                <li>Automated workflows between different platforms</li>
                <li>Real-time collaboration features</li>
                <li>Advanced analytics and reporting</li>
              </ul>
            </section>

            <div className="pt-6">
              <Link href="/contact">
                <Button className="bg-purple-600 hover:bg-purple-700 transition w-full sm:w-auto">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
