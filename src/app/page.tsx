import Image from "next/image";
import { Character } from "@/types/types";
import { loadData } from "@/lib/functions";

export default async function Home() {
  const characters: [Character] = await loadData()
  console.log(typeof(characters))
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
  );
}
