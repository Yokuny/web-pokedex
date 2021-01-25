import Image from "next/image"
import Link from "next/link"
export default function IndexPage({pokemon}) {
  console.log(pokemon);
  return (
      <div className="grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-3">
          {pokemon.map((thePokemon, index) => 
            <div className="p-2 bg-gray-400 hover:bg-gray-500 rounded">
              <Image
                src={thePokemon.image}
                alt='pokemon image'
                height={200}
                width={200}
              />
              <div className="text-center">
                <code className="text-xs">{index+1} </code> <code className="font-bold">{thePokemon.name}</code>
              </div>
            </div>
          )}
      </div>
  )
}
export async function getStaticProps() {
  try {
      const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=150');
      const { results } = await res.json();
      const pokemon = results.map((pokeman, index) => {
          const paddedId = ('00' + (index + 1)).slice(-3);
          const image = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${paddedId}.png`;
          return { ...pokeman, image };
      });
      return {
          props: { pokemon },
      };
  } catch (err) {
      console.error(err);
  }
}