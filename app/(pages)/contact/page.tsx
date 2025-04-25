import Link from "next/link"
import Button from "@/app/components/button"
import { ArrowLeft } from "lucide-react"

export default function ContactPage() {
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
          <h1 className="text-3xl font-bold text-white mb-6">Contact Us</h1>

          <form className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-zinc-300">
                Name
              </label>
              <input
                id="name"
                type="text"
                className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-zinc-300">
                Email
              </label>
              <input
                id="email"
                type="email"
                className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-zinc-300">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </main>
  )
}
