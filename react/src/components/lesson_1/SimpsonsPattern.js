
export function CreateSimpson(props) {
    let {member} = props
    return (<div>
<h2>
    {member.name}
</h2>
        <p>
            {member.description}
        </p>
        <img src={member.photo}/>
    </div>)
}