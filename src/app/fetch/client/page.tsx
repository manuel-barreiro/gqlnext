"use client"
import { fetchData } from "@/lib/functions"
import { useEffect, useState } from "react"
import Image from "next/image";
import { Character } from "@/types/types";

const query = `
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

  const [results, setResults] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchResults = async () => {
      setLoading(true);

      try {
        const response = await fetch("https://rickandmortyapi.com/graphql", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query
        }),
        });
        const result = await response.json();
        setResults(result.data.characters.results)
        
        } catch (error) {
          console.error(error);
        }

        setLoading(false);
    }
    fetchResults()
  }, [])

  return (
    <>
      {loading ? 

        <div>Loading...</div> :

        <div className="grid grid-cols-3">
          {results.map((char: Character) => (
            <div key={char.id}>
              {char.name}
              <Image src={char.image} alt="" width={200} height={200} />
            </div>
          ))}
        </div>
      }
    </>
    
  )
}

export default page