function CharactersTable({ characters }) {
  const firstTenCharacters = characters.slice(0, 10);

  return (
    <section className="text-center mt-6">
      <h2 className="text-xl font-bold mb-4 underline">
        Rick and Morty characters
      </h2>
      <table className="mx-auto border-collapse border border-gray-300 shadow-md rounded-lg overflow-hidden">
        <thead className="bg-[#249D8C] text-white">
          <tr>
            <th className="border border-gray-300 px-4 py-2">Name</th>
            <th className="border border-gray-300 px-4 py-2">Location</th>
            <th className="border border-gray-300 px-4 py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {firstTenCharacters.map((character) => (
            <tr key={character.id} className="border border-gray-300">
              <td className="border border-gray-300 px-4 py-2">
                {character.name}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {character.location.name}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {character.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default CharactersTable;
