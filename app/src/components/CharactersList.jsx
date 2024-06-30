
import CharactersCard from "./CharactersCard"

function CharactersList({ characters }) {

    return (
        <section className="flex flex-wrap justify-center mt-4">
            {characters && characters.map(character => (
                <div key={character.id} className="w-full lg:w-1/5 p-2">
                    <CharactersCard character={character} />
                </div>
            ))}
        </section>
    );
}

export default CharactersList