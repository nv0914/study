
export function UserDetailsPattern(props) {
    let {userDetails} = props
if (userDetails) {
    return (<div>
        <h2>
           Username: {userDetails.username}
        </h2>
        <h2>
            Phone: {userDetails.phone}
        </h2>
        <h2>
            email: {userDetails.email}
        </h2>

    </div>)
}
}