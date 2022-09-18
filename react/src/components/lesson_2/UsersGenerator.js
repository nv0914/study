import {useEffect, useState} from "react";
import {CreateUser} from "./UserPattern";
import {OpenDetails} from "./openDetails";
import {UserDetailsPattern} from "./UserDetailsPattern";


export function UserGenerator() {
    let [users, setUser] = useState([]);
    let [userDetails, setUserDetails] = useState(null);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(value => setUser(value))
    }, [])
    const moreInfo = (id) => {
        OpenDetails(id)
            .then(value => setUserDetails(value))
    }

    return (
        <div className={'users-wrap'}>
            <div className={'users-list'}> {
                users.map((value, index) => {
                    return (<CreateUser user={value} key={index}
                                        moreInfo={moreInfo}/>)
                })
            }</div>
            <div className={"users-details"}>{<UserDetailsPattern
                userDetails={userDetails}/>}</div>
        </div>
    )


}