import { useUpdatingCharacter } from "../App";

import { mainButton } from "../styles";

function CharactersCard({ character }) {

    const { setUpdatingCharacter } = useUpdatingCharacter()
    const handleEditClick = () => setUpdatingCharacter(character)
    // const { setDetailsCharacter } = useDetailsCharacter()
    const handleDetailsClick = () => setDetailsCharacter(character)
    

    return (
        <article className="flex flex-col flex-wrap border rounded-xl shadow-md bg-white">
            <div className="flex flex-col justify-between p-4 h-full">
                <div className="text-left">
                    <p><strong>Name:</strong> {character.name}</p>
                    <p><strong>Location:</strong> {character.location.name}</p>
                    <p><strong>Status:</strong> {character.status}</p>
                </div>
                <div className="mt-auto">
                    <img src={character.image} alt="" className="mt-2 mb-4 rounded-md" />
                    <div className="flex justify-center">
                            <button onClick={() => handleEditClick(character)} className={`${mainButton} mr-2`}>
                                Edit
                            </button>
                            <button onClick={() => handleDetailsClick(character)} className={mainButton}>
                                Details
                            </button>
                        </div>
                </div>
            </div>
        </article>
    );
}

export default CharactersCard