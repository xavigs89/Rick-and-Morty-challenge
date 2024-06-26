import { filterButton } from "../styles";

function Filters({
  species,
  setSpecies,
  status,
  setStatus,
  gender,
  setGender,
}) {
  return (
    <div className="flex justify-center mt-4">
      <select
        className={filterButton}
        value={species}
        onChange={(event) => setSpecies(event.target.value)}
      >
        <option value="">All Species</option>
        <option value="Human">Human</option>
        <option value="Alien">Alien</option>
      </select>
      <select
        className={filterButton}
        value={status}
        onChange={(event) => setStatus(event.target.value)}
      >
        <option value="">All Status</option>
        <option value="Alive">Alive</option>
        <option value="Dead">Dead</option>
        <option value="unknown">Unknown</option>
      </select>
      <select
        className={filterButton}
        value={gender}
        onChange={(event) => setGender(event.target.value)}
      >
        <option value="">All Genders</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Genderless">Genderless</option>
        <option value="unknown">Unknown</option>
      </select>
    </div>
  );
}

export default Filters;
