import { PokemonQuery } from "graphql/generated"
import React from "react"

interface PokemonProps {
  pokemon?: PokemonQuery["getPokemon"]
  loading?: boolean
}

export const Pokemon: React.FC<PokemonProps> = ({ pokemon, loading }) => {
  return (
    <div className="items-start w-1/4 pt-4 font-mono">
      {loading && <p>loading...</p>}
      {pokemon && (
        <div className="flex flex-col space-y-2">
          <div className="flex space-x-2">
            <p className="font-semibold">
              {pokemon.species.charAt(0).toUpperCase() + pokemon?.species.slice(1)}
            </p>
            <p>{`(${pokemon.num})`}</p>
            {pokemon.types.map((type, i, arr) => (
              <div key={i} className="flex">
                {type}
                {`${i < arr.length - 1 ? "," : ""}`}
              </div>
            ))}
          </div>
          {pokemon.flavorTexts.map((text, i) => (
            <div key={i} className="flex flex-col space-y-2">
              <p>{text.flavor}</p>
              <p className="self-end text-xs italic text-gray-500">- {text.game}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
