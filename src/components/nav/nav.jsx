import './nav.css'
import Check from './check/check'

function Nav(){

    const elementsGroups = ["Non Metal", "Noble Gas", "Alkali Metal", "Alkaline Earth Metal", "Metalloid", "Halogen", "Metal", "Transition Metal", "Lanthanoid", "Actinoid", "Post-Transition Metal"]


    return(
        <div class="nav" id="nav">
            <h1>Groups</h1>
            <div className="filters">
                {elementsGroups.map(group => {
                    return <Check label={group} type={group}/>
                })}
            </div>
        </div>
    )
}

export default Nav