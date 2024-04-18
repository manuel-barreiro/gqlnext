import { fetchData } from '@/lib/functions';
import { Character } from '@/types/types';
import Image from 'next/image';

async function page() {
  const characters = await fetchData()
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