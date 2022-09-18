import {useEffect, useState} from "react";
import {SpaceXPattern} from "./SpaceXPattern";

export function SpaceXGenerator() {
    let [launch, setLaunch] = useState([]);


    useEffect(() => {
        fetch('https://api.spacexdata.com/v3/launches/')
            .then(response => response.json())
            .then(value => value.filter(value=> value.launch_year !== '2020'))
            .then(value => setLaunch(value))
    }, [])

    return (
        <div>{
            launch.map((value, index) => {
                return (<SpaceXPattern launch={value} key={index}/>)
            })}
        </div>


    )


}


