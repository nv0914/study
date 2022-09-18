import './App.css';
import {UserGenerator} from "./components/lesson_2/UsersGenerator";
import {SpaceXGenerator} from "./components/lesson_2/SpaceXGenerator";

// import {CharacterGenerator} from "./components/lesson_1/CharacterGenerator";

function App() {
    return (<div>
            {/*<CharacterGenerator/>*/
                <SpaceXGenerator/>
            }
        </div>
    );
}

export default App;
