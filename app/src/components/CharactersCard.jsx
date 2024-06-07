import { useUpdatingCharacter } from "../App";

function CharactersCard({ character }) {

    const { setUpdatingCharacter } = useUpdatingCharacter()
    const handleEditClick = () => setUpdatingCharacter(character)
    

    return <article className="max-w-sm mx-4 overflow-hidden flex p-1 border rounded-xl shadow-md bg-white mt-4">

        <div className="flex flex-col justify-between h-full text-left">
            <p><strong>Name:</strong> {character.name}</p>
            <p><strong>Location:</strong> {character.location.name}</p>
            <p><strong>Status:</strong> {character.status}</p>

            <img src={character.image} alt="" />

            <button onClick={() => handleEditClick(character)} className="bg-[#249D8C] text-white font-bold py-2 px-4 rounded ">
                Edit character
            </button>
        </div>
        {/* {updatingCharacter && <EditCharacterForm character={updatingCharacter} onCancelClick={handleCancelClick} />} */}

    </article>
}

export default CharactersCard