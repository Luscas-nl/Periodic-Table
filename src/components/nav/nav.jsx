import './nav.css'
import Check from './check/check'

function Nav(){

    const elementsGroups = ["Non Metal", "Noble Gas", "Alkali Metal", "Alkaline Earth Metal", "Metalloid", "Halogen", "Metal", "Transition Metal", "Lanthanoid", "Actinoid", "Post-Transition Metal"]


    return(
        <div class="nav" id="nav">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <h1>Groups</h1>
            <div className="filters">
                {elementsGroups.map(group => {
                    return <Check label={group} type={group}/>
                })}
            </div>
            <div class="boxLinks">
                <a class="link" href="https://github.com/Luscas-nl/Periodic-Table" target="_blank"><i class="fa fa-github fa-lg fa-inverse"></i></a>
                <a class="link" href="https://instagram.com/luscas.nl" target="_blank"><i class="fa fa-instagram fa-lg fa-inverse"></i></a>
            </div>
        </div>
    )
}

export default Nav