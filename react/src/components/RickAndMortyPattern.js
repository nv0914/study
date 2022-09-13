
export function CreateCharacter(props) {
    let {character} = props
    return (<div>
        <h2>
            {character.id} - {character.name}
        </h2>
        <p>
           status: {character.status}
        </p>
        <p>
            species: {character.species}
        </p>
        <p>
            gender: {character.gender}
        </p>
        <img src={character.image}/>
    </div>)
}