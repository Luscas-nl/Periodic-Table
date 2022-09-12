import "./element.css"

function Element(props){
    function openModal(){
        const modalContainer = document.querySelector(".modalContainer")
        const modal = document.querySelector(".modal")
        const symbol = document.querySelector(".titleModal")
        const name = document.querySelector(".descModal")
        const number = document.querySelector(".elementNumberModal")
        const mass = document.querySelector(".massModal")
        const eletro = document.querySelector(".eletroModal")
        let type

        if(props.type == "noble gas"){
            type = "noble"
        }
        else if(props.type == "alkali metal"){
            type = "alkali"
        }
        else if(props.type == "alkaline earth metal"){
            type = "alkaline"
        }
        else if(props.type == "transition metal"){
            type = "transition"
        }
        else if(props.type == "post-transition metal"){
            type = "post-transition"
        }
        else{
            type = props.type
        }

        symbol.innerHTML = props.init
        name.innerHTML = props.name
        number.innerHTML = props.number
        mass.innerHTML = props.mass
        eletro.innerHTML = props.eletro

        modalContainer.classList.add("show")
        modal.classList.add(type)
        modalContainer.addEventListener("click", (e) => {
            if(e.target.id == "modalContainer"){
                modalContainer.classList.remove("show")
                modal.classList.remove(type)
            }
        })
    }

    return(
        <div class="principalContainer" style={{gridRow: props.row, gridColumn: props.column}} onClick={openModal}>
            <div class="boxElement" type={props.type?? "default"} mass={props.mass} eletro={props.eletro}>
                <p class="elementNumber">{props.number ?? "1"}</p>
                <h1 class="title">{props.init ?? "H"}</h1>
                <p class="desc">{props.name ?? "Hidrogênio"}</p>
            </div>
        </div>
    )
}

export default Element