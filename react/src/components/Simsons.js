import {family} from "../assets/SimpsonsData";
import {CreateSimpson} from "./SimpsonsPattern";


export function Simpsons() {
return (
    <div>
        {
            family.map((value,index) => (<CreateSimpson member={value} key={index}/>))
        }
    </div>
)



}