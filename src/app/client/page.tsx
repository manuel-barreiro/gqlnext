"use client"

import { gql } from "@apollo/client"
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr"
import { Character } from "@/types/types"
import Image from "next/image"


const query = gql`
  query {
          characters(page: 2) {
            results {
              id
              name
              image
            }
          }
      }
  `

function page() {
  const { data }: {data: any } = useSuspenseQuery(query)
  const characters: [Character] = data.characters.results
  console.log(characters)

  return (
    <div className="grid grid-cols-3">
      {characters.map((char: Character) => (
        <div key={char.id}>
          {char.name}
          <Image src={char.image} alt="" width={200} height={200} />
        </div>
      ))}
    </div>
  )
}

export default page