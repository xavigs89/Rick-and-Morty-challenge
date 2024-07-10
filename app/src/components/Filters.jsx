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
    <div className="space-x-4">
      <select
       className={filterButton}
        value={status}
        onChange={(event) => setStatus(event.target.value)}
      >
      <option value="">All Status</option>
      <option className="text-left" value="Alive">Alive</option>
      <option className="text-left" value="Dead">Dead</option>
      <option className="text-left" value="unknown">Unknown</option>
      </select>

      <select
        className={filterButton}
        value={species}
        onChange={(event) => setSpecies(event.target.value)}
      >
        <option value="">All Species</option>
        <option className="text-left" value="Human">Human</option>
        <option className="text-left" value="Alien">Alien</option>
        <option className="text-left" value="Humanoid">Humanoid</option>
        <option className="text-left" value="Poopybutthole">Poopybutthole</option>
        <option className="text-left" value="Mythological">Mythological</option>
        <option className="text-left" value="Animal">Animal</option>
        <option className="text-left" value="Robot">Robot</option>
        <option className="text-left" value="Disease">Disease</option>
        <option className="text-left" value="Cronenberg">Cronenberg</option>
        <option className="text-left" value="Unknown">Unknown</option>

      </select>

      <select
        className={filterButton}
        value={gender}
        onChange={(event) => setGender(event.target.value)}
      >
        <option value="">All Genders</option>
        <option className="text-left" value="Male">Male</option>
        <option className="text-left" value="Female">Female</option>
        <option className="text-left" value="Genderless">Genderless</option>
        <option className="text-left" value="unknown">Unknown</option>
      </select>
    </div>
  );
}

export default Filters;
