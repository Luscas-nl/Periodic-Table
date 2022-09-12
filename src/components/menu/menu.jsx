import './menu.css'

function Menu(props){

    function openMenu(){
        const nav = document.getElementById(props.nav)
        const icon = document.querySelector(".fa")
        nav.classList.toggle("opened")
        icon.classList.toggle("fa-bars")
        icon.classList.toggle("fa-close")
    }

    return(
        <div>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <button class="menuButton" id="menuBtn" onClick={openMenu}>
                <i class="fa fa-bars fa-lg fa-inverse"></i>
            </button>
        </div>
    )
}

export default Menu