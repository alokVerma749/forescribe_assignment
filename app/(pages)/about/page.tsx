import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import Button from "@/app/components/button"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black p-8">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="inline-block mb-8">
          <Button variant="ghost" className="flex items-center gap-2">
            <ArrowLeft size={16} />
            Back to Home
          </Button>
        </Link>

        <div className="bg-zinc-900 rounded-xl p-8 shadow-lg">
          <h1 className="text-3xl font-bold text-white mb-6">About Forescribe</h1>

          <div className="space-y-6 text-zinc-300">
            <p>
              Forescribe is a powerful platform that helps you connect and manage all your project integrations in one
              place. With Forescribe, you can streamline your workflow and boost productivity across your favorite
              tools.
            </p>

            <h2 className="text-xl font-semibold text-white mt-8 mb-4">Our Mission</h2>
            <p>
              Our mission is to simplify the digital workspace by providing seamless integration between the tools you
              use every day. We believe in creating a more connected and efficient work environment for teams of all
              sizes.
            </p>

            <h2 className="text-xl font-semibold text-white mt-8 mb-4">Key Features</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Connect with 50+ popular tools and services</li>
              <li>Centralized dashboard for all your integrations</li>
              <li>Automated workflows between different platforms</li>
              <li>Real-time collaboration features</li>
              <li>Advanced analytics and reporting</li>
            </ul>

            <div className="mt-8">
              <Link href="/contact">
                <Button className="bg-purple-600 hover:bg-purple-700">Contact Us</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
