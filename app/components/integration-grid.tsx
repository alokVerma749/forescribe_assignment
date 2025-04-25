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
  bgColor: string
}

interface Person {
  id: string
  name: string
  avatar: string
  quote: string
  bgColor: string
}

// Sample data for integrations
const integrations: Integration[] = [
  {
    id: "namecheap",
    name: "Name Cheap",
    logo: "/placeholder.svg?height=40&width=40",
    color: "bg-gradient-to-t from-[#F24E1E]/40 to-white dark:to-gray-900",
    type: "Project Management",
    bgColor: '#FF5301'
  },
  {
    id: "notion",
    name: "Notion",
    logo: "/placeholder.svg?height=40&width=40",
    color: "bg-black",
    type: "Project Management",
    bgColor: '#0A66C2'
  },
  {
    id: "canva",
    name: "Canva",
    logo: "/placeholder.svg?height=40&width=40",
    color: "bg-gradient-to-t from-[#00C4CC]/40 to-white dark:to-gray-900",
    type: "Project Management",
    bgColor: '#24BECA'
  },
  {
    id: "chatgpt",
    name: "ChatGPT",
    logo: "/placeholder.svg?height=40&width=40",
    color: "bg-gradient-to-t from-[#10A37F]/40 to-white dark:to-gray-900",
    type: "Project Management",
    bgColor: '#10A37F'
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    logo: "/placeholder.svg?height=40&width=40",
    color: "bg-gradient-to-t from-[#0077B5]/40 to-white dark:to-gray-900",
    type: "Project Management",
    bgColor: '#0A66C2'
  },
  {
    id: "skype",
    name: "Skype",
    logo: "/placeholder.svg?height=40&width=40",
    color: "bg-[#00AFF0]/10",
    type: "Project Management",
    bgColor: '#0098E3'
  },
  {
    id: "aws",
    name: "AWS",
    logo: "/placeholder.svg?height=40&width=40",
    color: "bg-[#FF9900]/10",
    type: "Project Management",
    bgColor: '#262E3B'
  },
  {
    id: "quickbooks",
    name: "QB",
    logo: "/placeholder.svg?height=40&width=40",
    color: "bg-[#2CA01C]/10",
    type: "Project Management",
    bgColor: '#2CA01C'
  },
  {
    id: "slack",
    name: "Slack",
    logo: "/placeholder.svg?height=40&width=40",
    color: "bg-[#4A154B]/10",
    type: "Project Management",
    bgColor: '#4A154B'
  },
  {
    id: "honey",
    name: "Honey",
    logo: "/placeholder.svg?height=40&width=40",
    color: "bg-gradient-to-t from-[#FFBB00] to-white dark:to-gray-900",
    type: "Project Management",
    bgColor: '#FFBB00'
  },
  {
    id: "chimp",
    name: "Mail Chimp",
    logo: "/assets/jane.png",
    type: "Project Management",
    color: "bg-gradient-to-t from-[#FFE002] to-white dark:to-gray-900",
    bgColor: '#FFE002'
  },
]

// Sample data for people
const people: Person[] = [
  {
    id: "ariana",
    name: "Ariana",
    avatar: "/assets/ariana.png",
    quote: "I automatically update articles of content to identify what's working and what's not.",
    bgColor: '#242059'
  },
  {
    id: "andrew",
    name: "Andrew",
    avatar: "/assets/andrew.png",
    quote: "I automatically update articles of content to identify what's working and what's not.",
    bgColor: '#242059'
  },
  {
    id: "jane",
    name: "Jane Mary",
    avatar: "/assets/jane.png",
    quote: "I automatically update articles of content to identify what's working and what's not.",
    bgColor: '#FF9CA8'
  },
  {
    id: "kate",
    name: "Kate",
    avatar: "/assets/kate.png",
    quote: "I automatically update articles of content to identify what's working and what's not.",
    bgColor: '#D2B7FF'
  },
  {
    id: "jack1",
    name: "Jack Mark",
    avatar: "/assets/jack.png",
    quote: "I automatically update articles of content to identify what's working and what's not.",
    bgColor: '#FF9CA8'
  },
  {
    id: "jack2",
    name: "Jack Mark",
    avatar: "/assets/jack.png",
    quote: "I automatically update articles of content to identify what's working and what's not.",
    bgColor: '#FF9CA8'
  },
  {
    id: "jack3",
    name: "Jack Mark",
    avatar: "/assets/jack.png",
    quote: "I automatically update articles of content to identify what's working and what's not.",
    bgColor: '#FF9CA8'
  },
]

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
      className={`rounded-xl p-4 h-96 flex flex-col justify-between ${integration.color || "bg-zinc-800"}`}

    >
      <div
        className="rounded-xl flex justify-center items-center h-28 w-full overflow-hidden mx-auto mb-3"
        style={{ backgroundColor: integration.bgColor }}
      >
        <Image
          src={integration.logo || "/placeholder.svg"}
          alt={integration.name}
          width={40}
          height={40}
          className="object-contain"
        />
      </div>
      <div className="text-center  h-1/2">
        <h3 className="font-semibold text-white">{integration.name}</h3>
        <p className="text-medium text-zinc-400 mt-1">{integration.type}</p>
      </div>
    </motion.div>
  )
}

function PersonCard({ person }: { person: Person }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-zinc-800/50 rounded-xl p-4 h-96 flex flex-col"
    >
      <div className="flex justify-center mb-3">
        <div
          className="rounded-xl h-28 w-full overflow-hidden flex justify-center items-end"
          style={{ backgroundColor: person.bgColor }}
        >
          <Image
            src={person.avatar || "/placeholder.svg"}
            alt={person.name}
            width={100}
            height={100}
            className="object-cover"
          />
        </div>
      </div>
      <div className="text-center flex-1 flex flex-col mt-14">
        <h3 className="text-white mb-2 font-semibold">{person.name}</h3>
        <p className="text-medium text-zinc-400 flex-1">{person.quote}</p>
      </div>
    </motion.div>
  )
}
