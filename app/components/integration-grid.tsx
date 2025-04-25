"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

// Define integration types
interface Integration {
  id: string
  name: string
  logo: string
  color: string
  type: string
}

interface Person {
  id: string
  name: string
  avatar: string
  quote: string
}

// Sample data for integrations
const integrations: Integration[] = [
  {
    id: "figma",
    name: "Figma",
    logo: "/placeholder.svg?height=40&width=40",
    color: "bg-[#F24E1E]/10",
    type: "Project Management",
  },
  {
    id: "notion",
    name: "Notion",
    logo: "/placeholder.svg?height=40&width=40",
    color: "bg-black",
    type: "Project Management",
  },
  {
    id: "canva",
    name: "Canva",
    logo: "/placeholder.svg?height=40&width=40",
    color: "bg-[#00C4CC]/10",
    type: "Project Management",
  },
  {
    id: "chatgpt",
    name: "ChatGPT",
    logo: "/placeholder.svg?height=40&width=40",
    color: "bg-[#10A37F]/10",
    type: "Project Management",
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    logo: "/placeholder.svg?height=40&width=40",
    color: "bg-[#0077B5]/10",
    type: "Project Management",
  },
  {
    id: "skype",
    name: "Skype",
    logo: "/placeholder.svg?height=40&width=40",
    color: "bg-[#00AFF0]/10",
    type: "Project Management",
  },
  {
    id: "aws",
    name: "AWS",
    logo: "/placeholder.svg?height=40&width=40",
    color: "bg-[#FF9900]/10",
    type: "Project Management",
  },
  {
    id: "quickbooks",
    name: "QB",
    logo: "/placeholder.svg?height=40&width=40",
    color: "bg-[#2CA01C]/10",
    type: "Project Management",
  },
  {
    id: "slack",
    name: "Slack",
    logo: "/placeholder.svg?height=40&width=40",
    color: "bg-[#4A154B]/10",
    type: "Project Management",
  },
  {
    id: "honey",
    name: "Honey",
    logo: "/placeholder.svg?height=40&width=40",
    color: "bg-[#FFBB00]/10",
    type: "Project Management",
  },
]

// Sample data for people
const people: Person[] = [
  {
    id: "ariana",
    name: "Ariana",
    avatar: "/placeholder.svg?height=60&width=60",
    quote: "I automatically update articles of content to identify what's working and what's not.",
  },
  {
    id: "andrew",
    name: "Andrew",
    avatar: "/placeholder.svg?height=60&width=60",
    quote: "I automatically update articles of content to identify what's working and what's not.",
  },
  {
    id: "jane",
    name: "Jane Mary",
    avatar: "/placeholder.svg?height=60&width=60",
    quote: "I automatically update articles of content to identify what's working and what's not.",
  },
  {
    id: "kate",
    name: "Kate",
    avatar: "/placeholder.svg?height=60&width=60",
    quote: "I automatically update articles of content to identify what's working and what's not.",
  },
  {
    id: "name",
    name: "Name Cheap",
    avatar: "/placeholder.svg?height=60&width=60",
    quote: "I automatically update articles of content to identify what's working and what's not.",
  },
  {
    id: "ching",
    name: "Ching Monk",
    avatar: "/placeholder.svg?height=60&width=60",
    quote: "I automatically update articles of content to identify what's working and what's not.",
  },
  {
    id: "jack1",
    name: "Jack Mark",
    avatar: "/placeholder.svg?height=60&width=60",
    quote: "I automatically update articles of content to identify what's working and what's not.",
  },
  {
    id: "jack2",
    name: "Jack Mark",
    avatar: "/placeholder.svg?height=60&width=60",
    quote: "I automatically update articles of content to identify what's working and what's not.",
  },
  {
    id: "jack3",
    name: "Jack Mark",
    avatar: "/placeholder.svg?height=60&width=60",
    quote: "I automatically update articles of content to identify what's working and what's not.",
  },
]

// Combined items for the grid
const gridItems = [
  ...integrations.map((item) => ({ ...item, type: "integration" })),
  ...people.map((item) => ({ ...item, type: "person" })),
]

export default function IntegrationGrid() {
  const [shuffledItems, setShuffledItems] = useState<any[]>([])

  // Shuffle the grid items on mount
  useEffect(() => {
    const shuffled = [...gridItems].sort(() => Math.random() - 0.5)
    setShuffledItems(shuffled)
  }, [])

  return (
    <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-4">
      {shuffledItems.map((item, index) => (
        <motion.div
          key={`${item.type}-${item.id}-${index}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: index * 0.05,
            ease: "easeOut",
          }}
          className="h-full"
        >
          {item.type === "integration" ? <IntegrationCard integration={item} /> : <PersonCard person={item} />}
        </motion.div>
      ))}
    </div>
  )
}

function IntegrationCard({ integration }: { integration: Integration }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className={`rounded-xl p-4 h-full flex flex-col justify-between ${integration.color || "bg-zinc-800"}`}
    >
      <div className="flex justify-center items-center h-12 w-12 mx-auto mb-3">
        <Image
          src={integration.logo || "/placeholder.svg"}
          alt={integration.name}
          width={40}
          height={40}
          className="object-contain"
        />
      </div>
      <div className="text-center">
        <h3 className="font-medium text-white">{integration.name}</h3>
        <p className="text-xs text-zinc-400 mt-1">{integration.type}</p>
      </div>
    </motion.div>
  )
}

function PersonCard({ person }: { person: Person }) {
  return (
    <motion.div whileHover={{ scale: 1.05 }} className="bg-zinc-800/50 rounded-xl p-4 h-full flex flex-col">
      <div className="flex justify-center mb-3">
        <div className="h-16 w-16 rounded-full overflow-hidden">
          <Image
            src={person.avatar || "/placeholder.svg"}
            alt={person.name}
            width={60}
            height={60}
            className="object-cover"
          />
        </div>
      </div>
      <div className="text-center flex-1 flex flex-col">
        <h3 className="font-medium text-white mb-2">{person.name}</h3>
        <p className="text-xs text-zinc-400 flex-1">{person.quote}</p>
      </div>
    </motion.div>
  )
}
