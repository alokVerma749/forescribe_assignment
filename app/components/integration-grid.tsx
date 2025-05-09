"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

// Define integration types
interface Brand {
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

// Sample data for brands
const brands: Brand[] = [
  {
    id: "namecheap",
    name: "Name Cheap",
    logo: "/assets/namecheap.png",
    color: "bg-gradient-to-t from-[#F24E1E]/40 to-white dark:to-[#FFFFFF]",
    type: "Project Management",
    bgColor: '#FF5301'
  },
  {
    id: "notion",
    name: "Notion",
    logo: "/assets/notion.png",
    color: "bg-gradient-to-t from-black/20 to-[#FFFFFF]",
    type: "Project Management",
    bgColor: '#000000'
  },
  {
    id: "canva",
    name: "Canva",
    logo: "/assets/canva.png",
    color: "bg-gradient-to-t from-[#00C4CC]/40 to-white dark:to-[#FFFFFF]",
    type: "Project Management",
    bgColor: '#24BECA'
  },
  {
    id: "chatgpt",
    name: "ChatGPT",
    logo: "/assets/gpt.png",
    color: "bg-gradient-to-t from-[#10A37F]/40 to-white dark:to-gray-900",
    type: "Project Management",
    bgColor: '#10A37F'
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    logo: "/assets/linkedin.png",
    color: "bg-gradient-to-t from-[#0077B5]/40 to-white dark:to-gray-900",
    type: "Project Management",
    bgColor: '#0A66C2'
  },
  {
    id: "skype",
    name: "Skype",
    logo: "/assets/skype.png",
    color: "bg-gradient-to-t from-[#0098E3]/20 to-white dark:to-gray-900",
    type: "Project Management",
    bgColor: '#0098E3'
  },
  {
    id: "aws",
    name: "AWS",
    logo: "/assets/aws.png",
    color: "bg-gradient-to-t from-[#3C434F]/40 to-white dark:to-[#FFFFFF]",
    type: "Project Management",
    bgColor: '#262E3B'
  },
  {
    id: "quickbooks",
    name: "QB",
    logo: "/assets/qb.png",
    color: "bg-gradient-to-t from-[#2CA01C]/40 to-white dark:to-[#FFFFFF]",
    type: "Project Management",
    bgColor: '#2CA01C'
  },
  {
    id: "flatfile",
    name: "Flatfile",
    logo: "/assets/flatfile.png",
    color: "bg-gradient-to-t from-[#FEE4CB]/40 to-white dark:to-[#FFFFFF]",
    type: "Project Management",
    bgColor: '#FEE4CB'
  },
  {
    id: "chimp",
    name: "Mail Chimp",
    logo: "/assets/chimp.png",
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
    quote: '“We automatically resolve 25% of customer queries across desktop and mobile using Intercom bots.”',
    bgColor: '#242059'
  },
  {
    id: "andrew",
    name: "Andrew",
    avatar: "/assets/andrew.png",
    quote: '“We automatically resolve 25% of customer queries across desktop and mobile using Intercom bots.”',
    bgColor: '#242059'
  },
  {
    id: "jane",
    name: "Jane Mary",
    avatar: "/assets/jane.png",
    quote: '“We automatically resolve 25% of customer queries across desktop and mobile using Intercom bots.”',
    bgColor: '#FF9CA8'
  },
  {
    id: "kate",
    name: "Kate",
    avatar: "/assets/kate.png",
    quote: '“We automatically resolve 25% of customer queries across desktop and mobile using Intercom bots.”',
    bgColor: '#D2B7FF'
  },
  {
    id: "jack1",
    name: "Jack Mark",
    avatar: "/assets/jack.png",
    quote: '“We automatically resolve 25% of customer queries across desktop and mobile using Intercom bots.”',
    bgColor: '#FF9CA8'
  },
  {
    id: "jack2",
    name: "Jack Mark",
    avatar: "/assets/jack.png",
    quote: '“We automatically resolve 25% of customer queries across desktop and mobile using Intercom bots.”',
    bgColor: '#FF9CA8'
  },
  {
    id: "jack3",
    name: "Jack Mark",
    avatar: "/assets/jack.png",
    quote: '“We automatically resolve 25% of customer queries across desktop and mobile using Intercom bots.”',
    bgColor: '#FF9CA8'
  },
]

const gridItems = [
  ...brands.map((item) => ({ ...item, type: "integration" })),
  ...people.map((item) => ({ ...item, type: "person" })),
]

export default function IntegrationGrid() {
  const [shuffledItems, setShuffledItems] = useState<any[]>([]);

  // Shuffle the grid items on mount
  useEffect(() => {
    const shuffled = [...gridItems].sort(() => Math.random() - 0.5);
    setShuffledItems(shuffled);
  }, []);

  return (
    <div
      className="grid grid-cols-2  sm:grid-cols-3  md:grid-cols-4  lg:grid-cols-5  gap-4  p-4 min-h-[150vh]">
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
          {item.type === "integration" ? (
            <IntegrationCard brand={item} />
          ) : (
            <PersonCard person={item} />
          )}
        </motion.div>
      ))}
    </div>
  );
}

function IntegrationCard({ brand }: { brand: Brand }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className={`rounded-xl p-4 h-96 flex flex-col justify-between ${brand.color || "bg-zinc-800"}`}

    >
      <div
        className="rounded-xl flex justify-center items-center h-28 w-full overflow-hidden mx-auto mb-3"
        style={{ backgroundColor: brand.bgColor }}
      >
        <Image
          src={brand.logo || "/placeholder.svg"}
          alt={brand.name}
          width={50}
          height={50}
          className="object-contain"
        />
      </div>
      <div className="text-center  h-1/2">
        <h3 className="font-semibold text-[#111111] dark:text-white">{brand.name}</h3>
        <p className="text-medium mt-1 text-[#111111] dark:text-white">{brand.type}</p>
      </div>
    </motion.div>
  )
}

function PersonCard({ person }: { person: Person }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white dark:bg-zinc-700 rounded-xl p-4 h-96 flex flex-col"
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
            height={70}
            className="object-contain"
          />
        </div>
      </div>
      <div className="text-center flex-1 flex flex-col mt-14">
        <h3 className="mb-2 font-semibold text-[#111111] dark:text-white">{person.name}</h3>
        <p className="text-medium flex-1 text-[#111111] dark:text-white">{person.quote}</p>
      </div>
    </motion.div>
  )
}
