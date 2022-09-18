export function SpaceXPattern(props) {
    let {launch} = props
    return(
        <div>
            <img src={launch.links.mission_patch_small} alt=""/>
        <h2>{launch.mission_name}</h2>
        <p>Launched in {launch.launch_year}</p>


        </div>


)
}