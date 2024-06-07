
import CharactersCard from "./CharactersCard"

function CharactersList({ characters }) {

    return <section className="flex flex-wrap justify-center">
        {characters && characters.map(character =>
            <CharactersCard
                key={character.id}
                character={character}
            />)}


    </section>

}

export default CharactersList