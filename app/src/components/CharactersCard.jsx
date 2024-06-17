import { useUpdatingCharacter } from "../App";

import { mainButton } from "../styles";

function CharactersCard({ character }) {

    const { setUpdatingCharacter } = useUpdatingCharacter()
    const handleEditClick = () => setUpdatingCharacter(character)
    

    return (
        <article className="max-w-[300px] mx-4 overflow-hidden flex flex-col border rounded-xl shadow-md bg-white mt-4">
            <div className="flex flex-col justify-between p-4 h-full">
                <div className="text-left">
                    <p><strong>Name:</strong> {character.name}</p>
                    <p><strong>Location:</strong> {character.location.name}</p>
                    <p><strong>Status:</strong> {character.status}</p>
                </div>
                <div className="mt-auto">
                    <img src={character.image} alt="" className="mt-2 mb-4 rounded-md" />
                    <button onClick={() => handleEditClick(character)} className={mainButton}>
                        Edit character
                    </button>
                </div>
            </div>
        </article>
    );
}

export default CharactersCard