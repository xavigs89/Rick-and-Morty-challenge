import { useUpdatingCharacter } from "../App"

function EditCharacterForm({ character, characters, setCharacters }) {

    const { setUpdatingCharacter } = useUpdatingCharacter()

    const handleCancelClick = () => setUpdatingCharacter(null)

    const handleSubmit = event => {
        event.preventDefault()

        const form = event.target

        const updatedCharacter = {
            //clonar el objeto character
            ...character,
            //sobreescribir las propiedades que quieres con los valores del form
            name: form.name.value,
            location: { ...character.location, name: form.location.value },
            status: form.status.value
        }

        const newCharacters = characters.map(character => character.id === updatedCharacter.id ? updatedCharacter : character)

        setCharacters(newCharacters)
        setUpdatingCharacter(null)

    }

    return <section className="h-screen w-screen fixed top-0 left-0 flex justify-center items-center flex-col bg-black bg-opacity-70 py-8 px-4 border-rounded xl "
    >
        <div className='w-[30%] flex flex-col border p-4 rounded-xl bg-[#249D8C] transition-opacity duration-500 opacity-100'>
            <form onSubmit={handleSubmit} className="flex flex-col items-center" >
                <label className="text-center font-semibold" >Name</label>
                <input className="w-full h-[30px] rounded-md text-center" id="name" defaultValue={character.name} name="name" type="text" />

                <label className="mt-2 text-center font-semibold" >Location</label>
                <input className="w-full h-[30px] rounded-md text-center" id="location" defaultValue={character.location.name} name="location" type="text" />

                <label className="mt-2 text-center font-semibold" >Status</label>
                <input className="w-full h-[30px] rounded-md text-center" id="status" defaultValue={character.status} name="status" type="text" />

                <button type="submit" className="font-semibold py-2 px-4 rounded w-full mt-4 bg-yellow-500" >Save Changes</button>

            </form>
            <button onClick={handleCancelClick} className="font-semibold py-2 px-4 rounded w-full mt-4 bg-gray-500 text-white">Cancel</button>

        </div>

    </section>
}

export default EditCharacterForm